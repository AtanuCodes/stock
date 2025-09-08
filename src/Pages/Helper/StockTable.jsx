import React, { useState } from "react";
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
  Activity,
  X,
  Plus,
  List,
  Clock,
  BarChart3,
  Bell,
  Users,
  Target,
} from "lucide-react";

// Modal Component
const StockActionModal = ({ isOpen, onClose, stock }) => {
  if (!isOpen || !stock) return null;

  const menuItems = [
    {
      icon: Play,
      label: "Buy",
      shortcut: "Alt + B",
      color: "text-emerald-600",
    },
    { icon: Square, label: "Sell", shortcut: "Alt + S", color: "text-red-600" },
    {
      icon: Plus,
      label: "Add to WatchList",
      shortcut: "",
      color: "text-gray-700",
    },
    {
      icon: List,
      label: "Detail Quote",
      shortcut: "Alt + D",
      color: "text-gray-700",
    },
    {
      icon: Clock,
      label: "Time and Sales",
      shortcut: "Alt + T",
      color: "text-gray-700",
    },
    {
      icon: Target,
      label: "Depth By Price",
      shortcut: "Alt + P",
      color: "text-gray-700",
    },
    {
      icon: Users,
      label: "Depth By Order",
      shortcut: "Alt + O",
      color: "text-gray-700",
    },
    {
      icon: BarChart3,
      label: "Chart",
      shortcut: "Alt + C",
      color: "text-gray-700",
    },
    {
      icon: Bell,
      label: "Alerts",
      shortcut: "Alt + A",
      color: "text-gray-700",
    },
    {
      icon: Star,
      label: "Converged Depth By Price",
      shortcut: "",
      color: "text-gray-700",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-start justify-start z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl border border-gray-200 min-w-[280px] mt-20 ml-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">{stock.symbol}</h3>
              <p className="text-red-100 text-sm">{stock.description}</p>
            </div>
            <button onClick={onClose} className="hover:bg-white/10 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="p-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-gray-50 rounded-md transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <item.icon
                  className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {item.label}
                </span>
              </div>
              {item.shortcut && (
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {item.shortcut}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const MainStockTable = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const tabs = [
    "Market Watch",
    "Dhaka Stock Exchange",
    "Chittagong Stock Exchange",
    "More Markets",
    "My Favorites",
  ];
  const subTabs = [
    "Main",
    "All",
    "Mutual Funds",
    "Equity",
    "Corp Bonds",
    "DEBENTURE",
    "Indices",
    "All Sectors",
    "Public Board",
  ];

  const stockData = [
    {
      symbol: "ROBI*PB",
      description: "ROBI*PB",
      lastTraded: 32.4,
      lastQty: 150,
      chg: 2.5,
      chgPercent: 8.36,
      volume: "23,580,543",
      bid: 32.3,
      bidQty: 25032,
      offer: 32.4,
      offerQty: 16170,
      trades: 8734,
      ltDate: "08-09-2025",
      ltTime: "14:19:59",
      open: 30.0,
      high: 32.8,
      low: 29.7,
      settlementType: "PUBLIC",
      category: "A",
      trend: "up",
      watchlisted: false,
    },
    {
      symbol: "KBPPWBIL*PB",
      description: "KBPPWBIL*PB",
      lastTraded: 151.7,
      lastQty: 200,
      chg: 3.4,
      chgPercent: 2.29,
      volume: "2,361,717",
      bid: 151.7,
      bidQty: 289,
      offer: 151.8,
      offerQty: 4100,
      trades: 4887,
      ltDate: "08-09-2025",
      ltTime: "14:20:11",
      open: 148.3,
      high: 154.0,
      low: 145.6,
      settlementType: "PUBLIC",
      category: "B",
      trend: "up",
      watchlisted: false,
    },
    {
      symbol: "MJLBD*PB",
      description: "MJLBD*PB",
      lastTraded: 102.9,
      lastQty: 1875,
      chg: 3.3,
      chgPercent: 3.33,
      volume: "2,596,604",
      bid: 102.6,
      bidQty: 661,
      offer: 102.9,
      offerQty: 20951,
      trades: 4819,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 99.9,
      high: 102.9,
      low: 99.9,
      settlementType: "PUBLIC",
      category: "A",
      trend: "up",
      watchlisted: true,
    },
    {
      symbol: "SONALIPAPR*PB",
      description: "SONALIPAPR...",
      lastTraded: 282.0,
      lastQty: 100,
      chg: -11.7,
      chgPercent: -3.97,
      volume: "587,292",
      bid: 281.5,
      bidQty: 2,
      offer: 282.0,
      offerQty: 188,
      trades: 4710,
      ltDate: "08-09-2025",
      ltTime: "14:19:57",
      open: 295.2,
      high: 296.7,
      low: 280.1,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: false,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
    {
      symbol: "EGEN*PB",
      description: "EGEN*PB",
      lastTraded: 30.2,
      lastQty: 418,
      chg: -0.7,
      chgPercent: -2.26,
      volume: "6,412,202",
      bid: 30.1,
      bidQty: 59040,
      offer: 30.2,
      offerQty: 4582,
      trades: 4663,
      ltDate: "08-09-2025",
      ltTime: "14:20:00",
      open: 31.9,
      high: 32.0,
      low: 30.0,
      settlementType: "PUBLIC",
      category: "A",
      trend: "down",
      watchlisted: true,
    },
  ];

  const toggleWatchlist = (symbol) => {
    console.log(`Toggle watchlist for ${symbol}`);
  };

  const openModal = (stock) => {
    setSelectedStock(stock);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStock(null);
  };

  return (
    <div className="bg-white mx-2 border border-gray-300">
      {/* Header Section */}
      <div className="border-b border-gray-200">
        {/* Main Tabs */}
        <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-red-200/80 to-white text-black">
          <div className="flex items-center">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                  index === 1 ? "bg-red-600/85 text-white shadow" : ""
                }`}
              >
                {tab}
                {index === 3 && <ChevronDown className="w-3 h-3 ml-1 inline" />}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Settings className="w-4 h-4 text-gray-600 cursor-pointer" />
            <MoreHorizontal className="w-4 h-4 text-gray-600 cursor-pointer" />
            <X className="w-4 h-4 text-gray-600 cursor-pointer" />
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex items-center justify-between px-2 py-1 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1 mr-4">
              <Search className="w-3 h-3 text-gray-500" />
              <span className="text-xs text-gray-600">Filter</span>
            </div>

            {subTabs.map((subTab) => (
              <button
                key={subTab}
                onClick={() => setActiveTab(subTab)}
                className={`px-2 py-1 text-xs rounded transition-all bg-gray-200 ${
                  activeTab === subTab
                    ? "bg-gray-200 text-gray-700 font-bold"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {subTab}
                {(subTab === "All Sectors" || subTab === "Public Board") && (
                  <ChevronDown className="w-3 h-3 ml-1 inline" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 text-xs text-gray-600">
            <label className="cursor-pointer flex items-center space-x-1">
              <input type="checkbox" className="cursor-pointer" />
              <span>Today Traded</span>
            </label>
            <label className="cursor-pointer flex items-center space-x-1">
              <input type="checkbox" className="cursor-pointer" />
              <span>Hide Suspended</span>
            </label>
            <div className="flex items-center cursor-pointer hover:text-gray-800 border px-2 border-gray-300 font-bold rounded">
              <span>More Columns</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-2 py-2 text-left text-gray-700 font-medium">
                <div className="flex items-center">
                  <span>Symbol</span>
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th className="px-2 py-2 text-left text-gray-700 font-medium">
                S.Description
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                <div className="flex items-center justify-end">
                  <span>Last Traded</span>
                  <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                Last Qty
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                Chg
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                % Chg
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                Volume
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium bg-green-50">
                Bid
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium bg-green-50">
                Bid Qty
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium bg-red-50">
                Offer
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium bg-red-50">
                Offer Qty
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                <div className="flex items-center justify-end">
                  <span>Trades</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th className="px-2 py-2 text-center text-gray-700 font-medium">
                L.T Date
              </th>
              <th className="px-2 py-2 text-center text-gray-700 font-medium">
                L.T Time
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                Open
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                High
              </th>
              <th className="px-2 py-2 text-right text-gray-700 font-medium">
                Low
              </th>
              <th className="px-2 py-2 text-center text-gray-700 font-medium">
                Settlement Type
              </th>
              <th className="px-2 py-2 text-center text-gray-700 font-medium">
                Symbol Category
              </th>
            </tr>
          </thead>

          <tbody>
            {stockData.map((stock, index) => (
              <tr
                key={stock.symbol}
                className={`border-b border-gray-100 hover:bg-blue-50 ${
                  index % 2 === 1 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="px-2 py-2">
                  <div className="flex items-center space-x-1">
                    <Play
                      className="w-3 h-3 text-green-600 cursor-pointer"
                      onClick={() => openModal(stock)}
                    />
                    {/* <button onClick={() => toggleWatchlist(stock.symbol)}>
                      {stock.watchlisted ? (
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      ) : (
                        <Star className="w-3 h-3 text-gray-400" />
                      )}
                    </button> */}
                    <span
                      className="text-blue-600 font-medium cursor-pointer hover:underline"
                      onClick={() => openModal(stock)}
                    >
                      {stock.symbol}
                    </span>
                  </div>
                </td>

                <td className="px-2 py-1 text-gray-700">{stock.description}</td>

                <td className="px-2 py-1 text-right font-medium text-blue-600">
                  {stock.lastTraded.toFixed(2)}
                </td>

                <td className="px-2 py-1 text-right text-gray-700">
                  {stock.lastQty.toLocaleString()}
                </td>

                <td className="px-2 py-1 text-right font-medium">
                  <span
                    className={
                      stock.chg >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stock.chg > 0 ? "+" : ""}
                    {stock.chg.toFixed(2)}
                  </span>
                </td>

                <td className="px-2 py-1 text-right font-medium">
                  <span
                    className={
                      stock.chgPercent >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stock.chgPercent > 0 ? "+" : ""}
                    {stock.chgPercent.toFixed(2)}
                  </span>
                </td>

                <td className="px-2 py-1 text-right text-gray-700">
                  {stock.volume}
                </td>

                <td className="px-2 py-1 text-right font-medium text-green-700 bg-green-50">
                  {stock.bid.toFixed(2)}
                </td>

                <td className="px-2 py-1 text-right text-gray-700 bg-green-50">
                  {stock.bidQty.toLocaleString()}
                </td>

                <td className="px-2 py-1 text-right font-medium text-red-700 bg-red-50">
                  {stock.offer.toFixed(2)}
                </td>

                <td className="px-2 py-1 text-right text-gray-700 bg-red-50">
                  {stock.offerQty.toLocaleString()}
                </td>

                <td className="px-2 py-1 text-right text-gray-700">
                  {stock.trades.toLocaleString()}
                </td>

                <td className="px-2 py-1 text-center text-gray-600">
                  {stock.ltDate}
                </td>

                <td className="px-2 py-1 text-center text-gray-600">
                  {stock.ltTime}
                </td>

                <td className="px-2 py-1 text-right text-gray-700">
                  {stock.open.toFixed(2)}
                </td>

                <td className="px-2 py-1 text-right text-gray-700">
                  {stock.high.toFixed(2)}
                </td>

                <td className="px-2 py-1 text-right text-gray-700">
                  {stock.low.toFixed(2)}
                </td>

                <td className="px-2 py-1 text-center">
                  <span className=" px-1 py-0.5 rounded text-xs font-medium">
                    {stock.settlementType}
                  </span>
                </td>

                <td className="px-2 py-1 text-center">
                  <span
                    className={`px-1 py-0.5 rounded text-xs font-medium ${
                      stock.category === "A"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {stock.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <StockActionModal
        isOpen={modalOpen}
        onClose={closeModal}
        stock={selectedStock}
      />
    </div>
  );
};

export default MainStockTable;
