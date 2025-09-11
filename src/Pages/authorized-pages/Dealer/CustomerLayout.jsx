import React, { useState } from 'react';
import { Search, Settings, RefreshCw, Filter, Download, Mail, Users } from 'lucide-react';

const TradingInterface = () => {
  const [activeTab, setActiveTab] = useState('Customer Search');
  const [activeOrderTab, setActiveOrderTab] = useState("Open/Today's");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-blue-600 text-white">
        <div className="flex items-center">
          
          
          {/* Navigation Tabs */}
          <div className="flex">
            {['Customer Search', 'My Customer'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 border-r border-blue-500 hover:bg-blue-500 transition-colors ${
                  activeTab === tab ? 'bg-blue-500' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Header Icons */}
          <div className="ml-auto flex items-center px-4">
            <div className="w-6 h-6 bg-orange-400 rounded-full mr-2"></div>
            <Settings className="w-5 h-5" />
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
            <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600">
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
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Portfolio ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Full Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Nationality</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Customer No</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Institute</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Mobile No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" className="px-4 py-8 text-center text-gray-500">
                  Data not available
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
            <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">‹</button>
            <span className="text-sm text-gray-600">1 / 1</span>
            <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">›</button>
          </div>
        </div>
      </div>

      {/* Order Section */}
      <div className="bg-white mt-1">
        {/* Order Tabs */}
        <div className="bg-blue-600 text-white">
          <div className="flex">
            {['Order List', 'Order Basket', 'Account Summary'].map((tab) => (
              <button
                key={tab}
                className="px-6 py-3 border-r border-blue-500 hover:bg-blue-500 transition-colors bg-blue-500"
              >
                {tab}
              </button>
            ))}
            <div className="ml-auto flex items-center px-4">
              <div className="w-6 h-6 bg-orange-400 rounded-full mr-2"></div>
              <Settings className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Order Status Tabs */}
        <div className="bg-gray-800 text-white">
          <div className="flex">
            {["Open/Today's", 'Open', 'Executed', 'Rejected', 'Cancelled', 'Search'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveOrderTab(tab)}
                className={`px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                  activeOrderTab === tab ? 'bg-orange-500' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Order Filters */}
        <div className="bg-gray-100 px-4 py-3">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-2">
              <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Portfolio ID</option>
              </select>
            </div>
            <div className="col-span-2">
              <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Symbol</option>
              </select>
            </div>
            <div className="col-span-2">
              <select className="w-full border border-gray-300 rounded px-3 py-1 text-sm">
                <option>Order Id</option>
              </select>
            </div>
            <div className="col-span-2">
              <button className="w-full bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                Panic Switch
              </button>
            </div>
            <div className="col-span-2">
              <RefreshCw className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            </div>
            <div className="col-span-2">
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
              <button className="text-blue-600 text-sm hover:underline">Show My Orders</button>
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
                  <span className="text-white text-xs font-bold">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Data Grid */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Customer No</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Exchange Account</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Order Id</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Exg. Order No</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Symbol</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Order Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Exchange</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
                  Data not available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradingInterface;