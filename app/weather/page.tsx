"use client";

import { weatherData } from "@/lib/mockData";

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Weather</h1>
          <p className="text-gray-600 mt-2">Current weather conditions and forecast</p>
        </div>

        {/* Current Weather */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Conditions</h2>
              <p className="text-gray-600">Iowa, USA</p>
            </div>
            <div className="text-6xl">☀️</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm">Temperature</p>
              <p className="text-4xl font-bold text-gray-900 mt-2">{weatherData.temp}°F</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Condition</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{weatherData.condition}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Humidity</p>
              <p className="text-4xl font-bold text-gray-900 mt-2">{weatherData.humidity}%</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Wind Speed</p>
              <p className="text-4xl font-bold text-gray-900 mt-2">{weatherData.windSpeed} mph</p>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Day Forecast</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weatherData.forecast.map((day, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-900">{day.day}</p>
                <p className="text-3xl my-3">
                  {day.condition === "Sunny" ? "☀️" : day.condition === "Cloudy" ? "☁️" : "🌧️"}
                </p>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-semibold">{day.high}°</span>
                    <span className="text-gray-600">/{day.low}°</span>
                  </p>
                  <p className="text-xs text-gray-600">{day.condition}</p>
                  {day.precipitation > 0 && (
                    <p className="text-xs text-blue-600">{day.precipitation}" rain</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
