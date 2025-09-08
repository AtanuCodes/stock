import React from 'react';
import { 
  X, 
  Share2, 
  Settings, 
  Power,
  BarChart3, 
  TrendingUp, 
  Activity,
  List,
  FileText,
  Layers,
  Clock,
  Briefcase,
  FileBarChart,
  DollarSign,
  ArrowUpDown,
  HelpCircle,
  User
} from 'lucide-react';

const DrawerMenu = ({ isOpen, onClose, userName = "TARUN KANTI ROY" }) => {
  const menuItems = [
    {
      category: 'MARKET',
      items: [
        { icon: BarChart3, label: 'Market', active: true },
        { icon: TrendingUp, label: 'Top Stocks' },
        { icon: Activity, label: 'Indices' },
        { icon: List, label: 'Watch List' }
      ]
    },
    {
      category: 'QUOTE',
      items: [
        { icon: FileText, label: 'Quote' },
        { icon: Layers, label: 'Market Depth' },
        { icon: Clock, label: 'Time and Sales' }
      ]
    },
    {
      category: 'TRADE',
      items: [
        { icon: Briefcase, label: 'Portfolio' },
        { icon: FileBarChart, label: 'Order List' },
        { icon: DollarSign, label: 'Account Summary' },
        { icon: ArrowUpDown, label: 'Trade' }
      ]
    },
    {
      category: 'HELP',
      items: [
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Support Required' }
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="bg-teal-600 text-white px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-teal-600" />
              </div>
              <span className="font-semibold">Trade Express</span>
            </div>
            <div className="flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <Settings className="w-5 h-5" />
              <Power className="w-5 h-5" />
            </div>
          </div>
          
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm opacity-75">Logged in as</div>
              <div className="font-semibold text-white">{userName}</div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-2">
              {/* Category Header */}
              <div className="px-4 py-3 bg-gray-50">
                <h3 className="text-xs font-semibold text-gray-600 tracking-wide">
                  {section.category}
                </h3>
              </div>
              
              {/* Menu Items */}
              <div className="bg-white">
                {section.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`w-full flex items-center px-4 py-4 text-left hover:bg-gray-50 transition-colors ${
                      item.active 
                        ? 'bg-teal-50 border-r-4 border-teal-600 text-teal-700' 
                        : 'text-gray-700'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 mr-4 ${
                      item.active ? 'text-teal-600' : 'text-gray-500'
                    }`} />
                    <span className={`font-medium ${
                      item.active ? 'text-teal-700' : 'text-gray-700'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="text-xs text-gray-500 text-center">
            <p>© 2025 Trade Express</p>
            <p className="mt-1">Professional Trading Platform</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerMenu;