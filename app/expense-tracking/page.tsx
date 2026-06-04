import StatCard from "@/components/StatCard";

export default function ExpenseTracking() {
  const expenses = [
    { id: 1, category: "Fertilizers", item: "NPK Fertilizer", amount: "$250", date: "2026-05-15", cropName: "Wheat" },
    { id: 2, category: "Seeds", item: "Corn Seeds", amount: "$180", date: "2026-05-10", cropName: "Corn" },
    { id: 3, category: "Labor", item: "Field Workers", amount: "$320", date: "2026-05-18", cropName: "Multiple" },
    { id: 4, category: "Equipment", item: "Irrigation Pump Repair", amount: "$150", date: "2026-05-12", cropName: "General" },
    { id: 5, category: "Pesticides", item: "Insecticide Spray", amount: "$95", date: "2026-05-16", cropName: "Rice" },
    { id: 6, category: "Utilities", item: "Electricity", amount: "$200", date: "2026-05-01", cropName: "General" },
  ];

  const expenseByCategory = [
    { category: "Fertilizers", amount: "$450", percentage: 25 },
    { category: "Labor", amount: "$640", percentage: 35 },
    { category: "Seeds", amount: "$180", percentage: 10 },
    { category: "Equipment", amount: "$250", percentage: 14 },
    { category: "Pesticides", amount: "$150", percentage: 8 },
    { category: "Utilities", amount: "$150", percentage: 8 },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Expense Tracking</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Expenses" value="$1,820" change="This month" />
          <StatCard title="Avg Expense/Day" value="$60.67" change="Current period" />
          <StatCard title="Budget Used" value="73%" change="Of monthly budget" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Expense by Category */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">By Category</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {expenseByCategory.map((item, index) => (
                <div key={index} className="px-6 py-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Expenses */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Recent Expenses</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm">
                + Add Expense
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Item</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Crop/Field</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{expense.item}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                          {expense.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{expense.cropName}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{expense.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{expense.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
