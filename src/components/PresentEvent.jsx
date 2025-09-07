import React, { useState } from 'react';
import { Search, Bell, User, TrendingUp, TrendingDown, ChevronDown, Star } from 'lucide-react';
import Header from './header';
import MarketOverviewSection from './overview';
import MainStockTable from './stocktable';
<Header/>

const TradingDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
    <MarketOverviewSection/>
    <MainStockTable/>
    </div>
  );
};

export default TradingDashboard;