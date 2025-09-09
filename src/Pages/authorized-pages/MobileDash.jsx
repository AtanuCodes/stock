import React, { useState, useEffect } from 'react';
import { Menu, Search, TrendingUp, TrendingDown, ArrowUp } from 'lucide-react';
import Chart from 'react-apexcharts';
import BottomNavigation from './bottom';
import SectionStockChart from "@/Pages/authorized-pages/mobile-dashboard/section-stock-chart.jsx";

// Chart data for ApexCharts
const chartData = [
  5610, 5615, 5620, 5625, 5630, 5635, 5640, 5645, 5650, 5655, 5660, 5665,
  5670, 5675, 5680, 5678, 5676, 5674, 5672, 5670, 5668, 5665, 5660, 5655,
  5650, 5645, 5640, 5638, 5636.15
];

const chartCategories = [
  '10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45',
  '10:50', '10:55', '11:00', '11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35',
  '11:40', '11:45', '11:50', '11:55', '12:00', '12:05', '12:10', '12:15', '12:20'
];

// News data for ticker
const newsData = [
  "BEXIMCO: Board declared 10% cash dividend",
  "GRAMEENPHONE: Q3 revenue up 8.5% YoY", 
  "BRAC BANK: Announces rights issue 1:4 ratio",
  "SQUARE PHARMA: FDA approval for new drug",
  "WALTON: Export earnings increased 15%"
];


const MobileTradingDashboard = ({ onMenuClick }) => {
  const [activeTab, setActiveTab] = useState('Market');
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [newsVisible, setNewsVisible] = useState(true);

  // News ticker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsVisible(false);
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => 
          prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
        );
        setNewsVisible(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ApexChart options


  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button onClick={onMenuClick} className="p-1">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-teal-600" />
              </div>
              <span className="font-semibold text-lg">Trade Express</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-gray-600">Un. Gain</div>
              <div className="font-semibold text-sm">0.00%</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-600">BDT</div>
              <div className="font-semibold text-sm">0.00</div>
            </div>
            <Search className="w-5 h-5" />
          </div>
        </div>
        
        {/* Animated News Ticker */}
        <div className="mt-2 h-5 overflow-hidden">
          <div className={`text-sm text-blue-600 transition-all duration-300 ease-in-out transform ${
            newsVisible ? 'translate-y-0 opacity-90' : '-translate-y-5 opacity-0'
          }`}>
            📈 {newsData[currentNewsIndex]}
          </div>
        </div>
      </div>

      {/* Close Header - matching screenshot */}
      <div className="bg-white px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-pink-500 text-sm font-medium">Close</div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-800">DSE</span>
            <ArrowUp className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-gray-600 text-sm">07-09-2025</div>
        </div>
      </div>

      {/* DSEX Section - exactly matching screenshot */}
      <div className="bg-white px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-800 text-lg">DSEX</span>
              <span className="text-gray-500 text-sm">DSE Broad Index</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Days Range</div>
            <div className="w-8 h-1 bg-red-500 rounded mt-1"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 text-green-500 mr-1" />
              <span className="text-3xl font-bold text-gray-800">5,636.15</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">52 Wk Range</div>
            <div className="w-8 h-1 bg-red-500 rounded mt-1"></div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold">
            0.39%
          </div>
          <span className="text-xl font-bold text-gray-800">21.87</span>
        </div>
      </div>
<hr/>
      {/* Chart Section - ApexCharts using same pattern as your example */}
      <div className="bg-white px-4 py-4 border-t border-gray-100">

        {/* Chart time labels - only showing 10:00 */}
        <div className="flex justify-start mt-1">
          <SectionStockChart/>
          <span className="text-xs text-gray-500 ml-2">10:00</span>
        </div>
      </div>

      {/* Statistics Section - matching screenshot layout */}
      <div className="bg-white px-4 py-4 border-b border-t border-gray-100">
        <div className="grid grid-cols-5 gap-1">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-1">462</div>
            <div className="text-xs text-gray-500 mb-2">Total</div>
           
          </div>
           <div className="flex justify-center space-x-1 mt-1">
              <div className="w-2 h-8 bg-green-500 rounded-sm"></div>
              <div className="w-2 h-5 bg-red-500 rounded-sm"></div>
              <div className="w-2 h-3 bg-gray-500 rounded-sm"></div>
            </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">298</div>
            <div className="text-xs text-gray-500">Up</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">144</div>
            <div className="text-xs text-gray-500">Down</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-1">20</div>
            <div className="text-xs text-gray-500">Unchanged</div>
          </div>
        </div>
      </div>

 <div className='flex justify-between m-2'>
           <div>
             <div className="text-sm text-gray-500">Cash Map</div>
            <div className="flex items-center mt-1">
              <span className="text-lg font-bold text-gray-800 mr-2">54.18%</span>
              <div className="w-20 h-2 bg-gray-200 rounded-full">
                <div className="w-3/5 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
           </div>
         
          <div className="text-right">
            <div className="text-sm text-gray-500">Net Cash%</div>
            <div className="text-lg font-bold text-green-500">8.36%</div>
          </div>
        </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default MobileTradingDashboard;