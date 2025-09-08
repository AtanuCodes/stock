
import Header from "../../Helper/Navber";
import MarketOverviewSection from "../../Helper/Overview";
import MainStockTable from "../../Helper/StockTable";
import News from "../../Helper/News";

const TradingDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="grid grid-cols-[9fr,2fr] gap-1] gap-0">
        <div className="">
          <MarketOverviewSection />
          <MainStockTable />
        </div>
        <div className="w-100%">
          <News />
        </div>
      </div>
      
    </div>
  );
};

export default TradingDashboard;
