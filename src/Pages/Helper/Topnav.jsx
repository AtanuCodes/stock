import React from 'react'
import whitelogo from "../../assets/Logo_IDLC Group Mono White.png";
import logo from "../../assets/Logo_IDLC Group.png"
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
import df from "../../assets/DFLOGO.svg"

export default function Topnav() {
  return (
    <div className="px-4 py-2 flex items-center justify-between">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-24 h-14 ">
             <img src={df} className="w-full h-full"t="Logo" />
            </div>
        
          </div>
          
          {/* Search Box */}
          <div className="flex items-center bg-red-50/50 backdrop-blur-sm border border-red-100
           px-3 py-2 rounded-lg">
            <Search className="w-4 h-4 mr-2 text-gray-600" />
            <input 
              className="bg-transparent placeholder-gray-600 text-white border-none outline-none w-52 text-sm"
              placeholder="Search ..."
            />
          </div>
        </div>

        {/* Center Section - Account Info */}
        <div className="flex items-center space-x-8">
          {/* Account Dropdown */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded border border-red-100">
            <span className="text-sm">D00908-CSE</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          
          {/* Buying Power */}
          <div className="text-right text-gray-600">
            <div className="text-xs ">Buying Power</div>
            <div className="text-lg font-bold">15.00</div>
          </div>
          
          {/* Gain/Loss */}
          <div className="text-right text-gray-600">
            <div className="text-xs ">Gain/Loss</div>
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
          <div className="text-xs ">
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
  )
}
