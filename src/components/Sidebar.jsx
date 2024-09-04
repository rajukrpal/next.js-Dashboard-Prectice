

// "use client"
// import { usePathname } from 'next/navigation';
// import { logo, Logo2 } from '@/images/images';
// import Image from 'next/image';
// import React from 'react';
// import { MdDashboard } from "react-icons/md";
// import { IoStatsChart } from "react-icons/io5";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { CiShoppingCart } from "react-icons/ci";
// import { FaChartLine } from "react-icons/fa6";
// import { RiMessage2Line } from "react-icons/ri";
// import { IoSettingsOutline } from "react-icons/io5";
// import { CiLogin } from "react-icons/ci";

// const sidebarMenu = [
//     {
//         icon: <MdDashboard size={20} />,
//         menuName: "Dashboard",
//         route: "/",
//     },
//     {
//         icon: <IoStatsChart size={20} />,
//         menuName: "Leaderboard",
//         route: "/leaderboard",
//     },
//     {
//         icon: <CiShoppingCart size={20} />,
//         menuName: "Order",
//         route: "/order",
//     },
//     {
//         icon: <MdOutlineShoppingBag size={20} />,
//         menuName: "Products",
//         route: "/products",
//     },
//     {
//         icon: <FaChartLine size={20} />,
//         menuName: "Report",
//         route: "/report",
//     },
//     {
//         icon: <RiMessage2Line size={20} />,
//         menuName: "Messages",
//         route: "/messages",
//     },
//     {
//         icon: <IoSettingsOutline size={20} />,
//         menuName: "Settings",
//         route: "/settings",
//     },
//     {
//         icon: <CiLogin size={20} />,
//         menuName: "Sign Out",
//         route: "/logout",
//     },
// ];

// const Sidebar = () => {
//     const pathname = usePathname();

//     return (
//         <div className=''>
//             <div className='flex gap-5 px-10 py-5 items-center'>
//                 <Image src={logo} alt='logo' height={40} width={40} />
//                 <h1 className='text-xl font-semibold'>Dabang</h1>
//             </div>
//             <div className='py-3 px-10'>
//                 <ul className='space-y-4'>
//                     {
//                         sidebarMenu.map((menu, i) => (
//                             <li
//                                 key={i}
//                                 className={`flex items-center gap-5 py-3 px-2 rounded-lg text-gray-400 hover:bg-[#5D5FEF] hover:text-white ${pathname === menu.route ? 'bg-[#5D5FEF] text-white' : ''}`}
//                                 onClick={() => router.push(menu.route)}
//                             >
//                                 <span>{menu.icon}</span>
//                                 {menu.menuName}
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//             <div className='flex justify-center text-center mx-10 relative z-5 overflow-hidden'>
//                 <div className='h-48 w-48 top-[-110px] absolute rotate-[120deg] bg-gradient-to-l from-[rgba(255,255,255,0.30)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0)] bottom-[-40px] left-[50px] rounded-full z-0 '></div>
//                 <div className='bg-[#5D5FEF] py-4 rounded-lg '>
//                     <div className='flex justify-center py-2'>
//                         <Image className='' src={Logo2} height={40} />
//                     </div>
//                     <div className='px-8'>
//                         <h2 className='text-xl text-white font-semibold py-1 '>Dabang Pro</h2>
//                         <p className='text-white text-sm py-4'>Get access to all features on tetumbas</p>
//                     </div>
//                     <div className='w-32 h-32 absolute rotate-[120deg] bg-gradient-to-r from-[rgba(255,255,255,0.30)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0)] bottom-[-40px] left-[-60px] rounded-full z-0 '></div>
//                     <button className='px-5 py-2 z-30 text-[#5D5FEF] font-semibold bg-white rounded-lg'>Get Pro</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar;


"use client";
import { usePathname } from 'next/navigation';
import { logo, Logo2 } from '@/images/images';
import Image from 'next/image';
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

const sidebarMenu = [
    {
        icon: <MdDashboard size={20} />,
        menuName: "Dashboard",
        route: "/",
    },
    {
        icon: <IoStatsChart size={20} />,
        menuName: "Leaderboard",
        route: "/leaderboard",
    },
    {
        icon: <CiShoppingCart size={20} />,
        menuName: "Order",
        route: "/order",
    },
    {
        icon: <MdOutlineShoppingBag size={20} />,
        menuName: "Products",
        route: "/products",
    },
    {
        icon: <FaChartLine size={20} />,
        menuName: "Report",
        route: "/report",
    },
    {
        icon: <RiMessage2Line size={20} />,
        menuName: "Messages",
        route: "/messages",
    },
    {
        icon: <IoSettingsOutline size={20} />,
        menuName: "Settings",
        route: "/settings",
    },
    {
        icon: <CiLogin size={20} />,
        menuName: "Sign Out",
        route: "/logout",
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className='w-16 md:w-20 lg:w-64 transition-all duration-300'>
            <div className='flex items-center justify-center md:justify-start px-5 py-5'>
                <Image src={logo} alt='logo' height={40} width={40} />
                <h1 className='text-xl font-semibold hidden lg:block ml-2'>PROJECT</h1>
            </div>
            <div className='py-3 md:px-5 px-2 flex items-center justify-center'>
                <ul className='space-y-4'>
                    {sidebarMenu.map((menu, i) => (
                        <li
                            key={i}
                            className={`flex items-center gap-5 py-3 px-2 rounded-lg text-gray-400 hover:bg-[#5D5FEF] hover:text-white ${pathname === menu.route ? 'bg-[#5D5FEF] text-white' : ''
                                }`}
                            onClick={() => router.push(menu.route)}
                        >
                            <span>{menu.icon}</span>
                            <span className='hidden lg:block'>{menu.menuName}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=' lg:flex hidden justify-center text-center mx-5 relative z-5 overflow-hidden'>
                <div className='h-48 w-48 top-[-110px] absolute rotate-[120deg] bg-gradient-to-l from-[rgba(255,255,255,0.30)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0)] bottom-[-40px] left-[50px] rounded-full z-0'></div>
                <div className='bg-[#5D5FEF] py-4 rounded-lg w-full'>
                    <div className='flex justify-center py-2'>
                        <Image src={Logo2} height={40} alt='Logo' />
                    </div>
                    <div className='px-8 hidden lg:block'>
                        <h2 className='text-xl text-white font-semibold py-1'>Project Pro</h2>
                        <p className='text-white text-sm py-4'>Get access to all features on tetumbas</p>
                    </div>
                    <div className='w-32 h-32 absolute rotate-[120deg] bg-gradient-to-r from-[rgba(255,255,255,0.30)] via-[rgba(255,255,255,0.10)] to-[rgba(255,255,255,0)] bottom-[-40px] left-[-60px] rounded-full z-0'></div>
                    <div className='flex justify-center'>

                        <button className='px-5 py-2 z-30 text-[#5D5FEF] font-semibold bg-white rounded-lg hidden lg:block'>Get Pro</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
