import React, { useState, useEffect } from "react";
import {
  Menu,
  Bell,
  TrendingUp,
  BarChart3,
  Eye,
  Activity,
  Plus,
  MoreHorizontal,
  User,
  Settings,
  HelpCircle,
  Minimize2,
  Clock,
  ChevronDown,
} from "lucide-react";
import logo1 from "../../../assets/Logo_SL_W.png";

const DealerNav = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState("ONE STOP TRADING");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const menuItems = [
    { name: "MENU", icon: Menu, hasDropdown: true },
    { name: "ONE STOP TRADING", icon: TrendingUp, active: true },
    { name: "TRADE DASHBOARD", icon: BarChart3 },
    { name: "MARKET WATCH", icon: Eye },
    { name: "MARKET", icon: Activity },
    { name: "QUOTE", icon: BarChart3 },
    { name: "PRO CHART", icon: TrendingUp },
    { name: "ANALYZE", icon: BarChart3 },
    { name: "MY WATCH", icon: Eye },
    { name: "NEWS & ANNOUNCEMENTS", icon: Bell },
  ];

  const statusItems = [
    { label: "Volume", value: "0", color: "text-green-400" },
    { label: "Turnover", value: "0", color: "text-gray-400" },
    { label: "Trades", value: "0", color: "text-red-400" },
    { label: "YTD %", value: "0.00", color: "text-blue-400" },
    { label: "Symbols Traded", value: "0 0 0", color: "text-cyan-400" },
    { label: "Net Cash %", value: "0.00%", color: "text-yellow-400" },
  ];

  return (
    <div className="bg-slate-900 text-white shadow-xl">
      {/* Top Status Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-1.5 border-b border-slate-700">
        <div className="flex items-center justify-between text-xs">
          {/* Left Status Items */}
          <div className="flex items-center space-x-6">
            {statusItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-1">
                <span className="text-slate-400">{item.label}:</span>
                <span className={item.color}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Right Status Items */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400">Connected Live</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400">
                LMUT: {formatTime(currentTime)}
              </span>
            </div>
            <div className="text-slate-300">Version 4.061.00.0</div>
            <div className="text-slate-300">Dealer 1</div>
            <div className="flex items-center space-x-1">
              {/* <div className="w-4 h-4 bg-red-600 rounded-sm"></div> */}
              <span className="font-semibold">IDLC Securities Limited</span>
            </div>
            <div className="text-slate-300">License Till: 11-Sep-2025</div>
            <div className="flex items-center space-x-2">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 bg-slate-800">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors">
            <span className="font-semibold text-white">DSE</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-px h-6 bg-slate-600"></div>

          {/* Three Dots Menu */}
          <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>

          {/* Vertical Separator */}
          <div className="w-px h-6 bg-slate-600"></div>

          {/* Logo */}
          <div className="flex items-center ">
            <img src={logo1} alt="Logo" className="w-22 h-14" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-2">
        <div className="bg-slate-800 text-white">
          <div className="flex items-center justify-between px-2 py-1">
            {/* Left Side - Navigation Menu */}
            <nav className="flex items-center">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMenu(item.name)}
                  className={`flex items-center space-x-2 px-2 ml-0.5 py-0.5 text-xs font-medium transition-all duration-200 border-r border-slate-600 last:border-r-0 ${
                    item.active || activeMenu === item.name
                      ? "bg-[#ED1C24] text-white rounded-lg"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <item.icon className="w-3 h-3" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </button>
              ))}

              {/* Add More Button */}
              <button className="flex items-center justify-center text-slate-400 hover:text-white p-2 hover:bg-slate-700 transition-colors border-r border-slate-600">
                <Plus className="w-3 h-3" />
              </button>
            </nav>

            {/* Right Side - Actions and Logo */}
            <div className="flex items-center space-x-2">
              {/* Action Buttons */}
              <div className="flex items-center space-x-1">
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">
                  <User className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">
                  <Bell className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-[#ED1C24]/85 via-red-600 to-[#ED1C24]"></div>
    </div>
  );
};

export default DealerNav;
