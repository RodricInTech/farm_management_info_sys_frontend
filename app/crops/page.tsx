"use client";

import Button from "@/components/Button";
import { crops } from "@/lib/mockData";

export default function CropsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Crops</h1>
            <p className="text-gray-600 mt-2">Monitor and manage your crops and fields</p>
          </div>
          <Button>Add New Crop</Button>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <div key={crop.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{crop.name}</h3>
                  <p className="text-sm text-gray-600">{crop.fieldName}</p>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {crop.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Acreage:</span>
                  <span className="text-sm font-medium text-gray-900">{crop.acreage} acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Planted:</span>
                  <span className="text-sm font-medium text-gray-900">{crop.planted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Expected Harvest:</span>
                  <span className="text-sm font-medium text-gray-900">{crop.expectedHarvest}</span>
                </div>
              </div>

              {/* Health Score Bar */}
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Health Score</span>
                  <span className="text-sm font-semibold text-gray-900">{crop.healthScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${crop.healthScore}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
