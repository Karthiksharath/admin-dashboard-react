import React from 'react'
import Header from '../components/common/Header'
import StatCrd from '../components/common/StatCrd'
import { Zap, Users, ShoppingBag, BarChart2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SalesOverView from '../components/overview/SalesOverView'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'




const Overviewpage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="OverView"></Header>
			
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCrd name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
					<StatCrd name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCrd name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCrd name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverView></SalesOverView>
					<CategoryDistributionChart></CategoryDistributionChart>
					<SalesChannelChart></SalesChannelChart>
					
				</div>

			</main>
    </div>

    
  )
}

export default Overviewpage
