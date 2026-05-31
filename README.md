# Farm Management Information System

A comprehensive web-based farm management solution built with Next.js and React. This system helps farmers efficiently manage their operations by providing tools for farm administration, crop tracking, inventory management, weather monitoring, and reporting.

## Features

- **Dashboard** - Overview of your farming operations with key metrics
- **Farms Management** - Manage all your farms in one centralized location
- **Crop Management** - Track crops, fields, planting dates, health scores
- **Inventory Management** - Equipment tracking and supply inventory
- **Weather Monitoring** - Current conditions and 5-day forecasts
- **Reports** - Generate comprehensive farm reports

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. The app automatically redirects to the dashboard.

## Tech Stack

- **Next.js 16.2.6** - React framework
- **React 19.2.4** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **ESLint** - Code linting

## Project Structure

```
app/
├── dashboard/          # Dashboard page
├── farms/             # Farms management
├── crops/             # Crop tracking
├── inventory/         # Equipment and supplies
├── weather/           # Weather information
├── reports/           # Report generation
└── layout.tsx         # Root layout with navigation

components/
├── Navigation.tsx     # Navigation bar
├── StatCard.tsx       # Statistics card
└── Button.tsx         # Reusable button

lib/
└── mockData.ts        # Sample data
```

## Available Routes

- `/dashboard` - Overview and statistics
- `/farms` - Farm list and management
- `/crops` - Crop monitoring
- `/inventory` - Equipment and supplies
- `/weather` - Weather forecasts
- `/reports` - Farm reports
