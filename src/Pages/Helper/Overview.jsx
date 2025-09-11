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
    <div className="bg-gradient-to-r from-gray-200/85 via-rose-50 to-red-200 dark:from-gray-500 dark:to-gray-800 text-foreground px-4 py-2 border-b border-red-200">
      <div className="flex items-center space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-sm transition-all duration-200 rounded ${
              activeTab === tab
                ? "bg-slate-500/80 dark:bg-gray-100 text-white dark:text-black "
                : "text-foreground dark:text-gray-300 hover:text-black hover:bg-white/50"
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
    <div className="text-foreground border border-gray-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-300/80 via-stone-200/75 to-white dark:from-gray-600 dark:to-gray-800 text-foreground border-b border-red-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Index Overview - DSE</h3>
          <div className="flex items-center space-x-2 text-red-600 font-semibold dark:text-foreground">
            <span className="text-xs">Volume</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Index List */}
      <div>
        {indexData.map((index, idx) => (
          <div
            key={idx}
            className={`px-4 py-3 hover:bg-gray-100 transition-colors ${
              idx % 2 === 1
                ? "bg-gray-100 dark:bg-gray-700"
                : "bg-gray-50 dark:bg-gray-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="text-xs font-semibold">{index.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-200 ml-1">
                  {index.fullName}
                </div>
              </div>
              <div className="flex gap-2 text-right">
                <div className="text-xs font-bold">{index.value}</div>
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
    <div className="bg-green-50 dark:bg-[#212931] border-b border-gray-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-300/80 via-stone-200/75 to-white dark:from-green-700 dark:to-gray-800 text-foreground border-b border-emerald-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Top Gainers</h3>
          <TrendingUp className="w-4 h-4 text-emerald-600" />
        </div>
      </div>

      {/* List */}
      <div>
        {gainers.map((stock, idx) => (
          <div
            key={idx}
            className={`px-4 py-3 transition-colors ${
              idx % 2 === 0
                ? "bg-green-50 dark:bg-green-900/30 hover:bg-green-100/60"
                : "bg-green-100/75 dark:bg-green-800/40 hover:bg-green-200/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold">{stock.symbol}</div>
              <div className="flex text-right gap-1">
                <div className="text-xs font-bold">{stock.price}</div>
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
  <div className="bg-rose-50 dark:bg-[#212931] text-foreground border-b border-gray-300 overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-gray-300/80 via-stone-200/75 to-white dark:from-red-700 dark:to-gray-800 text-foreground border-b border-red-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Top Losers</h3>
        <TrendingDown className="w-4 h-4 text-red-500" />
      </div>
    </div>

    {/* List */}
    <div>
      {losers.map((stock, idx) => (
        <div
          key={idx}
          className={`px-4 py-3 transition-colors ${
            idx % 2 === 0
              ? "bg-rose-50 dark:bg-red-900/30 hover:bg-rose-100/60"
              : "bg-rose-100/80 dark:bg-red-800/40 hover:bg-rose-200/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold">{stock.symbol}</div>
            </div>
            <div className="flex gap-1 text-right">
              <div className="text-xs font-bold">{stock.price}</div>
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
  <div className="bg-blue-50 dark:bg-[#212931] border-b border-gray-300">
    <div className="bg-gradient-to-r from-gray-300/80 via-stone-200/75 to-white dark:from-gray-600 dark:to-gray-800 text-foreground border-b border-blue-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Most Active</h3>
        <Activity className="w-4 h-4 text-blue-500" />
      </div>
    </div>

    <div className="divide-y divide-gray-100">
      {activeStocks.map((stock, idx) => (
        <div
          key={idx}
          className={`px-4 py-3 transition-colors ${
            idx % 2 === 0
              ? "bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100/60"
              : "bg-blue-100/60 dark:bg-blue-800/40 hover:bg-blue-200/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold">{stock.symbol}</div>
            </div>
            <div className="flex gap-1 text-right">
              <div className="text-xs font-bold">{stock.price}</div>
              <div className="text-xs text-blue-600 font-medium">{stock.volume}</div>
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
    <div className="bg-gradient-to-r from-gray-300/80 via-stone-200/75 to-white dark:from-gray-600 dark:to-gray-800 text-foreground border-b border-purple-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Index Overview - XCHG</h3>
        <div className="flex items-center space-x-2 text-red-600 font-semibold dark:text-foreground">
          <span className="text-xs">Volume</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>
    </div>

    <div>
      {xchgData.map((index, idx) => (
        <div
          key={idx}
          className={`px-4 py-3 hover:bg-gray-100 transition-colors ${
            idx % 2 === 0
              ? "bg-gray-0 dark:bg-gray-800"
              : "bg-gray-100 dark:bg-gray-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="text-xs font-semibold">{index.name}</div>
            </div>
            <div className="flex gap-1 text-right">
              <div className="text-xs font-bold">{index.value}</div>
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
