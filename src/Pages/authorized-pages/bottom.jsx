import React from 'react';
import { Briefcase, BarChart3, ArrowUpDown, List, FileText } from 'lucide-react';

const BottomNavigation = ({ activeTab = 'Market', onTabChange }) => {
  const navigationItems = [
    { 
      id: 'portfolio',
      icon: Briefcase, 
      label: 'Portfolio', 
      active: activeTab === 'portfolio' 
    },
    { 
      id: 'market',
      icon: BarChart3, 
      label: 'Market', 
      active: activeTab === 'market' 
    },
    { 
      id: 'trade',
      icon: ArrowUpDown, 
      label: 'Buy/Sell', 
      active: activeTab === 'trade' 
    },
    { 
      id: 'watchlist',
      icon: List, 
      label: 'Watch List', 
      active: activeTab === 'watchlist' 
    },
    { 
      id: 'news',
      icon: FileText, 
      label: 'News', 
      active: activeTab === 'news' 
    },
  ];

  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="grid grid-cols-5 py-2">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center py-2 px-1 transition-colors duration-200 ${
                item.active 
                  ? 'text-teal-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent className={`w-5 h-5 mb-1 ${
                item.active ? 'text-teal-600' : 'text-gray-500'
              }`} />
              <span className={`text-xs font-medium ${
                item.active ? 'text-teal-600' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
              {item.active && (
                <div className="w-1 h-1 bg-teal-600 rounded-full mt-1"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;