import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: string;
  color?: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  farm: (
    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  location: (
    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-6v.006m0 .006v-.006m0 .006a6.75 6.75 0 1113.5 0m-13.5 0a6.75 6.75 0 113.5 13.5h3.75M9.172 16.172a4.5 4.5 0 116.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
    </svg>
  ),
  plant: (
    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12c0-1.429.768-2.682 1.911-3.363.873-.923 2.126-1.5 3.589-1.5.863 0 1.682.163 2.431.457M5.25 12a6.75 6.75 0 0013.5 0m0 0A13.261 13.261 0 0012 2.25c-4.06 0-7.831 2.34-9.652 5.75" />
    </svg>
  ),
  check: (
    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  equipment: (
    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m8.485-5.485a1.5 1.5 0 10-2.121-2.121L12.879 12.879m0 0l-5.485-5.485a1.5 1.5 0 10-2.121 2.121L10.879 12.879" />
    </svg>
  ),
  box: (
    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 6.75h17.25a2.25 2.25 0 012.25 2.25v.894a60.358 60.358 0 01-36 0v-.894a2.25 2.25 0 012.25-2.25z" />
    </svg>
  )
};

export default function StatCard({
  title,
  value,
  icon,
  color = "blue"
}: StatCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    yellow: "bg-yellow-50 border-yellow-200",
    red: "bg-red-50 border-red-200"
  };

  const displayIcon = iconMap[icon] || icon;

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} border rounded-lg p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div>{displayIcon}</div>
      </div>
    </div>
  );
}
