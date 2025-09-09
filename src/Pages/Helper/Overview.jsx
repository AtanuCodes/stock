import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  ChevronDown,
  Volume2,
  Bell,
  Newspaper,
  AlertTriangle,
  Star,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react";

// Navigation Tabs Component
const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("Market");
  const tabs = [
    "Market",
    "Trade",
    "Quote",
    "Top Stocks",
    "Heat Map",
    "News",
    "Chart",
  ];

  return (
    <div className="bg-gradient-to-r from-red-200/80 to-white dark:from-black dark:to-neutral-800 text-foreground px-4 py-2 border-b border-red-200 ">
      <div className="flex items-center space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-sm transition-all duration-200 rounded ${
              activeTab === tab
                ? "bg-white/70 dark:bg-card text-red-500 dark:text-foreground font-bold border-b-2 border-red-500"
                : "text-gray-700 dark:text-gray-400 hover:text-black hover:bg-white/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

// Index Overview Component
const IndexOverview = () => {
  const indexData = [
    {
      name: "CDSET",
      fullName: "DSE CDSET Index",
      value: "1,133.28",
      change: 0,
      changePercent: -0.08,
      color: "red",
    },
    {
      name: "DS30",
      fullName: "DSE 30 Index",
      value: "2,188.10",
      change: 0,
      changePercent: 0.25,
      color: "green",
    },
    {
      name: "DSES",
      fullName: "DSEX Shariah Index",
      value: "1,229.44",
      change: 0,
      changePercent: -0.06,
      color: "red",
    },
    {
      name: "DSEMEX",
      fullName: "DSE SME Index",
      value: "946.45",
      change: 0,
      changePercent: -0.17,
      color: "red",
    },
  ];

  return (
    <div className="bg-card text-foreground border-b border-gray-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-200/80 to-white dark:from-black dark:to-neutral-800 text-foreground border-b border-red-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold ">
            Index Overview - DSE
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-red-500">Volume</span>
            <ChevronDown className="w-3 h-3 text-red-600" />
          </div>
        </div>
      </div>

      {/* Index List */}
      <div className="divide-y divide-gray-100">
        {indexData.map((index, idx) => (
          <div
            key={idx}
            className="px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="text-xs font-semibold">
                  {index.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gay-200 ml-1">
                  {index.fullName}
                </div>
              </div>
              <div className="flex gap-2 text-right">
                <div className="text-xs font-bold ">
                  {index.value}
                </div>
                <div className="flex items-center space-x-1">
                  {index.color === "green" ? (
                    <ArrowUp className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <ArrowDown className="w-3 h-3 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      index.color === "green"
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {index.changePercent > 0 ? "+" : ""}
                    {index.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Top Gainers Component
const TopGainers = () => {
  const gainers = [
    { symbol: "GENEXINFB", price: "3.30", change: "10%" },
    { symbol: "GSPOWERFB", price: "7.70", change: "10%" },
    { symbol: "INSULATEFB", price: "11.50", change: "9.95%" },
    { symbol: "KDSALTDFB", price: "50.90", change: "9.94%" },
  ];

  return (
    <div className="bg-green-50 dark:bg-neutral-800  border-b border-gray-300">
      <div className="bg-gradient-to-r from-red-200/80 to-white dark:from-black dark:to-neutral-800 text-foreground border-b border-emerald-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold ">
            Top Gainers
          </h3>
          <TrendingUp className="w-4 h-4 text-emerald-500" />
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {gainers.map((stock, idx) => (
          <div
            key={idx}
            className="px-4 py-3 hover:bg-emerald-50/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="text-xs font-semibold ">
                  {stock.symbol}
                </div>
              </div>
              <div className="flex text-right gap-1">
                <div className="text-xs font-bold ">
                  {stock.price}
                </div>
                <div className="flex items-center space-x-1">
                  <ArrowUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs font-medium text-emerald-600">
                    {stock.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Top Losers Component
const TopLosers = () => {
  const losers = [
    { symbol: "TULYFB", price: "81.20", change: "-8.97%" },
    { symbol: "FULSFB", price: "1.20", change: "-7.69%" },
    { symbol: "SHAMPGUSUFB", price: "172.50", change: "-6.87%" },
    { symbol: "NRTECHFB", price: "42.80", change: "-5.52%" },
  ];

  return (
    <div className="bg-red-50 dark:bg-black text-foreground border-b border-gray-300">
      <div className="bg-gradient-to-r from-red-200/80 to-white dark:from-black dark:to-neutral-800 text-foreground border-b border-red-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold ">Top Losers</h3>
          <TrendingDown className="w-4 h-4 text-red-500" />
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {losers.map((stock, idx) => (
          <div
            key={idx}
            className="px-4 py-3 hover:bg-red-50/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold ">
                  {stock.symbol}
                </div>
              </div>
              <div className="flex gap-1 text-right">
                <div className="text-xs font-bold ">
                  {stock.price}
                </div>
                <div className="flex items-center space-x-1">
                  <ArrowDown className="w-3 h-3 text-red-500" />
                  <span className="text-xs font-medium text-red-600">
                    {stock.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Most Active Component
const MostActive = () => {
  const activeStocks = [
    { symbol: "ROBIFB", price: "29.90", volume: "12.33 M" },
    { symbol: "CITYBANKFB", price: "26.90", volume: "8.02 M" },
    { symbol: "IPOSFB", price: "23.20", volume: "7.91 M" },
    { symbol: "DOMINAGE FB", price: "20.60", volume: "6.55 M" },
  ];

  return (
    <div className="bg-blue-50 dark:bg-black border-b border-gray-300">
      <div className="bg-gradient-to-r from-red-200/80 to-white  dark:from-black dark:to-neutral-800 text-foreground border-b border-blue-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold ">Most Active</h3>
          <Activity className="w-4 h-4 text-blue-500" />
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {activeStocks.map((stock, idx) => (
          <div
            key={idx}
            className="px-4 py-3 hover:bg-blue-50/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold ">
                  {stock.symbol}
                </div>
              </div>
              <div className="flex gap-1 text-right">
                <div className="text-xs font-bold ">
                  {stock.price}
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  {stock.volume}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// XCHG Index Overview Component
const XCHGIndexOverview = () => {
  const xchgData = [
    {
      name: "ATB",
      fullName: "ATB",
      value: "0.00",
      change: 0,
      changePercent: 0.0,
      color: "neutral",
    },
    {
      name: "CASH",
      fullName: "CASH",
      value: "15,724.94",
      change: 0,
      changePercent: 0.14,
      color: "green",
    },
    {
      name: "CERAMIC",
      fullName: "CERAMIC",
      value: "56,487",
      change: 0,
      changePercent: -1.22,
      color: "red",
    },
    {
      name: "CE250",
      fullName: "CE250",
      value: "1,186.04",
      change: 0,
      changePercent: -0.38,
      color: "red",
    },
  ];

  return (
    <div className="bg-card text-foreground border-b border-gray-300 mx-2">
      <div className="bg-gradient-to-r from-red-200/80 to-white  dark:from-black dark:to-neutral-800 text-foreground border-b border-purple-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold ">
            Index Overview - XCHG
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-red-500">Volume</span>
            <ChevronDown className="w-3 h-3 text-red-600" />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {xchgData.map((index, idx) => (
          <div
            key={idx}
            className="px-4 py-3 hover:bg-purple-50/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="text-xs font-semibold">
                  {index.name}
                </div>
              </div>
              <div className="flex gap-1 text-right">
                <div className="text-xs font-bold ">
                  {index.value}
                </div>
                <div className="flex items-center space-x-1">
                  {index.changePercent > 0 ? (
                    <ArrowUp className="w-3 h-3 text-emerald-500" />
                  ) : index.changePercent < 0 ? (
                    <ArrowDown className="w-3 h-3 text-red-500" />
                  ) : (
                    <Minus className="w-3 h-3 text-gray-400" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      index.changePercent > 0
                        ? "text-emerald-600"
                        : index.changePercent < 0
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {index.changePercent > 0 ? "+" : ""}
                    {index.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// News Flash Component
// const NewsFlash = () => {
//   const [activeNewsTab, setActiveNewsTab] = useState('All');
//   const newsItems = [
//     {
//       title: 'DSE NEWS: Daily Turnover of Main Board',
//       category: 'DSE',
//       time: '4 hours ago',
//       priority: 'high',
//       type: 'market'
//     },
//     {
//       title: 'BIOCOM: Query Response',
//       category: 'BIOCOM/FB',
//       time: '12:15',
//       priority: 'medium',
//       type: 'company'
//     },
//     {
//       title: 'ARISTONF: Weekly NAV',
//       category: 'ARISTONF/FB',
//       time: '11:50',
//       priority: 'medium',
//       type: 'fund'
//     },
//     {
//       title: 'EBLNRBMF: Weekly NAV',
//       category: 'EBLNRBMF/FB',
//       time: '11:51',
//       priority: 'low',
//       type: 'fund'
//     },
//   ];

//   const getNewsIcon = (type, priority) => {
//     if (priority === 'high') return <AlertTriangle className="w-3 h-3 text-red-500" />;
//     if (type === 'market') return <BarChart3 className="w-3 h-3 text-blue-500" />;
//     if (type === 'company') return <Star className="w-3 h-3 text-orange-500" />;
//     return <Bell className="w-3 h-3 text-gray-500" />;
//   };

//   return (
//     <div className="bg-white border-gray-200 flex flex-col h-full">
//       {/* News Header */}
//       <div className="bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-2 border-b border-red-300">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Newspaper className="w-4 h-4" />
//             <h3 className="text-sm font-semibold">News Flash</h3>
//           </div>
//           <Volume2 className="w-4 h-4" />
//         </div>

//         {/* News Tabs */}
//         <div className="flex items-center space-x-3 mt-2">
//           {['All', 'Announcements', 'News'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveNewsTab(tab)}
//               className={`px-2 py-1 text-xs rounded transition-all ${
//                 activeNewsTab === tab
//                   ? 'bg-white/20 text-white font-medium'
//                   : 'text-red-100 hover:text-white hover:bg-white/10'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* News Content */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="divide-y divide-gray-100">
//           {newsItems.map((news, idx) => (
//             <div key={idx} className="px-4 py-3 hover:bg-red-50/50 transition-colors cursor-pointer">
//               <div className="flex items-start space-x-2">
//                 <div className="mt-1">
//                   {getNewsIcon(news.type, news.priority)}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">
//                     {news.title}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-red-600 font-medium">{news.category}</span>
//                     <span className="text-xs text-gray-500">{news.time}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* News Footer */}

//     </div>
//   );
// };

// Main Market Overview Section Component
const MarketOverviewSection = () => {
  return (
    <div className="bg-gray-100 mx-2 border-gray-300 ">
      <NavigationTabs />

      <div className="grid grid-cols-5 h-full w-full mb-1">
        <div className="">
          <IndexOverview />
        </div>

        <div className="">
          <TopGainers />
        </div>

        <div className="">
          <TopLosers />
        </div>

        <div className="">
          <MostActive />
        </div>

        <div className="">
          <XCHGIndexOverview />
        </div>

      </div>
    </div>
  );
};

export default MarketOverviewSection;
