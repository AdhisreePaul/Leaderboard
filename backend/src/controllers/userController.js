const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users.map((u, i) => ({ ...u.toObject(), rank: i + 1 })));
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'name required' });
    const user = await User.create({ name: name.trim() });
    
    // Check if io is available before emitting
    if (req.io) {
      req.io.emit('leaderboardUpdate');
    }
    
    res.status(201).json(user);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    const points = Math.floor(Math.random() * 10) + 1; // 1‑10 inclusive
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: points } },
      { new: true }
    );
    
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    await ClaimHistory.create({ user: user._id, points });
    
    // Check if io is available before emitting
    if (req.io) {
      req.io.emit('leaderboardUpdate');
    }
    
    res.json({ userId: user._id, points, total: user.totalPoints });
  } catch (error) {
    console.error('Error claiming points:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
