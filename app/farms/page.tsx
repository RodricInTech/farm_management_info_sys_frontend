"use client";

import { useState } from "react";
import Button from "@/components/Button";
import FormModal from "@/components/FormModal";
import { farms as initialFarms } from "@/lib/mockData";
import Link from "next/link";

export default function FarmsPage() {
  const [farms, setFarms] = useState(initialFarms);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFarm = (formData: Record<string, string>) => {
    const newFarm = {
      id: farms.length + 1,
      name: formData.farmName,
      location: formData.location,
      size: parseInt(formData.size),
      crops: formData.crops.split(",").map((c) => c.trim()),
      owner: formData.owner,
      status: "Active",
    };
    setFarms([...farms, newFarm]);
  };

  const farmFields = [
    { name: "farmName", label: "Farm Name", type: "text" as const, required: true },
    { name: "location", label: "Location", type: "text" as const, required: true },
    { name: "size", label: "Size (acres)", type: "number" as const, required: true },
    { name: "owner", label: "Owner Name", type: "text" as const, required: true },
    { name: "crops", label: "Crops (comma-separated)", type: "text" as const, required: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Farms</h1>
            <p className="text-gray-600 mt-2">Manage all your farms in one place</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium">
            Add New Farm
          </button>
        </div>

        {/* Farms Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Farm Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Size (acres)</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Owner</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {farms.map((farm) => (
                <tr key={farm.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{farm.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{farm.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{farm.size}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{farm.owner}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {farm.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-green-600 hover:text-green-900 font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FormModal
          isOpen={isModalOpen}
          title="Add New Farm"
          fields={farmFields}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddFarm}
        />
      </div>
    </div>
  );
}
