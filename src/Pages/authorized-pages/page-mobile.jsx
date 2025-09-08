import React, { useState } from 'react';
import MobileTradingDashboard from './MobileDash';
import DrawerMenu from './Sidebar';

const MainApp = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative">
      <MobileTradingDashboard onMenuClick={handleMenuClick} />
      <DrawerMenu 
        isOpen={isDrawerOpen} 
        onClose={handleCloseDrawer}
        userName="TARUN KANTI ROY"
      />
    </div>
  );
};

export default MainApp;