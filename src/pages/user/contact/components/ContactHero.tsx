import React from 'react'
import leatherImage from '../../../../assets/images/contactimage.png'
const ContactHero:React.FC = () => {
  return (
    <div
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8)),url(${leatherImage})`, // Replace with your image path
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
     className='min-h-[24rem]  w-full '>
       <div className='w-full h-[24rem]  flex justify-center items-center'>
        <h1 className='text-white text-5xl font-bold '>CONTACT US</h1>
       </div>
    </div>
  )
}

export default ContactHero
