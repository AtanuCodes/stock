import React, { useEffect, useState } from 'react';
import { 
  Share2, 
  Settings, 
  Power,
  BarChart3, 
  TrendingUp, 
  Activity,
  List,
  FileText,
  Briefcase,
  FileBarChart,
  DollarSign,
  ArrowUpDown,
  HelpCircle,
  User,
  Key,
  Info,
  LogOut,
  Clock,
  Sun,
  Moon
} from 'lucide-react';
import logo from "../../assets/DFLOGO.svg";

const DrawerMenu = ({ isOpen, onClose, userName = "TARUN KANTI ROY" }) => {
  // 🌙 Theme state
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
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'true');
    }
  }, []);

  // Get current time for last login
  const getLastLoginTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    const dateString = now.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    return `${timeString}, ${dateString}`;
  };

  const menuItems = [
    {
      category: 'TRADE',
      items: [
        { icon: Briefcase, label: 'Portfolio' },
        { icon: FileBarChart, label: 'Order List' },
        { icon: DollarSign, label: 'Account Summary' },
      ]
    },
    {
      category: 'MARKET',
      items: [
        { icon: BarChart3, label: 'Market', active: true },
        { icon: TrendingUp, label: 'Top Stocks' },
        { icon: Activity, label: 'Indices' },
        { icon: ArrowUpDown, label: 'Buy/Sell' },
        { icon: List, label: 'Watch List' }
      ]
    },
    {
      category: 'NEWS',
      items: [
        { icon: FileText, label: 'Market News' },
      ]
    },
    {
      category: 'HELP ',
      items: [
        { icon: Settings, label: 'Settings' },
        { icon: Key, label: 'Change Password' },
        { icon: HelpCircle, label: 'Support Required' },
        { icon: Info, label: 'About Us' },
        { icon: LogOut, label: 'Logout', danger: true }
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
      <div className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-black z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header - Fixed */}
        <div className="bg-gradient-to-tl from-red-200/70 to-white dark:from-neutral-900 dark:to-black border-b border-border text-gray-700 dark:text-gray-200 px-4 py-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-20">
                <img src={logo} alt="logo" className="w-full h-full" />
              </div>
              {/* <span className="font-bold text-lg">I-Trade</span> */}
            </div>

            {/* Right header icons */}
            <div className="flex items-center space-x-3">
              <Share2 className="w-5 h-5 hover:text-teal-200 cursor-pointer transition-colors" />
              
              {/* 🌙 Theme toggle button */}
              <button 
                onClick={handleThemeToggle} 
                className="p-1.5 hover:bg-teal-500/20 rounded transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Power className="w-5 h-5 hover:text-teal-200 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* User Info with Last Login */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/85 dark:bg-neutral-800 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm opacity-80">Logged in as</div>
              <div className="font-semibold text-sm">{userName}</div>
              <div className="flex items-center text-xs opacity-70 mt-1">
                <Clock className="w-3 h-3 mr-1" />
                <span>Last login: {getLastLoginTime()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Menu Content */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
          <div className="pb-4">
            {menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-1">
                {/* Category Header */}
                <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800">
                  <h3 className="text-xs font-bold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
                    {section.category}
                  </h3>
                </div>
                
                {/* Menu Items */}
                <div className="bg-white dark:bg-black">
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={`w-full flex items-center px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-200 group ${
                        item.active 
                          ? 'bg-gradient-to-r from-rose-50 to-white dark:from-rose-900/30 dark:to-black border-r-4 border-rose-500 shadow-sm' 
                          : 'hover:shadow-sm'
                      } ${
                        item.danger ? 'hover:bg-red-50 dark:hover:bg-red-900/30' : ''
                      }`}
                    >
                      <item.icon className={`w-5 h-5 mr-4 transition-colors ${
                        item.active 
                          ? 'text-rose-600 dark:text-rose-400' 
                          : item.danger 
                            ? 'text-red-500 group-hover:text-red-600 dark:group-hover:text-red-400' 
                            : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200'
                      }`} />
                      <span className={`font-medium transition-colors ${
                        item.active 
                          ? 'text-rose-700 dark:text-rose-300' 
                          : item.danger 
                            ? 'text-red-600 group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300' 
                            : 'text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                      
                      {/* Active indicator */}
                      {item.active && (
                        <div className="ml-auto w-2 h-2 bg-rose-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Extra spacing for better scroll */}
            <div className="h-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerMenu;
