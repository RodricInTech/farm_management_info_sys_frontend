import StatCard from "@/components/StatCard";

export default function CropTracking() {
  const crops = [
    { id: 1, name: "Wheat", area: "25 acres", status: "Growing", sowingDate: "2026-02-15" },
    { id: 2, name: "Corn", area: "30 acres", status: "Flowering", sowingDate: "2026-03-01" },
    { id: 3, name: "Rice", area: "20 acres", status: "Germination", sowingDate: "2026-04-10" },
    { id: 4, name: "Soybeans", area: "18 acres", status: "Growing", sowingDate: "2026-03-20" },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Crop Tracking</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Active Crops" value="4" change="+1 this month" />
          <StatCard title="Total Area" value="93 acres" change="All fields utilized" />
          <StatCard title="Avg Health" value="82%" change="Good condition" />
        </div>

        {/* Crops Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Active Crops</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Crop Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Area</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Sowing Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {crops.map((crop) => (
                  <tr key={crop.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{crop.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{crop.area}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {crop.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{crop.sowingDate}</td>
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
