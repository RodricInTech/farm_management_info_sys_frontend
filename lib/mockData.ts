// Mock data for the farm management system

export const farms = [
  {
    id: 1,
    name: "Namitete Farm",
    location: "Lilongwe District",
    size: 250,
    crops: ["Corn", "Soybeans"],
    owner: "Mwale Phiri",
    status: "Active"
  },
  {
    id: 2,
    name: "Kachebere Estate",
    location: "Blantyre District",
    size: 180,
    crops: ["Wheat", "Corn"],
    owner: "Grace Mbewe",
    status: "Active"
  },
  {
    id: 3,
    name: "Lilongwe Valley Fields",
    location: "Lilongwe District",
    size: 320,
    crops: ["Corn", "Soybeans", "Wheat"],
    owner: "Peter Kabali",
    status: "Active"
  }
];

export const crops = [
  {
    id: 1,
    name: "Corn",
    farmId: 1,
    fieldName: "North Field",
    planted: "2026-04-15",
    expectedHarvest: "2026-10-20",
    acreage: 150,
    status: "Growing",
    healthScore: 85
  },
  {
    id: 2,
    name: "Soybeans",
    farmId: 1,
    fieldName: "South Field",
    planted: "2026-04-20",
    expectedHarvest: "2026-10-25",
    acreage: 100,
    status: "Growing",
    healthScore: 78
  },
  {
    id: 3,
    name: "Wheat",
    farmId: 2,
    fieldName: "East Field",
    planted: "2026-03-01",
    expectedHarvest: "2026-07-15",
    acreage: 180,
    status: "Growing",
    healthScore: 92
  }
];

export const inventory = [
  {
    id: 1,
    name: "John Deere Tractor",
    type: "Equipment",
    farmId: 1,
    status: "Operational",
    lastMaintenance: "2026-05-20",
    quantity: 1
  },
  {
    id: 2,
    name: "Combine Harvester",
    type: "Equipment",
    farmId: 1,
    status: "Operational",
    lastMaintenance: "2026-05-15",
    quantity: 1
  },
  {
    id: 3,
    name: "Fertilizer",
    type: "Supply",
    farmId: 1,
    status: "In Stock",
    quantity: 5000,
    unit: "lbs"
  },
  {
    id: 4,
    name: "Pesticide",
    type: "Supply",
    farmId: 1,
    status: "In Stock",
    quantity: 200,
    unit: "gallons"
  }
];

export const weatherData = {
  temp: 72,
  condition: "Sunny",
  humidity: 65,
  windSpeed: 12,
  forecast: [
    { day: "Mon", high: 75, low: 62, condition: "Sunny", precipitation: 0 },
    { day: "Tue", high: 73, low: 61, condition: "Cloudy", precipitation: 0 },
    { day: "Wed", high: 68, low: 58, condition: "Rainy", precipitation: 0.5 },
    { day: "Thu", high: 70, low: 59, condition: "Partly Cloudy", precipitation: 0 },
    { day: "Fri", high: 76, low: 63, condition: "Sunny", precipitation: 0 }
  ]
};

export const dashboardStats = {
  totalFarms: farms.length,
  totalAcreage: farms.reduce((sum, farm) => sum + farm.size, 0),
  activeCrops: crops.length,
  healthyFields: crops.filter(c => c.healthScore >= 80).length,
  equipmentOperational: inventory.filter(i => i.type === "Equipment" && i.status === "Operational").length,
  suppliesInStock: inventory.filter(i => i.type === "Supply").length
};
