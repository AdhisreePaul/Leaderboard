import { useEffect } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Notification = ({ message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      default: return '📢';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'info': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full mx-4">
      <div className={`${getBgColor()} text-white px-4 py-3 rounded-lg shadow-2xl flex items-center justify-between`}>
        <div className="flex items-center space-x-2">
          <span className="text-lg">{getIcon()}</span>
          <span className="text-sm font-medium">{message}</span>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors duration-200 ml-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Notification;