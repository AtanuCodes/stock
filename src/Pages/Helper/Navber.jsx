import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Settings,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Activity,
} from "lucide-react";
import Topnav from "./Topnav";

const ProfessionalChart = ({
  data = [20, 25, 22, 30, 28, 35, 32, 40, 38, 45, 42, 50],
  trend = "up",
  color = "emerald",
}) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const normalize = (value) =>
    ((value - minValue) / (maxValue - minValue)) * 20 + 2;

  const pathData = data
    .map(
      (value, index) =>
        `${index === 0 ? "M" : "L"} ${(index / (data.length - 1)) * 60} ${
          22 - normalize(value)
        }`
    )
    .join(" ");

  const areaData = `${pathData} L 60 22 L 0 22 Z`;

  const colorMap = {
    emerald: { stroke: "#10b981", fill: "url(#emerald-gradient)" },
    red: { stroke: "#ef4444", fill: "url(#red-gradient)" },
  };

  return (
    <div className="w-16 h-6">
      <svg className="w-full h-full" viewBox="0 0 60 24">
        <defs>
          <linearGradient
            id="emerald-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="red-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={areaData} fill={colorMap[color].fill} />
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
const CircularProgress = ({ percentage, color }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="40" height="42">
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="4"
      />
      <circle
        cx="20"
        cy="20"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
      <text x="20" y="24" textAnchor="middle" fontSize="10" fill={color}>
        {percentage}%
      </text>
    </svg>
  );
};

// Ticker Ribbon Component
const TickerRibbon = () => {
  const tickerData = [
    { symbol: "AJL", change: -2.2, isNegative: true },
    { symbol: "ALARAB", change: 0.0, isNegative: false },
    { symbol: "ALUFP", change: 0.2, isNegative: false },
    { symbol: "ALLTEX", change: 1.0, isNegative: false },
    { symbol: "AMANFE", change: 0.0, isNegative: false },
    { symbol: "AMBERP", change: 1.9, isNegative: false },
    { symbol: "AMRAN", change: 0.4, isNegative: false },
    { symbol: "AAMRATE", change: 0.0, isNegative: false },
    { symbol: "ABBANK", change: 0.1, isNegative: false },
    { symbol: "ACFLP", change: 0.7, isNegative: false },
    { symbol: "ACIFOR", change: 0.6, isNegative: false },
    { symbol: "ACITP", change: -4.5, isNegative: true },
    { symbol: "ACME", change: 46.97, isNegative: false },
  ];

  return (
    <div className="flex flex-col bg-gray-50 border-b border-red-100 overflow-hidden w-[1200px]">
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-6 py-1.5 px-3">
        {tickerData.concat(tickerData).map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-1.5 text-xs font-medium min-w-max"
          >
            <span className="text-gray-700">{item.symbol}</span>
            <span
              className={item.isNegative ? "text-red-500" : "text-emerald-500"}
            >
              {item.change >= 0 ? "+" : ""}
              {item.change.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mx-auto text-xs font-medium gap-4">
        <div className="flex space-x-4 px-7 py-1.5">
          <div>
            <div className="font-bold">447,351,821</div>
            <div>Volume</div>
          </div>
          <div>
            <div className="font-bold">14,052,474,936</div>
            <div>Turnover</div>
          </div>
          <div>
            <div className="font-bold">348,261</div>
            <div>Trades</div>
          </div>
          <div>
            <div className="font-bold text-emerald-600">7.8%</div>
            <div>YTD %</div>
          </div>
        </div>
        <div className="flex text-xl font-bold text-gray-400 mr-4">|</div>
        <div className="flex gap-3 space-x-1">
          <div className="w-2 h-7 bg-emerald-500 "></div>
          <div className="w-2 h-5 bg-red-500 "></div>
          <div className="w-2 h-3 bg-gray-400 "></div>
          <div>
            <div className="font-bold">451</div>
            <div>Symbols Traded</div>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="text-green-600">157</div>
            <div>Up</div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="text-red-500">250</div>
            <div>Down</div>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="text-gray-500">44</div>
            <div>Unchanged</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-white to-white text-black">
      <Topnav />
      <div className="px-2 py-2.5 bg-white text-gray-800 border-t border-red-500/20">
        <div className="flex w-full justify-between items-center">
          {/* Left: Market Cards */}
          <div className="flex items-center space-x-3">
            {/* DSE Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 hover:shadow-lg transition-all duration-200 min-w-[140px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-600 flex items-center">
                  <span className="font-bold">DSE</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-red-500">Close</div>
                </div>
              </div>
              <div className="text-xs text-gray-900">08-09-2025</div>
            </div>

            {/* DSEX Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3.5 hover:shadow-lg transition-all duration-200 min-w-[140px]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-600 flex items-center">
                  <span className="font-bold">DSEX</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </span>
                <div className="text-xs text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                  -5.62759
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <ProfessionalChart trend="down" color="red" />
                </div>
                <div className="flex flex-col">
<div className="text-xs bg-red-600/85 font-bold text-white px-1.5 py-0.5 rounded">
                  -8.56
                </div>
                {/* <div className="text-xs text-gray-600">
                  -8.56
                </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Center: Ticker + Stats */}
          <div className="flex justify-between items-center w-full">
            <TickerRibbon />

            <div className="flex justify-between text-xs text-gray-700">
              <div className="flex justify-end items-end space-y-2">
                <div className="bg-white p-2 shadow-sm border-r flex space-x-6 border-gray-300">
                  <div className="text-center">
                    <CircularProgress percentage={46.97} color="#10b981" />
                    <div className="text-xs text-gray-500">Cash Map %</div>
                  </div>
                  <div className="text-center">
                    <CircularProgress percentage={6.05} color="#ef4444" />
                    <div className="text-xs text-gray-500">Net Cash %</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
