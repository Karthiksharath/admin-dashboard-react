import React from 'react'
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCrd from "../components/common/StatCrd";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverview from "../components/sales/SalesOverView";
import SalesbyCategoryChart from "../components/sales/SalesbyCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import Profile from '../components/settings/Profile';
import Notifications from '../components/settings/Notifications';
import Security from '../components/settings/Security';
import ConnectedAccounts from '../components/settings/ConnectedAccounts';
import DangerZone from '../components/settings/DangerZone';




const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const Settingspage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
			<Header title='Settings' />

      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
       <Profile/>
       <Notifications/>
       <Security/>
       <ConnectedAccounts/>
       <DangerZone/>
      </main>
      
    </div>
  )
}

export default Settingspage
