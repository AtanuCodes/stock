import React, { useState, useEffect } from 'react';
import { Menu, Search, TrendingUp, TrendingDown, BarChart3, Eye, List, FileText, Briefcase, ArrowUpDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

// Enhanced chart data with peaks and lows
const chartData = [
  { time: '9:30', value: 5500 },
  { time: '10:00', value: 5520 },
  { time: '10:30', value: 5490 }, // Low
  { time: '11:00', value: 5540 },
  { time: '11:30', value: 5680 }, // Peak
  { time: '12:00', value: 5650 },
  { time: '12:30', value: 5590 },
  { time: '1:00', value: 5610 },
  { time: '1:30', value: 5580 },
  { time: '2:00', value: 5640 },
  { time: '2:30', value: 5620 },
  { time: '3:00', value: 5636.15 }
];

// News data for ticker
const newsData = [
  "BEXIMCO: Board declared 10% cash dividend",
  "GRAMEENPHONE: Q3 revenue up 8.5% YoY",
  "BRAC BANK: Announces rights issue 1:4 ratio",
  "SQUARE PHARMA: FDA approval for new drug",
  "WALTON: Export earnings increased 15%",
  "OLYMPIC IND: New factory inaugurated",
  "ROBI AXIATA: 5G network expansion announced",
  "LANKABANGLA: Profit surges 22% in Q3",
  "CITY BANK: Digital banking services launched",
  "ACI LIMITED: Strategic partnership with MNC"
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
      }, 200); // Brief pause for transition
      
    }, 3000); // Change news every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onMenuClick}
              className="p-1"
            >
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
              <div className="text-xs opacity-90">Un. Gain</div>
              <div className="font-semibold">0.00%</div>
            </div>
            <div className="text-right">
              <div className="text-xs opacity-90">BDT</div>
              <div className="font-semibold">0.00</div>
            </div>
            <Search className="w-5 h-5" />
          </div>
        </div>
        
        {/* Animated News Ticker */}
        <div className="mt-2 h-5 overflow-hidden">
          <div className={`text-sm opacity-90 text-blue-600 transition-all duration-300 ease-in-out transform ${
            newsVisible ? 'translate-y-0 opacity-90' : '-translate-y-5 opacity-0'
          }`}>
            📈 {newsData[currentNewsIndex]}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {['Market', 'Top Stocks', 'Indices'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? 'border-red-500 text-rose-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Market Info Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Close</div>
            <div className="font-semibold text-lg">DSE</div>
          </div>
          <div className="text-right">
            <TrendingUp className="w-4 h-4 text-gray-600 mb-1" />
            <div className="text-sm text-gray-600">07-09-2025</div>
          </div>
        </div>
      </div>

      {/* DSEX Index */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-2 mb-3">
          <span className="font-semibold text-teal-600 text-lg">DSEX</span>
          <span className="text-gray-500 text-sm">Dhaka (DSEX) Index</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <span className="text-2xl font-bold text-gray-800">5,636.15</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Days Range</div>
            <div className="text-red-500 text-sm font-semibold">▼</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
            0.39%
          </div>
          <span className="text-lg font-semibold text-gray-700">21.87</span>
          <div className="flex-1"></div>
          <div className="text-right">
            <div className="text-xs text-gray-500">52 Wk Range</div>
            <div className="text-red-500 text-sm font-semibold">▼</div>
          </div>
        </div>
      </div>

      {/* Enhanced Chart Section */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="h-40 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#9CA3AF' }}
                interval="preserveStartEnd"
              />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  // Highlight peak and low points
                  if (payload.value === 5680 || payload.value === 5490) {
                    return (
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={4} 
                        fill={payload.value === 5680 ? "#ef4444" : "#22c55e"}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    );
                  }
                  return null;
                }}
                activeDot={{ r: 4, fill: '#10b981' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <div>
            <span className="text-red-500 font-semibold">Low: 5490.00</span>
          </div>
          <div className="text-right">
            <div className="text-green-500 font-semibold">High: 5680.00</div>
            <div className="text-green-500">Current: 5636.15</div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-800">462</div>
            <div className="text-xs text-gray-500">Total</div>
            <div className="flex justify-center mt-1">
              <div className="w-3 h-6 bg-red-500 mr-1"></div>
              <div className="w-3 h-6 bg-green-500"></div>
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-500">298</div>
            <div className="text-xs text-gray-500">Up</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-500">144</div>
            <div className="text-xs text-gray-500">Down</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-800">20</div>
            <div className="text-xs text-gray-500">Unchanged</div>
          </div>
        </div>
      </div>

      {/* Volume and Trades */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-sm text-gray-500">Volume</div>
            <div className="text-lg font-bold text-gray-800">467,220,179</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Trades</div>
            <div className="text-lg font-bold text-gray-800">347,706</div>
          </div>
        </div>
        
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-sm text-gray-500">Turnover</div>
            <div className="text-lg font-bold text-gray-800">14,521,198,860</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">YTD</div>
            <div className="text-lg font-bold text-green-500">7.63%</div>
          </div>
        </div>
        
        {/* Cash Map Section */}
        
      </div>
<div className="bg-white px-4 py-4 border-b border-gray-100 flex justify-between items-start -mt-10">
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 py-2">
          {[
             { icon: Briefcase, label: 'Portfolio' },
            { icon: BarChart3, label: 'Market', active: true },
            { icon: ArrowUpDown, label: 'Buy/Sell' },
            { icon: List, label: 'Watch List' },
            { icon: FileText, label: 'News' },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center py-2 ${
                item.active ? 'text-teal-600' : 'text-gray-500'
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MobileTradingDashboard;