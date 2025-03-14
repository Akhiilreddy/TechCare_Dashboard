export function CardComponent({ title, value, status, icon, bgColor  }) {
  return (
    <div className={`w-[228px] h-[242px] p-5 rounded-lg shadow flex flex-col justify-start items-start text-center ${bgColor}`}>
      <div className="w-15 h-15 rounded-full bg-blue-100 flex justify-center items-start mb-2">
        <img src={icon} className="w-24 h-24" />
      </div>
      <div className="flex flex-col items-start">
        <div className="text-sm font-semibold mb-1">{title}</div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-sm text-gray-500 flex items-center justify-center">
          {status}
        </div>
      </div>
    </div>
  );
}