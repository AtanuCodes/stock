import React, { useState } from 'react';
import { Menu, Search, TrendingUp, TrendingDown, BarChart3, Eye, List, FileText, Briefcase, ArrowUpDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Sample chart data
const chartData = [
  { value: 5500 }, { value: 5520 }, { value: 5510 }, { value: 5540 },
  { value: 5560 }, { value: 5580 }, { value: 5590 }, { value: 5610 },
  { value: 5620 }, { value: 5640 }, { value: 5636.15 }
];

const MobileTradingDashboard = ({ onMenuClick }) => {
  const [activeTab, setActiveTab] = useState('Market');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 text-white px-4 py-3">
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
        
        {/* Market Status */}
        <div className="mt-2 text-sm opacity-90">
          DSE DSE NEWS: Daily Turnover of Main Board
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
                  ? 'border-teal-600 text-teal-600'
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

      {/* Chart Section */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="h-32 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>10:00</span>
          <div className="text-right">
            <div className="text-green-500 font-semibold">5649.00</div>
            <div className="text-green-500">5636.15</div>
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
        
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-gray-500">Turnover</div>
            <div className="text-lg font-bold text-gray-800">14,521,198,860</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">YTD</div>
            <div className="text-lg font-bold text-green-500">7.63%</div>
          </div>
        </div>
        
        <div className="flex justify-between items-start mt-3">
          <div>
            <div className="text-sm text-gray-500">Cash Map</div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800 mr-2">54.18%</span>
              <div className="w-20 h-2 bg-gray-200 rounded">
                <div className="w-3/5 h-2 bg-red-500 rounded"></div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Net Cash%</div>
            <div className="text-lg font-bold text-green-500">8.36%</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 py-2">
          {[
            { icon: BarChart3, label: 'Market', active: true },
            { icon: List, label: 'Watch List' },
            { icon: FileText, label: 'Quote' },
            { icon: Briefcase, label: 'Portfolio' },
            { icon: ArrowUpDown, label: 'Trade' }
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