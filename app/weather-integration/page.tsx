"use client";

import { useState } from "react";
import StatCard from "@/components/StatCard";
import FormModal from "@/components/FormModal";

export default function WeatherIntegration() {
    const [weatherForecast] = useState([
        { day: "Today", condition: "Partly Cloudy", temp: "28°C", humidity: "65%", windSpeed: "12 km/h", rainfall: "0mm" },
        { day: "Tomorrow", condition: "Sunny", temp: "30°C", humidity: "55%", windSpeed: "8 km/h", rainfall: "0mm" },
        { day: "Day 3", condition: "Rainy", temp: "22°C", humidity: "85%", windSpeed: "18 km/h", rainfall: "25mm" },
        { day: "Day 4", condition: "Cloudy", temp: "25°C", humidity: "70%", windSpeed: "10 km/h", rainfall: "5mm" },
    ]);

    const [weatherAlerts, setWeatherAlerts] = useState([
        { id: 1, type: "Heavy Rain", severity: "High", date: "2026-05-25", message: "Heavy rainfall expected on 25th. Ensure proper drainage." },
        { id: 2, type: "Temperature Drop", severity: "Medium", date: "2026-05-27", message: "Temperature may drop to 15°C. Protect sensitive crops." },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddAlert = (formData: Record<string, string>) => {
        const newAlert = {
            id: weatherAlerts.length + 1,
            type: formData.alertType,
            severity: formData.severity,
            date: formData.date,
            message: formData.message,
        };
        setWeatherAlerts([...weatherAlerts, newAlert]);
    };

    const alertFields = [
        { name: "alertType", label: "Alert Type", type: "text" as const, required: true },
        {
            name: "severity",
            label: "Severity",
            type: "select" as const,
            required: true,
            options: [
                { value: "Low", label: "Low" },
                { value: "Medium", label: "Medium" },
                { value: "High", label: "High" },
            ],
        },
        { name: "date", label: "Date", type: "date" as const, required: true },
        { name: "message", label: "Message", type: "text" as const, required: true },
    ];

    return (
        <main className="flex-1 p-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Weather Reports</h1>
                {/* Current Weather Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard title="Current Temp" value="28°C" icon="check" />
                    <StatCard title="Wind Speed" value="12 km/h" icon="equipment" />
                    <StatCard title="Rainfall" value="0mm" icon="plant" />
                </div>

                {/* Weather Alerts */}
                <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Weather Alerts</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm">
                            + Add Alert
                        </button>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {weatherAlerts.map((alert) => (
                            <div key={alert.id} className="px-6 py-4 flex items-start">
                                <div className={`px-3 py-1 rounded-full text-xs font-medium mr-4 ${alert.severity === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                    {alert.severity}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{alert.type}</h3>
                                    <p className="text-sm text-gray-600">{alert.message}</p>
                                    <p className="text-xs text-gray-500 mt-1">{alert.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weather Forecast */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800">5-Day Forecast</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Day</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Condition</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Temperature</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Humidity</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Wind Speed</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rainfall</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {weatherForecast.map((forecast, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{forecast.day}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{forecast.condition}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{forecast.temp}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{forecast.humidity}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{forecast.windSpeed}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{forecast.rainfall}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <FormModal
                    isOpen={isModalOpen}
                    title="Add Weather Alert"
                    fields={alertFields}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddAlert}
                />
            </div>
        </main>
    );
}
