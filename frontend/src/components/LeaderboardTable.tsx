import type { User } from '../services/api';

interface Props {
  users: User[];
}

export default function LeaderboardTable({ users }: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u._id} className="text-center">
            <td>{u.rank}</td>
            <td className="text-left">{u.name}</td>
            <td>{u.totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
