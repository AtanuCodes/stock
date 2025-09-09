import React from 'react';
import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  BarChart3, 
  ChevronDown, 
  Volume2, 
  Bell,
  Newspaper,
   MicVocal,
  AlertTriangle,
  Star,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

export default function News() {
  const NewsFlash = () => {
    const [activeNewsTab, setActiveNewsTab] = useState('All');
    
    const newsItems = [
      {
        title: 'CBLPBOND: Semi-annual Coupon Amount Disbursement',
        category: 'CBLPBOND-BL',
        time: '3 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'PREMIERLEA: Qualified Opinion, Emphasis of Matter and Other Matter',
        category: 'PREMIERLEA-PB',
        time: '3 hours ago',
        priority: 'high',
        type: 'company'
      },
      {
        title: 'KARNAPH ULI: Dividend Disbursement',
        category: 'KARNAPH ULI-PB',
        time: '4 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'ISLAMIINS: Dividend Disbursement',
        category: 'ISLAMIINS-PB',
        time: '4 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'TB15Y0326: Resumption after Record Date',
        category: 'TB15Y0326-BL',
        time: '5 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'PBLPBOND: Spot News',
        category: 'PBLPBOND-BL',
        time: '5 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'TR1G5TZC8: Spot News',
        category: 'TR1G5TZC8-BY',
        time: '5 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'IPCSBOND2: Suspension for Record Date',
        category: 'IPCSBOND2-BY',
        time: '5 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'SALVOCHEM: Resumption after Record Date',
        category: 'SALVOCHEM-PB',
        time: '5 hours ago',
        priority: 'high',
        type: 'market'
      },
      {
        title: 'MJLBD: Investment in Premier LP Gas Limited by Omera Petroleum Limited',
        category: 'MJLBD-PB',
        time: '6 hours ago',
        priority: 'medium',
        type: 'company'
      },
      {
        title: 'MJLBD: Investment in Premier LP Gas Limited by Omera Petroleum Limited',
        category: 'MJLBD-PB',
        time: '6 hours ago',
        priority: 'medium',
        type: 'company'
      }
    ];

    return (
      <div className="bg-card border border-gray-200 rounded flex flex-col h-full">
        {/* News Header */}
        <div className="bg-gradient-to-r from-red-200/80 to-white dark:from-black dark:to-neutral-800 text-foreground px-3 py-1.5 rounded">
 <div className="flex items-center justify-between">
           <span className='lg:hidden'>
             <p className='text-foreground'>News & Announcements</p>
           </span>
           <div className='hidden lg:block'>
 <div className="flex items-center space-x-2">
              <div className="border px-2 py-1 rounded border-gray-300 text-forground">
                <MicVocal className="w-4 h-4" />
              </div>
              {/* <span className="text-sm font-semibold">News Flash</span> */}
            </div>
           </div>
        
          </div>
          
       
       <div className='hidden lg:block'>
<div className="flex items-center space-x-1 mt-3 ">
            {['All', 'Announcements', 'News'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveNewsTab(tab)}
                className={`dark:bg-card px-3 py-1 text-xs rounded transition-all ${
                  activeNewsTab === tab
                    ? 'bg-red-600/85 dark:bg-red-500 text-white font-medium'
                    : 'text-gray-600 dark:text-gray-500  hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
       </div>
          {/* News Tabs */}
          
        </div>

        {/* News Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {newsItems.map((news, idx) => (
              <div key={idx} className="px-3 py-2 hover:bg-red-50 dark:hover:bg-gray-700 transition-colors cursor-pointer border-l-4 border-l-orange-400">
                <div className="flex items-start space-x-2">
                  <div className="mt-0.5">
                    <AlertTriangle className="w-3 h-3 text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-foreground mb-1">
                      {news.title}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-500 font-medium cursor-pointer hover:underline">
                        {news.category}
                      </span>
                      <span className="text-xs text-blue-500">
                        {news.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NewsFlash />
    </div>
  );
}