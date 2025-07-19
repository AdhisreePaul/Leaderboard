interface Props {
  onClick: () => void;
}

export default function ClaimButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
    >
      Claim Points
    </button>
  );
}
  