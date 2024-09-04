// import { admin,notification, search, us } from '@/images/images'
// import Image from 'next/image'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className=' flex justify-between items-center w-full py-3 px-5'>
//       <div>
//         <h1 className='text-2xl font-semibold'>Dashboard</h1>
//       </div>
//       <div className='relative w-72'>
//         <Image className='absolute top-1/2 left-3 transform -translate-y-1/2' src={search} alt='search' height={20} width={20} />
//         <input
//           className='py-2 pl-10 pr-3 bg-[#F9FAFB] rounded-lg w-full'
//           placeholder='Search here...'
//           type="text"
//         />
//       </div>

//       <div className='flex gap-5 items-center'>
//         <div>
//           <div className='flex gap-2 items-center'>
//             <Image className='rounded-full' src={us} alt='us' width={30} height={30} />
//             <span className='font-semibold'>Eng (US) </span>

//           </div>
//         </div>
//         <div>
//           <div className='flex gap-5'>
//             <Image src={notification} alt='notification' height={30} width={30} />
//             <Image src={admin} alt='notification' height={50} width={50} />
//             <div className='text-sm'>
//               <h1>Musfiq</h1>
//               <h1 className='text-gray-500'>Admin</h1>
//             </div>

//           </div>
//         </div>

       
//       </div>

//     </div>
//   )
// }

// export default Navbar

import { admin, notification, search, us } from '@/images/images';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center w-full py-3 px-5'>
      <div className='mb-3 sm:mb-0'>
        <h1 className='text-xl sm:text-2xl font-semibold'>Dashboard</h1>
      </div>

      <div className='relative w-full sm:w-72 mb-3 sm:mb-0'>
        <Image
          className='absolute top-1/2 left-3 transform -translate-y-1/2'
          src={search}
          alt='search'
          height={20}
          width={20}
        />
        <input
          className='py-2 pl-10 pr-3 bg-[#F9FAFB] rounded-lg w-full'
          placeholder='Search here...'
          type='text'
        />
      </div>

      <div className='flex gap-3 sm:gap-5 items-center'>
        <div className='flex items-center gap-2'>
          <Image className='rounded-full' src={us} alt='us' width={30} height={30} />
          <span className='font-semibold text-sm sm:text-base'>Eng (US)</span>
        </div>

        <div className='flex gap-3 sm:gap-5 items-center'>
          <Image src={notification} alt='notification' height={30} width={30} />
          <div className='flex items-center gap-2'>
            <Image src={admin} alt='admin' height={40} width={40} className='rounded-full' />
            <div className='text-sm'>
              <h1 className='font-semibold'>RAJU</h1>
              <h1 className='text-gray-500'>Admin</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
