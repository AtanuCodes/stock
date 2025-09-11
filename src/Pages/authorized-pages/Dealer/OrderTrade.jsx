import React, { useState } from "react";
import {
  Settings,
  RefreshCw,
  Eye,
  Calculator,
  Printer,
  Grid3X3,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";

// import { useState } from "react";
// import { Settings, ChevronDown, Search, Calculator, RefreshCw, Eye, Printer, Grid3X3, ChevronUp } from "lucide-react";

const NewOrderInterface = () => {
  const [orderType, setOrderType] = useState("Buy");
  const [priceType, setPriceType] = useState("Limit");
  const [goodTill, setGoodTill] = useState("DAY");
  const [orderCategory, setOrderCategory] = useState("Normal");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 to-slate-800 text-white">
        <div className="flex items-center justify-between px-4 py-2.5">
          <h1 className="text-lg font-semibold">New Order</h1>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <Settings className="w-4 h-4 cursor-pointer hover:text-gray-100" />
          </div>
        </div>
      </div>

      {/* Subheader */}
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-medium text-gray-900">
            No Symbol Selected
          </h2>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Buying Power</span>
              <span className="font-bold bg-gray-200 rounded-md px-2 py-0.5">0.00</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Quantity in Hand</span>
              <span className="font-bold bg-gray-200 rounded-md px-2 py-0.5">0</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Gain / Loss</span>
              <span className="font-bold bg-gray-200 rounded-md px-2 py-0.5">0.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Panel */}
        <div className="flex-1 bg-white border-r border-gray-200">
          {/* Customer, Symbol, Portfolio Row */}
          <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Customer</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-1 focus:ring-1 focus:ring-blue-500"
                />
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Symbol</label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded pl-8 pr-8 py-1 focus:ring-1 focus:ring-blue-500"
                />
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Portfolio</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="No Portfolio"
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-1 pr-8 focus:ring-1 focus:ring-blue-500"
                />
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div className="px-4 py-2 border-b border-gray-200">
            <div className="text-sm">
              <span className="text-gray-500">Customer Name:</span>
              <span className="ml-2 font-medium text-gray-900">--</span>
            </div>
          </div>

          {/* Order Details */}
          <div className="p-4 bg-slate-50">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Action</label>
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500"
                >
                  <option>Buy</option>
                  <option>Sell</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Order Type</label>
                <select
                  value={priceType}
                  onChange={(e) => setPriceType(e.target.value)}
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500"
                >
                  <option>Limit</option>
                  <option>Market</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                <div className="flex">
                  <input
                    type="number"
                    defaultValue="0"
                    className="flex-1 border border-gray-300 bg-white text-gray-900 rounded-l px-3 py-2 focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="border border-l-0 border-gray-300 bg-gray-100 px-2 rounded-r hover:bg-gray-200">
                    <Calculator className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Price</label>
                <div className="flex">
                  <input
                    type="number"
                    step="0.01"
                    defaultValue="0.00"
                    className="flex-1 border border-gray-300 bg-white text-gray-900 rounded-l px-3 py-2 focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="border border-l-0 border-gray-300 bg-gray-100 px-2 rounded-r hover:bg-gray-200">
                    <Calculator className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Good Till</label>
                <select
                  value={goodTill}
                  onChange={(e) => setGoodTill(e.target.value)}
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500"
                >
                  <option>DAY</option>
                  <option>GTC</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Min Fill</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Disclosed Qty</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Order Category</label>
                <select
                  value={orderCategory}
                  onChange={(e) => setOrderCategory(e.target.value)}
                  className="w-full border border-gray-300 bg-white text-gray-900 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500"
                >
                  <option>Normal</option>
                  <option>Stop Loss</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-8 mt-4">
              <label className="flex items-center space-x-2 text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 bg-white" />
                <span className="text-sm">All or None</span>
              </label>
              <label className="flex items-center space-x-2 text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 bg-white" />
                <span className="text-sm">Private</span>
              </label>
            </div>
          </div>

          {/* Account Summary */}
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Owned</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Buy Pending</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cash Balance</span>
                  <span>0.00</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order Value</span>
                  <span>0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sell Pending</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Net Value</span>
                  <span>0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
       
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-white border-l border-gray-200">
          <div className="flex text-center justify-center bg-gray-100 px-4 py-2 border-b border-gray-200">
            <h3 className="text-center text-sm font-medium text-gray-900">Price Information</h3>
          </div>
          <div className="p-4 space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">Bid - Offer</div>
                <div>0.00 - 0.00</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 mb-1">Min - Max</div>
                <div>0.00 - 0.00</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">High - Low</div>
                <div className="text-green-600">0.00 - <span className="text-red-600">0.00</span></div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Change</div>
                <div>0.00</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">% Change</div>
                <div>0.00</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Last - Prev Closed</div>
                <div>0.00 - 0.00</div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
   <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200">
                  <RefreshCw className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200">
                  <Calculator className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-600 font-medium">
                  Buy
                </button>
                <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400">
                  Reset
                </button>
              </div>
              <div className="flex space-x-1">
                <button className="p-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200">
                  <Calculator className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200">
                  <Printer className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 bg-gray-100 rounded hover:bg-gray-200">
                  <Grid3X3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
      {/* Portfolio Section */}
      <div className="bg-gradient-to-br from-red-600 to-slate-800 text-white">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">Portfolio</h2>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <Settings className="w-4 h-4 cursor-pointer hover:text-gray-100" />
          </div>
        </div>
      </div>

      {/* Portfolio Action Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex flex-wrap items-center gap-2">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Customer</label>
          <input
            type="text"
            placeholder="Portfolio ID"
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Symbol"
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-blue-500">
          <option>Currency</option>
          <option>USD</option>
          <option>BDT</option>
          <option>EUR</option>
        </select>
        <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300">
          Account Summary
        </button>
        <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-300">
          Portfolio Report
        </button>
        <div>
          <RefreshCw className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
        <div>
          <ChevronUp className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm flex space-x-6">
        <div>Cost Value: <span className="font-bold text-blue-600">0.00</span></div>
        <div>Market Value: <span className="font-bold text-blue-600">0.00</span></div>
        <div>Total Balance: <span className="font-bold text-blue-600">0</span></div>
        <div>Unrealized Gain/Loss: <span className="font-bold text-blue-600">0.00</span></div>
        <div>% Unrealized Gain/Loss: <span className="font-bold text-blue-600">0.00</span></div>
      </div>

      {/* Portfolio Grid */}
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-900">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Symbol</th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">
                  S Description ▲
                </th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Owned</th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Buy Pending</th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Sell Pending</th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Receivable Qty</th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Payable Qty</th>
                <th className="px-4 py-2 border-r border-gray-200 text-left">Available Qty</th>
                <th className="px-4 py-2 text-left">Mkt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="9" className="px-4 py-3 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewOrderInterface;
