
import Header from "../../Helper/Navber";
import MarketOverviewSection from "../../Helper/Overview";
import MainStockTable from "../../Helper/StockTable";
import News from "../../Helper/News";
import { Zap } from "lucide-react";

const TradingDashboard = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-[9fr,2fr] gap-0] gap-0">
        <div className="">
          <MarketOverviewSection />
          <MainStockTable />
        </div>
        <div className="w-100%">
          <News />
        </div>
      </div>
      <div className="fixed bottom-2 right-2 z-50">
      <div className="relative px-1 py-1.5 rounded-xl bg-gradient-to-r from-gray-200 to-white shadow">
        {/* Top subtle border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-t-lg"></div>
        
        <div className="flex items-center space-x-1 group cursor-pointer">
          {/* Icon */}
          <div className="flex items-center justify-center w-4 h-4  group-hover:bg-red-500/20 transition-all duration-300">
            <Zap className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
          </div>
          
          {/* Text */}
          <div className="flex items-center space-x-1">
            <span className="text-black text-[11px] font-medium tracking-wide">
              Powered by
            </span>
            <span className="text-transparent bg-red-500
             bg-clip-text text-xs font-bold tracking-tight mr-0.5">
              DirectFN
            </span>
          </div>
        </div>
        
        {/* Subtle red glow effect */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-red-500/5 rounded-full blur-xl pointer-events-none"></div>
        
        {/* Bottom subtle border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent rounded-b-lg"></div>
      </div>
    </div>
    </div>
  );
};

export default TradingDashboard;
