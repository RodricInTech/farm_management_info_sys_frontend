"use client";

import Button from "@/components/Button";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      name: "Monthly Farm Summary",
      date: "May 2026",
      type: "Summary"
    },
    {
      id: 2,
      name: "Crop Health Report",
      date: "May 25, 2026",
      type: "Health"
    },
    {
      id: 3,
      name: "Equipment Maintenance Log",
      date: "May 31, 2026",
      type: "Maintenance"
    },
    {
      id: 4,
      name: "Yield Forecast",
      date: "May 2026",
      type: "Forecast"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600 mt-2">Generate and view farm reports</p>
          </div>
          <Button>Generate Report</Button>
        </div>

        {/* Report Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { name: "Summary", icon: "📊", color: "bg-blue-100 text-blue-800" },
            { name: "Health", icon: "🏥", color: "bg-green-100 text-green-800" },
            { name: "Maintenance", icon: "🔧", color: "bg-orange-100 text-orange-800" },
            { name: "Forecast", icon: "📈", color: "bg-purple-100 text-purple-800" }
          ].map((type) => (
            <button
              key={type.name}
              className={`${type.color} rounded-lg p-4 text-center hover:shadow-lg transition-shadow`}
            >
              <div className="text-3xl mb-2">{type.icon}</div>
              <p className="font-semibold">{type.name}</p>
            </button>
          ))}
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Recent Reports</h2>
          </div>
          <div className="divide-y">
            {reports.map((report) => (
              <div key={report.id} className="px-6 py-4 hover:bg-gray-50 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{report.name}</h3>
                  <p className="text-sm text-gray-600">{report.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {report.type}
                  </span>
                  <button className="text-green-600 hover:text-green-900 font-medium">Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
