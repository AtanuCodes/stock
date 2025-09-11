
import Header from "../../Helper/Navber";
import MarketOverviewSection from "../../Helper/Overview";
import MainStockTable from "../../Helper/StockTable";
import News from "../../Helper/News";
import { Zap } from "lucide-react";
import DealerNav from "../Dealer/DealerHeader";
import TradingInterface from "../Dealer/CustomerLayout";
import NewOrderInterface from "../Dealer/OrderTrade";

const DealerTerminal = () => {
  return (
    <div className="">
      <DealerNav/>

      <div className="grid grid-cols-2">
        <div className="">
         <TradingInterface/>
        </div>
        <div className="">
         <NewOrderInterface/>
        </div>
      </div>
     
     
    </div>
  );
};

export default DealerTerminal;
