import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import {
  fetchUsers,
  addUser,
  claimPoints,
} from './services/api';
import type { User } from './services/api';

import UserSelector from './components/UserSelector';
import AddUserForm from './components/AddUserForm';
import ClaimButton from './components/ClaimButton';
import Notification from './components/Notification';

const socket = io(import.meta.env.VITE_API_URL);

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [activeTab, setActiveTab] = useState('wealth');
  const [timeFilter, setTimeFilter] = useState('daily');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const loadUsers = async () => {
    try {
    const data = await fetchUsers();
    setUsers(data);
      showNotification('Leaderboard updated! 🏆', 'success');
    } catch (error) {
      showNotification('Failed to load leaderboard', 'error');
    }
  };

  useEffect(() => {
    loadUsers();
    socket.on('leaderboardUpdate', loadUsers);
    return () => {
      socket.off('leaderboardUpdate');
    };
  }, []);

  const handleAddUser = async (name: string) => {
    try {
    await addUser(name);
    loadUsers();
      showNotification('New user has been added! 👤', 'success');
    } catch (error: any) {
      console.error('Add user error:', error);
      showNotification(`Failed to add user: ${error.response?.data?.message || error.message}`, 'error');
    }
  };

  const handleClaim = async () => {
    if (!selectedUserId) {
      showNotification('Please select a user first! 👤', 'info');
      return;
    }
    try {
    await claimPoints(selectedUserId);
      showNotification('Your points has been claimed! 🎉', 'success');
    } catch (error: any) {
      console.error('Claim points error:', error);
      showNotification(`Failed to claim points: ${error.response?.data?.message || error.message}`, 'error');
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    showNotification(`Switched to ${tab} ranking! 🎉`, 'info');
  };

  const handleTimeFilterChange = (filter: string) => {
    setTimeFilter(filter);
    showNotification(`Filtered by ${filter} view! ⏰`, 'info');
  };

  const top3Users = users.slice(0, 3);
  const otherUsers = users.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-white max-w-md mx-auto relative">
      {/* Notification */}
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)}
        />
      )}

      {/* Status Bar */}
      <div className="bg-black text-white px-4 py-2 text-sm flex justify-between items-center">
        <span>10:14</span>
        <div className="flex items-center gap-2">
          <span></span>
          <span>1 device</span>
          <span>☀️</span>
          <span>612 KB/S</span>
          <span></span>
          <span>64%</span>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="flex items-center px-4 py-3">
          <button 
            onClick={() => showNotification('Back navigation! ⬅️', 'info')}
            className="text-black mr-4 text-xl hover:text-yellow-600 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            ←
          </button>
          <div className="flex space-x-4 flex-1 overflow-x-auto scrollbar-hide">
            {['e Ranking', 'Hourly Ranking', 'Family Ranking', 'Wealth Ranking'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab.toLowerCase().replace(' ', ''))}
                className={`text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95 ${
                  activeTab === tab.toLowerCase().replace(' ', '') 
                    ? 'text-yellow-600 border-b-2 border-yellow-500 shadow-sm' 
                    : 'text-gray-600 hover:text-yellow-500 hover:shadow-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button 
            onClick={() => showNotification('Help section opened! ❓', 'info')}
            className="text-gray-600 ml-2 text-lg hover:text-yellow-600 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            ?
          </button>
        </div>

        {/* Sub Navigation */}
        <div className="flex px-4 pb-3">
          {['Daily', 'Monthly'].map((filter) => (
            <button
              key={filter}
              onClick={() => handleTimeFilterChange(filter.toLowerCase())}
              className={`px-4 py-2 rounded-lg text-sm font-medium mr-3 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg ${
                timeFilter === filter.toLowerCase()
                  ? 'bg-gray-200 text-orange-600 shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-orange-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 pb-20">
        {/* Header Banner with Trophy */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-2xl p-6 mb-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-orange-300/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="text-white">
                <div className="text-sm opacity-90">Settlement time</div>
                <div className="text-lg font-bold">14 days 01:45:47</div>
              </div>
              <button 
                onClick={() => showNotification('Rewards claimed! 🎁', 'success')}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                🎁 Rewards
              </button>
            </div>
            
            {/* Central Trophy */}
            <div className="flex justify-center mb-6">
              <div className="relative hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-6xl">🛡️</div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl">💎</div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl">⭐</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 3 Section */}
        {top3Users.length > 0 && (
          <div className="flex justify-center space-x-3 mb-6">
            {top3Users.map((user, index) => (
              <div
                key={user._id}
                className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-200 ${
                  index === 0 ? 'order-2' : index === 1 ? 'order-1' : 'order-3'
                }`}
                onClick={() => showNotification(`${user.name} is rank ${index + 1}! 👑`, 'info')}
              >
                <div className={`rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-all duration-200 ${
                  index === 0 ? 'w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600' : 
                  index === 1 ? 'w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600' : 
                  'w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  <span className={`${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {index === 0 ? '' : index === 1 ? '🥈' : '🥉'}
                  </span>
                </div>
                <div className="text-center">
                  <div className={`font-bold mb-1 truncate ${
                    index === 0 ? 'text-sm w-24' : 'text-sm w-20'
                  }`}>
                    {user.name}
                  </div>
                  <div className={`text-xs px-3 py-1 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-200 ${
                    index === 0 ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' : 
                    index === 1 ? 'bg-blue-100 text-blue-800 border border-blue-200' : 
                    'bg-orange-100 text-orange-800 border border-orange-200'
                  }`}>
                    {user.totalPoints}*****{user.totalPoints}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ranked List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {otherUsers.map((user, index) => (
            <div 
              key={user._id} 
              className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 cursor-pointer hover:shadow-md"
              onClick={() => showNotification(`${user.name} is rank ${index + 4}! 🏆`, 'info')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-sm">
                {index + 4}
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg mr-3 shadow-sm hover:shadow-md transition-all duration-200">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">{user.name}</div>
                <div className="text-xs text-gray-500">🏆</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-yellow-200">
                {user.totalPoints}*****{user.totalPoints}
              </div>
            </div>
          ))}
        </div>

        {/* User's Own Rank */}
        <div className="bg-white rounded-2xl shadow-lg mt-4 p-4 hover:shadow-xl transition-all duration-200 cursor-pointer"
             onClick={() => showNotification('This is your rank! 🎯', 'info')}>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-sm font-bold mr-3 shadow-sm">
              999+
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg mr-3 shadow-sm hover:shadow-md transition-all duration-200">
              📊
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">You</div>
              <div className="text-xs text-gray-500">VP 4</div>
            </div>
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-300">
              0
            </div>
          </div>
        </div>

        {/* Admin Controls */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-200">
          <div className="text-sm font-semibold text-gray-700 mb-3">Admin Panel</div>
          <div className="space-y-3">
      <AddUserForm onAdded={handleAddUser} />
      <div className="flex gap-2 items-center">
        <UserSelector
          users={users}
          value={selectedUserId}
          onChange={setSelectedUserId}
        />
        <ClaimButton onClick={handleClaim} />
      </div>
            {/* Remove this section - the green notification */}
            {/* {lastClaim && (
              <p className="text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                {users.find((u) => u._id === lastClaim.userId)?.name} gained <b>{lastClaim.points}</b> points (total {lastClaim.total})
              </p>
            )} */}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 max-w-md mx-auto">
        <div className="flex justify-around py-3">
          <button 
            onClick={() => showNotification('Menu opened! ☰', 'info')}
            className="text-gray-600 hover:text-yellow-500 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            ☰
          </button>
          <button 
            onClick={() => showNotification('Home navigation! 🏠', 'info')}
            className="text-gray-600 hover:text-yellow-500 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            ●
          </button>
          <button 
            onClick={() => showNotification('Back navigation! ⬅️', 'info')}
            className="text-gray-600 hover:text-yellow-500 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            ■
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
