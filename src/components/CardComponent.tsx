export function CardComponent({ title, value, status, icon, bgColor  }) {
  return (
    <div className={`w-52 p-5 rounded-lg shadow flex flex-col items-center text-center ${bgColor}`}>
      <div className="w-15 h-15 rounded-full bg-blue-100 flex justify-center items-center mb-2">
        <img src={icon} className="w-24 h-24" />
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-semibold mb-1">{title}</div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-sm text-gray-500 flex items-center justify-center">
          {status}
        </div>
      </div>
    </div>
  );
}