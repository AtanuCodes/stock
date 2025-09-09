import React from 'react';
import { Briefcase, BarChart3, ArrowUpDown, List, FileText } from 'lucide-react';

const BottomNavigation = ({ activeTab = 'market', onTabChange }) => {
  const navigationItems = [
    { 
      id: 'portfolio',
      icon: Briefcase, 
      label: 'Portfolio'
    },
    { 
      id: 'market',
      icon: BarChart3, 
      label: 'Market'
    },
    { 
      id: 'trade',
      icon: ArrowUpDown, 
      label: 'Buy/Sell'
    },
    { 
      id: 'watchlist',
      icon: List, 
      label: 'Watch List'
    },
    { 
      id: 'news',
      icon: FileText, 
      label: 'News'
    },
  ];

  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="grid grid-cols-5 py-1.5">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center py-1.5 px-1 transition-all duration-200 rounded-lg mx-1 overflow-hidden ${
                isActive
                  ? 'bg-gradient-to-t from-red-200/70 to-transparent text-red-600 font-semibold'
                  : 'border-transparent text-gray-500 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              <IconComponent className={`w-5 h-5 mb-1 transition-colors duration-200 ${
                isActive ? 'text-red-600' : 'text-gray-500'
              }`} />
              <span className={`text-xs font-medium transition-colors duration-200 ${
                isActive ? 'text-red-600' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;