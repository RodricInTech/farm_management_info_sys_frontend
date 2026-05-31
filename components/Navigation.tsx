"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/farms", label: "Farms" },
    { href: "/crops", label: "Crops" },
    { href: "/inventory", label: "Inventory" },
    { href: "/weather", label: "Weather" },
    { href: "/reports", label: "Reports" }
  ];

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="font-bold text-xl">
              🌾 Farm Manager
            </Link>
            <div className="hidden md:flex gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-green-800"
                      : "hover:bg-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm">Admin</div>
        </div>
      </div>
    </nav>
  );
}
