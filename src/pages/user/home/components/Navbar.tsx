import React from 'react'
// import logo from '../../../../assets/images/logo.png';
import { FiPhoneCall } from 'react-icons/fi';
import { NavbarMenu } from '../subComponents';
import { IoIosMenu } from 'react-icons/io';

const Navbar:React.FC = () => {

  
  return (
    <div className='text-black flex justify-between items-center py-5 w-full lg:px-24 px-4'>

            <div className='block md:hidden bg-blue-600 p-2 rounded-md'>
            <IoIosMenu  color='white'/>
            </div>


    <div>
     <h1 className='text-red-500 font-bold text-5xl'>LEO</h1>
     <p className='font-semibold text-gray-500'>VINYLS</p>
    </div>

   <NavbarMenu/>
   
    <div className='flex items-center gap-2'>
       <div className='bg-blue-400/30 h-12 aspect-square  rounded-full flex items-center justify-center '>
            {/* <BiPhoneCall/> */}
            <FiPhoneCall />
            
       </div>
       <div className='lg:block hidden'>
          <h1 className='text-gray-700'>Hotline 24/7</h1>
           <h1 className=''>+91-181-2651732</h1>
       </div>
    </div>
  </div>
  )
}

export default Navbar
