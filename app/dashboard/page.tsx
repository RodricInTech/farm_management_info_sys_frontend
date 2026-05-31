"use client";

import StatCard from "@/components/StatCard";
import Button from "@/components/Button";
import { dashboardStats, farms, crops } from "@/lib/mockData";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to your farm management system</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Farms"
            value={dashboardStats.totalFarms}
            icon="🏡"
            color="green"
          />
          <StatCard
            title="Total Acreage"
            value={`${dashboardStats.totalAcreage} acres`}
            icon="📍"
            color="blue"
          />
          <StatCard
            title="Active Crops"
            value={dashboardStats.activeCrops}
            icon="🌱"
            color="yellow"
          />
          <StatCard
            title="Healthy Fields"
            value={dashboardStats.healthyFields}
            icon="✅"
            color="green"
          />
          <StatCard
            title="Equipment Operational"
            value={dashboardStats.equipmentOperational}
            icon="🚜"
            color="blue"
          />
          <StatCard
            title="Supplies In Stock"
            value={dashboardStats.suppliesInStock}
            icon="📦"
            color="yellow"
          />
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Farms */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Farms</h2>
            <div className="space-y-4">
              {farms.slice(0, 2).map((farm) => (
                <div key={farm.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-900">{farm.name}</h3>
                  <p className="text-sm text-gray-600">{farm.location}</p>
                  <p className="text-sm text-gray-600">{farm.size} acres</p>
                </div>
              ))}
            </div>
            <Link href="/farms">
              <Button className="w-full mt-4">View All Farms</Button>
            </Link>
          </div>

          {/* Recent Crops */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Active Crops</h2>
            <div className="space-y-4">
              {crops.slice(0, 2).map((crop) => (
                <div key={crop.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                  <p className="text-sm text-gray-600">{crop.fieldName}</p>
                  <p className="text-sm text-gray-600">Health Score: {crop.healthScore}%</p>
                </div>
              ))}
            </div>
            <Link href="/crops">
              <Button className="w-full mt-4">View All Crops</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
