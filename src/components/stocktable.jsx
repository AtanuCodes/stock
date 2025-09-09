import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  Star,
  Settings,
  Eye,
  EyeOff,
  MoreHorizontal,
  ArrowUpDown,
  Play,
  Square,
  Activity
} from 'lucide-react';

// Main Stock Table Component
const MainStockTable = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedStocks, setSelectedStocks] = useState([]);

  const tabs = ['Market Watch', 'Dhaka Stock Exchange', 'More Markets', 'My Favorites'];
  const subTabs = ['Main', 'All', 'Mutual Funds', 'Equity', 'Corp Bonds', 'DEBENTURE', 'Indices', 'All Sectors', 'Public Board'];

  const stockData = [
    {
      symbol: 'KBPPWBIL*FB',
      description: 'KBPPWBIL*FB',
      lastTraded: 148.30,
      lastQty: 150,
      chg: 9.70,
      chgPercent: 7.00,
      volume: '2,336,054',
      bid: 148.10,
      bidQty: 100,
      offer: 149.60,
      offerQty: 500,
      trades: 5566,
      ltDate: '07-09-2025',
      ltTime: '14:29:59',
      open: 141.00,
      high: 150.90,
      low: 141.00,
      settlementType: 'PUBLIC',
      category: 'B',
      trend: 'up',
      watchlisted: false
    },
    {
      symbol: 'TULY*FB',
      description: 'TULY*FB',
      lastTraded: 81.20,
      lastQty: 500,
      chg: -8.00,
      chgPercent: -8.97,
      volume: '3,913,418',
      bid: 0.00,
      bidQty: 0,
      offer: 0.00,
      offerQty: 0,
      trades: 5497,
      ltDate: '07-09-2025',
      ltTime: '14:26:21',
      open: 94.90,
      high: 95.80,
      low: 80.30,
      settlementType: 'PUBLIC',
      category: 'B',
      trend: 'down',
      watchlisted: true
    },
    {
      symbol: 'INTECH*FB',
      description: 'INTECH*FB',
      lastTraded: 42.80,
      lastQty: 100,
      chg: -2.50,
      chgPercent: -5.52,
      volume: '3,862,155',
      bid: 41.40,
      bidQty: 8078,
      offer: 0.00,
      offerQty: 0,
      trades: 5265,
      ltDate: '07-09-2025',
      ltTime: '14:29:24',
      open: 44.30,
      high: 47.40,
      low: 41.00,
      settlementType: 'PUBLIC',
      category: 'B',
      trend: 'down',
      watchlisted: true
    },
    {
      symbol: 'SONALIPAPR*FB',
      description: 'SONALIPAPR...',
      lastTraded: 294.60,
      lastQty: 200,
      chg: -5.20,
      chgPercent: -1.73,
      volume: '556,391',
      bid: 292.50,
      bidQty: 632,
      offer: 0.00,
      offerQty: 0,
      trades: 4283,
      ltDate: '07-09-2025',
      ltTime: '14:29:12',
      open: 301.20,
      high: 306.00,
      low: 292.50,
      settlementType: 'PUBLIC',
      category: 'A',
      trend: 'down',
      watchlisted: false
    },
    {
      symbol: 'SINOBANGLA...',
      description: 'SINOBANGLA...',
      lastTraded: 64.50,
      lastQty: 455,
      chg: 1.80,
      chgPercent: 2.87,
      volume: '3,370,811',
      bid: 64.20,
      bidQty: 300,
      offer: 64.80,
      offerQty: 19289,
      trades: 4183,
      ltDate: '07-09-2025',
      ltTime: '14:29:51',
      open: 63.50,
      high: 67.00,
      low: 63.50,
      settlementType: 'PUBLIC',
      category: 'A',
      trend: 'up',
      watchlisted: false
    }
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleWatchlist = (symbol) => {
    // Toggle watchlist functionality
    console.log(`Toggle watchlist for ${symbol}`);
  };

  const getCellColor = (value, type) => {
    if (type === 'change') {
      return value > 0 ? 'text-emerald-600' : value < 0 ? 'text-red-600' : 'text-gray-600';
    }
    if (type === 'price' && value === 0) {
      return 'text-red-500';
    }
    return 'text-gray-900';
  };

  const getBackgroundColor = (trend) => {
    return trend === 'up' ? 'hover:bg-emerald-50/30' : trend === 'down' ? 'hover:bg-red-50/30' : 'hover:bg-gray-50';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        {/* Main Tabs */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-red-400/30">
          <div className="flex items-center space-x-6">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                  index === 1 
                    ? 'bg-white/20 text-white border-b-2 border-white' 
                    : 'text-red-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
                {index === 2 && <ChevronDown className="w-3 h-3 ml-1 inline" />}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4 text-red-100 hover:text-white cursor-pointer" />
            <button className="p-1.5 bg-white/10 rounded hover:bg-white/20 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub Tabs and Controls */}
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Filter */}
            <div className="flex items-center bg-white/10 rounded px-3 py-1">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm">Filter</span>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center space-x-1">
              {subTabs.map((subTab) => (
                <button
                  key={subTab}
                  onClick={() => setActiveTab(subTab)}
                  className={`px-2 py-1 text-xs rounded transition-all ${
                    activeTab === subTab
                      ? 'bg-white/20 text-foreground font-medium'
                      : 'text-red-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {subTab}
                  {(subTab === 'All Sectors' || subTab === 'Public Board') && (
                    <ChevronDown className="w-3 h-3 ml-1 inline" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 text-sm">
            <span className="text-red-100">Today Traded</span>
            <span className="text-red-100">Hide Suspended</span>
            <div className="flex items-center space-x-1">
              <span className="text-red-100">More Columns</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-3 py-3 text-left">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Symbol</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-left">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Description</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Last Traded</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Last Qty</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Chg</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>% Chg</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Volume</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Bid</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Bid Qty</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Offer</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Offer Qty</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Trades</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-center">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>L.T Date</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-center">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>L.T Time</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Open</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>High</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-right">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Low</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-center">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Settlement Type</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-3 py-3 text-center">
                <button className="flex items-center space-x-1 text-xs font-semibold text-gray-700 hover:text-gray-900">
                  <span>Symbol Category</span>
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">
            {stockData.map((stock, index) => (
              <tr 
                key={stock.symbol}
                className={`transition-colors border-l-2 ${
                  stock.trend === 'up' 
                    ? 'border-l-emerald-500 hover:bg-emerald-50/20' 
                    : stock.trend === 'down' 
                    ? 'border-l-red-500 hover:bg-red-50/20' 
                    : 'border-l-gray-300 hover:bg-gray-50'
                }`}
              >
                {/* Symbol with Watchlist */}
                <td className="px-3 py-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleWatchlist(stock.symbol)}
                      className="hover:scale-110 transition-transform"
                    >
                      {stock.watchlisted ? (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      ) : (
                        <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500" />
                      )}
                    </button>
                    <div className="flex items-center space-x-1">
                      <Play className="w-3 h-3 text-blue-500" />
                      <span className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
                        {stock.symbol}
                      </span>
                      {stock.trend === 'up' && (
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                      )}
                      {stock.trend === 'down' && (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                    </div>
                  </div>
                </td>

                {/* Description */}
                <td className="px-3 py-3">
                  <span className="text-sm text-gray-700">{stock.description}</span>
                </td>

                {/* Last Traded */}
                <td className="px-3 py-3 text-right">
                  <span className={`text-sm font-semibold ${getCellColor(stock.lastTraded, 'price')}`}>
                    {stock.lastTraded.toFixed(2)}
                  </span>
                </td>

                {/* Last Qty */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">{stock.lastQty}</span>
                </td>

                {/* Change */}
                <td className="px-3 py-3 text-right">
                  <span className={`text-sm font-semibold ${getCellColor(stock.chg, 'change')}`}>
                    {stock.chg > 0 ? '+' : ''}{stock.chg.toFixed(2)}
                  </span>
                </td>

                {/* % Change */}
                <td className="px-3 py-3 text-right">
                  <span className={`text-sm font-semibold ${getCellColor(stock.chgPercent, 'change')}`}>
                    {stock.chgPercent > 0 ? '+' : ''}{stock.chgPercent.toFixed(2)}%
                  </span>
                </td>

                {/* Volume */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">{stock.volume}</span>
                </td>

                {/* Bid */}
                <td className="px-3 py-3 text-right">
                  <span className={`text-sm font-semibold ${getCellColor(stock.bid, 'price')}`}>
                    {stock.bid === 0 ? '0.00' : stock.bid.toFixed(2)}
                  </span>
                </td>

                {/* Bid Qty */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">
                    {stock.bidQty === 0 ? '0' : stock.bidQty.toLocaleString()}
                  </span>
                </td>

                {/* Offer */}
                <td className="px-3 py-3 text-right">
                  <span className={`text-sm font-semibold ${
                    stock.offer === 0 ? 'text-red-500' : 'text-gray-900'
                  }`}>
                    {stock.offer === 0 ? '0.00' : stock.offer.toFixed(2)}
                  </span>
                </td>

                {/* Offer Qty */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">
                    {stock.offerQty === 0 ? '0' : stock.offerQty.toLocaleString()}
                  </span>
                </td>

                {/* Trades */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">{stock.trades.toLocaleString()}</span>
                </td>

                {/* L.T Date */}
                <td className="px-3 py-3 text-center">
                  <span className="text-xs text-gray-600">{stock.ltDate}</span>
                </td>

                {/* L.T Time */}
                <td className="px-3 py-3 text-center">
                  <span className="text-xs text-gray-600">{stock.ltTime}</span>
                </td>

                {/* Open */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">{stock.open.toFixed(2)}</span>
                </td>

                {/* High */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">{stock.high.toFixed(2)}</span>
                </td>

                {/* Low */}
                <td className="px-3 py-3 text-right">
                  <span className="text-sm text-gray-700">{stock.low.toFixed(2)}</span>
                </td>

                {/* Settlement Type */}
                <td className="px-3 py-3 text-center">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {stock.settlementType}
                  </span>
                </td>

                {/* Symbol Category */}
                <td className="px-3 py-3 text-center">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                    stock.category === 'A' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {stock.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default MainStockTable;