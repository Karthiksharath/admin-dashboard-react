import React from 'react'

import Header from "../components/common/Header";

import OverViewCards from '../components/analytics/OverViewCards'
import RevenueChart from '../components/analytics/RevenueChart';
import ChannelPerformance from '../components/analytics/ChannelPerformance';
import ProductPerformance from '../components/analytics/ProductPerformance';
import UserRetention from '../components/analytics/UserRetention';
import CustomerSegmentation from '../components/analytics/CustomerSegmentation';
import AIPoweredInsights from '../components/analytics/AIPoweredInsights';




const Analyticspage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
			<Header title={"Analytics Dash Board"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <OverViewCards/>
        <RevenueChart/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ChannelPerformance/>
          <ProductPerformance/>
          <UserRetention/>
          <CustomerSegmentation/>
        </div>

        <AIPoweredInsights/>
      </main>
    </div>
  )
}

export default Analyticspage
