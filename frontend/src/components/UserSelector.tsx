import type { User } from '../services/api';

interface Props {
  users: User[];
  value: string;
  onChange: (val: string) => void;
}

export default function UserSelector({ users, value, onChange }: Props) {
  return (
    <select
      className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select user</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
