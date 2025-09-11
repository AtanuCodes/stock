import React, { useState } from 'react';
import { Settings, RefreshCw, Eye, Calculator, Printer, Grid3X3, ChevronDown, Search } from 'lucide-react';

const NewOrderInterface = () => {
  const [orderType, setOrderType] = useState('Buy');
  const [priceType, setPriceType] = useState('Limit');
  const [goodTill, setGoodTill] = useState('DAY');
  const [orderCategory, setOrderCategory] = useState('Normal');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* New Order Header */}
      <div className="bg-blue-600 text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-medium">New Order</h1>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
            <Settings className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
 <div className="bg-gray-100 px-4 py-2 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-800">No Symbol Selected</h2>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Buying Power</span>
                  <span className="font-bold">0.00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Quantity in Hand</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Gain / Loss</span>
                  <span className="font-bold">0.00</span>
                </div>
              </div>
            </div>
          </div>
      <div className="flex">
        
        {/* Left Panel - Order Form */}
        <div className="grid grid-cols-1 bg-white">
          {/* No Symbol Selected Header */}
         

          {/* Customer, Symbol, Portfolio Row */}
          <div className="grid grid-cols-3 gap-4 p-4 border-b">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Customer</label>
              <div className="relative">
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 pr-8" />
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Symbol</label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded pl-8 pr-8 py-2" />
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Portfolio</label>
              <div className="relative">
                <input type="text" placeholder="No Portfolio" className="w-full border border-gray-300 rounded px-3 py-2 pr-8" />
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div className="px-4 py-2 border-b">
            <div className="text-sm">
              <span className="text-gray-600">Customer Name:</span>
              <span className="ml-2 font-medium">--</span>
            </div>
          </div>

          {/* Order Details Grid */}
          <div className="p-4">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Action</label>
                <div className="relative">
                  <select 
                    value={orderType} 
                    onChange={(e) => setOrderType(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Order Type</label>
                <div className="relative">
                  <select 
                    value={priceType} 
                    onChange={(e) => setPriceType(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                  >
                    <option value="Limit">Limit</option>
                    <option value="Market">Market</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Quantity</label>
                <div className="flex">
                  <input type="number" defaultValue="0" className="flex-1 border border-gray-300 rounded-l px-3 py-2" />
                  <button className="border border-l-0 border-gray-300 rounded-r px-2 bg-gray-50">
                    <Calculator className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Price</label>
                <div className="flex">
                  <input type="number" step="0.01" defaultValue="0.00" className="flex-1 border border-gray-300 rounded-l px-3 py-2" />
                  <button className="border border-l-0 border-gray-300 rounded-r px-2 bg-gray-50">
                    <Calculator className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Good Till</label>
                <select 
                  value={goodTill} 
                  onChange={(e) => setGoodTill(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                >
                  <option value="DAY">DAY</option>
                  <option value="GTC">GTC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Min Fill</label>
                <input type="number" defaultValue="0" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Disclosed Qty</label>
                <input type="number" defaultValue="0" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Order Category</label>
                <select 
                  value={orderCategory} 
                  onChange={(e) => setOrderCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                >
                  <option value="Normal">Normal</option>
                  <option value="Stop Loss">Stop Loss</option>
                </select>
              </div>
            </div>

            {/* All or None / Private */}
            <div className="flex items-center space-x-8 mt-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">All or None</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Private</span>
              </label>
            </div>
          </div>

          {/* Account Summary Section */}
          <div className="border-t bg-gray-50 p-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Owned</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Buy Pending</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cash Balance</span>
                  <span className="font-medium">0.00</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Order Value</span>
                  <span className="font-medium">0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sell Pending</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Net Value</span>
                  <span className="font-medium">0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t bg-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                  <RefreshCw className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                  <Calculator className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-medium">
                  Buy
                </button>
                <button className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500">
                  Reset
                </button>
              </div>
              <div className="flex space-x-1">
                <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                  <Calculator className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                  <Printer className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                  <Grid3X3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Price Information */}
        <div className="w-80 bg-white border-l">
          <div className="bg-blue-100 px-4 py-2 border-b">
            <h3 className="text-sm font-medium text-gray-800">Price Information</h3>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">Bid - Offer</div>
                <div className="text-sm">0.00 - 0.00</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Min - Max</div>
                <div className="text-sm">0.00 - 0.00</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">High - Low</div>
                <div className="text-sm text-green-600">0.00 - <span className="text-red-600">0.00</span></div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Change</div>
                <div className="text-sm">0.00</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">% Change</div>
                <div className="text-sm">0.00</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Last - Prev Closed</div>
                <div className="text-sm">0.00 - 0.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-blue-600 text-white">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-medium">Portfolio</h2>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
            <Settings className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Portfolio Filters */}
      <div className="bg-gray-100 border-b">
        <div className="flex items-center space-x-4 px-4 py-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Customer</span>
            <div className="relative">
              <Search className="absolute left-2 top-2 w-3 h-3 text-gray-400" />
              <input type="text" placeholder="Portfolio ID" className="border border-gray-300 rounded pl-6 pr-8 py-1 text-sm" />
              <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
            </div>
          </div>
          <input type="text" className="border border-gray-300 rounded px-3 py-1 text-sm" />
          <div className="relative">
            <Search className="absolute left-2 top-2 w-3 h-3 text-gray-400" />
            <input type="text" placeholder="Symbol" className="border border-gray-300 rounded pl-6 pr-8 py-1 text-sm" />
            <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
          </div>
          <input type="text" className="border border-gray-300 rounded px-3 py-1 text-sm" />
          <div className="relative">
            <input type="text" placeholder="Currency" className="border border-gray-300 rounded px-3 py-1 pr-8 text-sm" />
            <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-gray-400" />
          </div>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300">
            Account Summary
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300">
            Portfolio Report
          </button>
          <div className="ml-auto flex items-center space-x-2">
            <RefreshCw className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Settings className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
        </div>
      </div>

      {/* Portfolio Summary Stats */}
      <div className="bg-gray-50 px-4 py-3 border-b">
        <div className="flex items-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Cost Value ()</span>
            <span className="font-bold text-blue-600">0.00</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Market Value ()</span>
            <span className="font-bold text-blue-600">0.00</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Total Balance</span>
            <span className="font-bold text-blue-600">0</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Unrealized Gain/Loss ()</span>
            <span className="font-bold text-blue-600">0.00</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">% Unrealized Gain/Loss</span>
            <span className="font-bold text-blue-600">0.00</span>
          </div>
        </div>
      </div>

      {/* Portfolio Data Grid */}
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Symbol</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">
                  S Description ▲
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Owned</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Buy Pending</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Sell Pending</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Receivable Qty</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Payable Qty</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-r">Available Qty</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Mkt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
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