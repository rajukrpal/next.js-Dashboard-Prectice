

"use client"
import { contect, document, network, tag } from '@/images/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiExport } from "react-icons/ci";
import ChartLine from './ChartLine';
import ChartAverage from './ChartAverage'
import ApexChart from './ApexChart'
import ApexChartCoulm from './ApexChartCoulm'
import GeoChart from './GeoChart'
import VolumeChart from './VolumeChart'
import TopProducts from './TopProducts'


const Dashboard = () => {
  return (
    <>
      <div className='overflow-y-scroll h-[90vh]'>
        {/* First */}
        <div className='xl:grid grid-cols-12 gap-3 px-8  '>
          <div className=' col-span-7 p-4'>
            <div className='py-4 flex justify-between items-center'>
              <div>
                <h1 className='font-bold text-lg'>
                  Today’s Sales
                </h1>
                <h5 className='text-gray-400 text-sm mb-4'>Sales Summary</h5>
              </div>
              <div>
                <button className='border border-gray-400 px-4 py-2 flex items-center gap-2 rounded-lg'> <CiExport />Export</button>
              </div>
            </div>
            <div className='grid grid-cols-12 gap-6'>
              <div className='xl:col-span-3 md:col-span-6 col-span-12 p-4 flex flex-col rounded-xl bg-[#FFE2E5]'>
                <Image src={network} alt="Network Icon" className='mb-2' />
                <h1 className='text-2xl font-bold mb-1'>$ 1k</h1>
                <p className='text-gray-500 mb-2'>Total Sales</p>
                <Link href={'/#'} className='text-blue-500 hover:underline text-sm'>
                  +8% from yesterday
                </Link>
              </div>
              <div className='xl:col-span-3 md:col-span-6 col-span-12 p-4 flex flex-col rounded-xl bg-[#FFF4DE]'>
                <Image src={document} alt="Network Icon" className='mb-2' />
                <h1 className='text-2xl font-bold mb-1'>300</h1>
                <p className='text-gray-500 mb-2'>Total Order</p>
                <Link href={'/#'} className='text-blue-500 hover:underline text-sm'>
                  +5% from yesterday
                </Link>
              </div>
              <div className='xl:col-span-3 md:col-span-6 col-span-12 p-4 flex flex-col rounded-xl bg-[#DCFCE7]'>
                <Image src={tag} alt="Network Icon" className='mb-2' />
                <h1 className='text-2xl font-bold mb-1'>5</h1>
                <p className='text-gray-500 mb-2'>Product Sold</p>
                <Link href={'/#'} className='text-blue-500 hover:underline text-sm'>
                  +1,2% from yesterday
                </Link>
              </div>
              <div className='xl:col-span-3 md:col-span-6 col-span-12 p-4 flex flex-col rounded-xl bg-[#F3E8FF]'>
                <Image src={contect} alt="Network Icon" className='mb-2' />
                <h1 className='text-2xl font-bold mb-1'>5</h1>
                <p className='text-gray-500 mb-2'>New Customers</p>
                <Link href={'/#'} className='text-blue-500 hover:underline text-sm'>
                  0,5% from yesterday
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-5 border border-gray-300 rounded-lg'>
            <ChartLine />
          </div>
        </div>
        {/* second */}
        <div className='grid grid-cols-12 gap-6 px-8 my-5'>
          <div className='xl:col-span-5 col-span-12 rounded-lg border border-gray-200'>
            <ChartAverage />
          </div>
          <div className='xl:col-span-3 col-span-12 rounded-lg border border-gray-200'>
            <ApexChart />
          </div>
          <div className='xl:col-span-4 col-span-12 rounded-lg border border-gray-200'>
            <ApexChartCoulm />
          </div>
        </div>
        {/* therd */}
        <div className='grid grid-cols-12 gap-6 px-8 py-5'>
          <div className='xl:col-span-5 col-span-12 rounded-lg border border-gray-200'>
            <TopProducts />
          </div>
          <div className='xl:col-span-4 col-span-12 rounded-lg border border-gray-200'>
            <GeoChart />
          </div>
          <div className='xl:col-span-3 col-span-12 rounded-lg border border-gray-200'>
            <VolumeChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
