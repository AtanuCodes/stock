import React, { useEffect, useState } from 'react';
import {
  Search,
  Bell,
  User,
  Settings,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import df from "../../assets/DFLOGO.svg";
import Wlogo from "../../assets/Wlogo.svg";
export default function Topnav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    // Optionally: Persist theme in localStorage
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  useEffect(() => {
    // Check localStorage for theme preference on initial load
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'true');
    }
  }, []);

  return (
    <div className="px-4 py-2 flex items-center justify-between bg-card text-foreground">
      {/* Left Section - Logo and Search */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-24 h-14">
            <img  src={isDarkMode ? Wlogo : df} className="w-full h-full" alt="Logo" />
          </div>
        </div>

        {/* Search Box */}
        <div className="flex items-center bg-red-50/50 dark:bg-gray-100 backdrop-blur-sm border border-red-100 dark:border-gray-100 px-3 py-2 rounded-lg">
          <Search className="w-4 h-4 mr-2 text-gray-600" />
          <input
            className="bg-transparent placeholder-gray-600 text-card border-none outline-none w-52 text-sm"
            placeholder="Search ..."
          />
        </div>
      </div>

      {/* Center Section - Account Info */}
      <div className="flex items-center space-x-8">
        {/* Account Dropdown */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded border border-red-100 dark:border-gray-100">
          <span className="text-sm">D00908-CSE</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        
        {/* Buying Power */}
        <div className="text-right text-foreground">
          <div className="text-xs">Buying Power</div>
          <div className="text-lg font-bold">15.00</div>
        </div>
        
        {/* Gain/Loss */}
        <div className="text-right text-foreground">
          <div className="text-xs">Gain/Loss</div>
          <div className="text-lg font-bold">0.00 0.00%</div>
        </div>
      </div>

      {/* Right Section - Status and Controls */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button onClick={handleThemeToggle} className="p-1.5 hover:bg-teal-500/20 rounded transition-colors">
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Connection Status */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs">Live: 1 Tick/sec</span>
        </div>
        
        {/* Last Login */}
        <div className="text-xs">
          Last Login: 07-09 14:25:24
        </div>
        
        {/* Version */}
        <div className="text-xs">
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
  );
}