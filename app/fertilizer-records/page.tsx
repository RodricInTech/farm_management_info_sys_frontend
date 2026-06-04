"use client";

import { useState } from "react";
import StatCard from "@/components/StatCard";
import FormModal from "@/components/FormModal";

export default function FertilizerRecords() {
    const [records, setRecords] = useState([
        { id: 1, cropName: "Wheat", fertilizerType: "NPK (20-20-20)", quantity: "500 kg", applicationDate: "2026-05-15", cost: "MK250" },
        { id: 2, cropName: "Corn", fertilizerType: "Urea", quantity: "300 kg", applicationDate: "2026-05-18", cost: "MK120" },
        { id: 3, cropName: "Rice", fertilizerType: "DAP", quantity: "250 kg", applicationDate: "2026-05-20", cost: "MK100" },
        { id: 4, cropName: "Soybeans", fertilizerType: "Organic Manure", quantity: "1000 kg", applicationDate: "2026-05-22", cost: "MK180" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddRecord = (formData: Record<string, string>) => {
        const newRecord = {
            id: records.length + 1,
            cropName: formData.cropName,
            fertilizerType: formData.fertilizerType,
            quantity: formData.quantity,
            applicationDate: formData.applicationDate,
            cost: `MK${formData.cost}`,
        };
        setRecords([...records, newRecord]);
    };

    const fertilizerFields = [
        { name: "cropName", label: "Crop Name", type: "text" as const, required: true },
        { name: "fertilizerType", label: "Fertilizer Type", type: "text" as const, required: true },
        { name: "quantity", label: "Quantity", type: "text" as const, required: true },
        { name: "applicationDate", label: "Application Date", type: "date" as const, required: true },
        { name: "cost", label: "Cost (MK)", type: "number" as const, required: true },
    ];

    return (
        <main className="flex-1 p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Fertilizer Records</h1>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard title="Total Applications" value="4" icon="check" />
                    <StatCard title="Total Quantity" value="2,050 kg" icon="box" />
                    <StatCard title="Total Cost" value="MK650" icon="equipment" />
                </div>

                {/* Records Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Fertilizer Applications</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                            + Add Record
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Crop</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Fertilizer Type</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Application Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cost</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {records.map((record) => (
                                    <tr key={record.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-900">{record.cropName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{record.fertilizerType}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{record.quantity}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{record.applicationDate}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.cost}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <FormModal
                    isOpen={isModalOpen}
                    title="Add Fertilizer Record"
                    fields={fertilizerFields}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddRecord}
                />
            </div>
        </main>
    );
}
