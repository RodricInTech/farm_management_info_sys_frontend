"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/crop-tracking", label: "Crop Tracking" },
    { href: "/fertilizer-records", label: "Fertilizer Records" },
    { href: "/harvest-records", label: "Harvest Records" },
    { href: "/weather-integration", label: "Weather Integration" },
    { href: "/expense-tracking", label: "Expense Tracking" }
  ];

  return (
    <aside className="w-64 bg-green-700 text-white shadow-lg flex flex-col h-screen">
      <div className="p-6 border-b border-green-600">
        <Link href="/dashboard" className="font-bold text-2xl flex items-center gap-2">
          🌾 Farm Manager
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-green-800"
                  : "hover:bg-green-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      
      <div className="p-6 border-t border-green-600 text-sm">
        Admin
      </div>
    </aside>
  );
}
