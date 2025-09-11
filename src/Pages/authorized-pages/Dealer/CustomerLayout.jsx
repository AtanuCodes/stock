import React, { useState } from "react";
import {
  Search,
  Settings,
  RefreshCw,
  Download,
  Mail,
  Users,
  Eye,
} from "lucide-react";

const TradingInterface = () => {
  const [activeTab, setActiveTab] = useState("Customer Search");
  const [activeOrderTab, setActiveOrderTab] = useState("Open/Today's");

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Vertical Watchlist */}
      <div className="w-12 bg-slate-700 flex flex-col items-center justify-between py-6 text-white">
        <div className="flex items-center rotate-180 [writing-mode:vertical-rl] tracking-widest font-semibold text-sm mr-2">
          <Eye className="w-6 h-6 text-white rotate-90" />{" "}
          {/* Added margin-right for spacing */}
          WATCHLIST
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Navigation */}
        <div className="bg-gradient-to-br from-red-600 to-slate-800 text-white">
          <div className="flex items-center">
            {/* Navigation Tabs */}
            <div className="flex">
              {["Customer Search", "My Customer"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 border-r border-slate-700 hover:bg-gray-700 transition-colors ${
                    activeTab === tab ? "bg-gray-600" : ""
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Header Icons */}
            <div className="ml-auto flex items-center px-4">
              <div className="w-4 h-4 bg-orange-400 rounded-full mr-2"></div>
              <Settings className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Customer Search Section */}
        <div className="bg-white border-b">
          <div className="flex items-center px-4 py-3">
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Portfolio ID</option>
              </select>
              <button className="bg-gray-500 text-white px-4 py-1 rounded text-sm hover:bg-gray-700">
                Local Search
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded text-sm hover:bg-gray-300">
                Advanced Search
              </button>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <Settings className="w-5 h-5 text-gray-600" />
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Customer Data Grid */}
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "Portfolio ID",
                    "Full Name",
                    "Category",
                    "Nationality",
                    "Status",
                    "Customer No",
                    "Institute",
                    "Mobile No",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan="8"
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No data available!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Page Size</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>40</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">
                ‹
              </button>
              <span className="text-sm text-gray-600">1 / 1</span>
              <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Order Section */}
        <div className="bg-white mt-1">
          {/* Order Tabs */}
          <div className="bg-gradient-to-br from-red-600 to-slate-800 text-white">
            <div className="flex">
              {["Order List", "Order Basket", "Account Summary"].map((tab) => (
                <button
                  key={tab}
                  className="px-6 py-3 border-r border-slate-700 hover:bg-gray-700 transition-colors bg-gray-600"
                >
                  {tab}
                </button>
              ))}
              <div className="ml-auto flex items-center px-4">
                <div className="w-4 h-4 bg-orange-400 rounded-full mr-2"></div>
                <Settings className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Order Status Tabs */}
          <div className="bg-gray-200 text-gray-700">
            <div className="flex">
              {[
                "Open/Today's",
                "Open",
                "Executed",
                "Rejected",
                "Cancelled",
                "Search",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveOrderTab(tab)}
                  className={`px-4 py-2 text-sm border-r border-gray-300 transition-colors ${
                    activeOrderTab === tab
                      ? "bg-gray-500 text-white"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Order Filters */}
          <div className="bg-gray-100 px-2 py-3">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div>
                  <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Portfolio ID</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Symbol</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Order ID</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                  Panic Switch
                </button>
                <RefreshCw className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
                <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              </div>
            </div>
          </div>

          {/* Order Actions */}
          <div className="px-4 py-3 border-b bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm">Select All</span>
                </label>
                <button className="text-blue-600 text-sm hover:underline">
                  Show My Orders
                </button>
                <div className="flex items-center space-x-2">
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Set</option>
                  </select>
                  <Download className="w-4 h-4 text-gray-600" />
                  <Mail className="w-4 h-4 text-gray-600" />
                  <Users className="w-4 h-4 text-gray-600" />
                  <button className="text-red-600 text-sm border border-red-200 px-3 py-1 rounded hover:bg-red-50">
                    Cancel Order(s)
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">No. of Ords: 0</span>
                <div className="flex space-x-1">
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <RefreshCw className="w-3.5 h-4 text-white cursor-pointer hover:text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Data Grid */}
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "",
                    "Customer No",
                    "Exchange Account",
                    "Order Id",
                    "Exg. Order No",
                    "Symbol",
                    "Order Date",
                    "Exchange",
                    "Action",
                  ].map((col, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r"
                    >
                      {col || (
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan="9"
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No data available!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingInterface;
