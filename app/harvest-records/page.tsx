import StatCard from "@/components/StatCard";

export default function HarvestRecords() {
  const harvestData = [
    { id: 1, cropName: "Wheat", harvestDate: "2025-11-15", quantity: "1200 kg", yieldPerAcre: "48 kg/acre", quality: "Grade A" },
    { id: 2, cropName: "Rice", harvestDate: "2025-12-20", quantity: "950 kg", yieldPerAcre: "47.5 kg/acre", quality: "Grade A" },
    { id: 3, cropName: "Corn", harvestDate: "2025-10-30", quantity: "1500 kg", yieldPerAcre: "50 kg/acre", quality: "Grade B" },
    { id: 4, cropName: "Soybeans", harvestDate: "2025-11-25", quantity: "720 kg", yieldPerAcre: "40 kg/acre", quality: "Grade A" },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Harvest Records</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Harvested" value="4,370 kg" change="All crops" />
          <StatCard title="Avg Yield/Acre" value="46.4 kg/acre" change="Above target" />
          <StatCard title="Grade A Quality" value="75%" change="Of total harvest" />
        </div>

        {/* Harvest Records Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Harvest Details</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              + New Harvest
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Crop</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Harvest Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Yield/Acre</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quality</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {harvestData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{record.cropName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{record.harvestDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{record.quantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{record.yieldPerAcre}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {record.quality}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
