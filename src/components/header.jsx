import React, { useState } from 'react';
import { Search, Bell, User, Settings, ChevronDown, TrendingUp, TrendingDown, BarChart3, Activity } from 'lucide-react';

// Professional Mini Chart Component
const ProfessionalChart = ({ data = [20, 25, 22, 30, 28, 35, 32, 40, 38, 45, 42, 50], trend = 'up', color = 'emerald' }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const normalize = (value) => ((value - minValue) / (maxValue - minValue)) * 20 + 2;
  
  const pathData = data.map((value, index) => 
    `${index === 0 ? 'M' : 'L'} ${(index / (data.length - 1)) * 60} ${22 - normalize(value)}`
  ).join(' ');

  const areaData = `${pathData} L 60 22 L 0 22 Z`;
  
  const colorMap = {
    emerald: { stroke: '#10b981', fill: 'url(#emerald-gradient)' },
    red: { stroke: '#ef4444', fill: 'url(#red-gradient)' }
  };

  return (
    <div className="w-16 h-6">
      <svg className="w-full h-full" viewBox="0 0 60 24">
        <defs>
          <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05"/>
          </linearGradient>
          <linearGradient id="red-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        <path
          d={areaData}
          fill={colorMap[color].fill}
        />
        <path
          d={pathData}
          stroke={colorMap[color].stroke}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Ticker Ribbon Component
const TickerRibbon = () => {
  const tickerData = [
    { symbol: 'ALIABL', change: -0.30, isNegative: true },
    { symbol: 'ALIFZ', change: 0.00, isNegative: false },
    { symbol: 'ALLTEX', change: 0.40, isNegative: false },
    { symbol: 'AMANTEJ', change: 0.20, isNegative: false },
    { symbol: 'AMANTEFJ', change: 0.50, isNegative: false },
    { symbol: 'AMBEEFJ', change: -18.40, isNegative: true },
    { symbol: 'AMRANIJ', change: 0.70, isNegative: false },
    { symbol: 'AMRAT', change: -0.10, isNegative: true },
    { symbol: 'ABBANK', change: -0.10, isNegative: true },
    { symbol: 'ACIFP', change: 0.30, isNegative: false },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-md overflow-hidden mb-2 max-w-4xl">
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-6 py-1.5 px-3">
        {tickerData.concat(tickerData).map((item, index) => (
          <div key={index} className="flex items-center space-x-1.5 text-xs font-medium min-w-max">
            <span className="text-gray-700">{item.symbol}</span>
            <span className={item.isNegative ? 'text-red-500' : 'text-emerald-500'}>
              {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
      {/* Top Header Row */}
      <div className="px-4 py-2 flex items-center justify-between">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-teal-600 font-bold text-sm">E</div>
            </div>
            <div className="text-xl font-bold">EASYLINK</div>
          </div>
          
          {/* Search Box */}
          <div className="flex items-center bg-teal-500/30 backdrop-blur-sm border border-teal-400/30 px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 mr-2 text-teal-200" />
            <input 
              className="bg-transparent placeholder-teal-200 text-white border-none outline-none w-52 text-sm"
              placeholder="MET: ABDUL LOTIF ..."
            />
          </div>
        </div>

        {/* Center Section - Account Info */}
        <div className="flex items-center space-x-8">
          {/* Account Dropdown */}
          <div className="flex items-center space-x-2 bg-teal-500/20 px-3 py-1 rounded border border-teal-400/30">
            <span className="text-sm">D00908-CSE</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          
          {/* Buying Power */}
          <div className="text-right">
            <div className="text-xs text-teal-200">Buying Power</div>
            <div className="text-lg font-bold">15.00</div>
          </div>
          
          {/* Gain/Loss */}
          <div className="text-right">
            <div className="text-xs text-teal-200">Gain/Loss</div>
            <div className="text-lg font-bold">0.00 0.00%</div>
          </div>
        </div>

        {/* Right Section - Status and Controls */}
        <div className="flex items-center space-x-4">
          {/* Connection Status */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs">Live: 1 Tick/sec</span>
          </div>
          
          {/* Last Login */}
          <div className="text-xs text-teal-200">
            Last Login: 07-09 14:25:24
          </div>
          
          {/* Version */}
          <div className="text-xs text-teal-200">
            Ver: 1.08.02
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            <button className="p-1.5 hover:bg-teal-500/20 rounded transition-colors">
              <Settings className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-teal-500/20 rounded transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-teal-500/20 rounded transition-colors">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
 <div className="px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-t border-red-500/20">
        <div className="flex items-center justify-between">
          
          {/* Left: Market Cards */}
          <div className="flex items-center space-x-3">
            {/* DSE Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 hover:shadow-lg transition-all duration-200 min-w-[140px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-600">DSE</span>
                <div className="text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  +0.39%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-gray-900">5,636.15</div>
                  <div className="text-xs text-gray-500">Close | 07-09</div>
                </div>
                <ProfessionalChart trend="up" color="emerald" />
              </div>
              <div className="text-xs text-gray-400 mt-1">11:31 13:02</div>
            </div>

            {/* DSEX Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 hover:shadow-lg transition-all duration-200 min-w-[140px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-600">DSEX</span>
                <div className="text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  +0.39%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-gray-900">21.87</div>
                  <div className="text-xs text-gray-500">Close | 07-09</div>
                </div>
                <ProfessionalChart trend="up" color="emerald" />
              </div>
              <div className="text-xs text-gray-400 mt-1">11:31 13:02</div>
            </div>
          </div>

          {/* Center: Ticker + Stats */}
          <div className="flex-1 mx-6">
            <TickerRibbon />
            
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">447,220,179</div>
                <div className="text-xs text-gray-500">Volume</div>
              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">14,521,198,860</div>
                <div className="text-xs text-gray-500">Turnover</div>
              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">347,706</div>
                <div className="text-xs text-gray-500">Trades</div>
              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-emerald-600">8.05%</div>
                <div className="text-xs text-gray-500">YTD %</div>
              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-gray-900">462</div>
                <div className="text-xs text-gray-500">Symbols</div>
              </div>

              {/* Market Bars */}
              <div className="flex items-end space-x-1">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-12 bg-emerald-500 rounded-t flex items-end justify-center pb-0.5">
                    <span className="text-xs text-white font-bold transform -rotate-90 origin-center">298</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Up</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-8 bg-red-500 rounded-t flex items-end justify-center pb-0.5">
                    <span className="text-xs text-white font-bold transform -rotate-90 origin-center">144</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Down</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-4 bg-gray-400 rounded-t flex items-end justify-center pb-0.5">
                    <span className="text-xs text-white font-bold transform -rotate-90 origin-center">20</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Unch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Cash Metrics */}
          <div className="flex flex-col items-end space-y-2">
            {/* Cash Margin */}
            <div className="bg-white rounded-lg p-2.5 shadow-sm border border-gray-200">
              <div className="flex items-baseline space-x-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">54</div>
                  <div className="text-xs text-gray-500">Cash Margin</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">8%</div>
                  <div className="text-xs text-gray-500">Net Cash</div>
                </div>
              </div>
            </div>
            
            {/* DirectFN Badge */}
            <div className="flex items-center space-x-1.5 bg-gradient-to-r from-slate-50 to-gray-50 px-3 py-1 rounded-full border border-gray-200">
              <Activity className="w-3 h-3 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">Powered by</span>
              <span className="text-xs font-bold text-blue-600">DirectFN</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;