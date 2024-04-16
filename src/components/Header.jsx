import React from 'react'
import Logo from '../assets/coding-svgrepo-com.svg'
const Header = () => {
  return (
    <>
    <div className='flex justify-between p-2 font-[poppins] items-center bg-slate-400'>
        <img src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" alt="" width={50} className='rounded-2xl'/>
        <div className='flex '>
            <p className='me-3 font-semibold'>Home</p>
            <p className='me-3 font-semibold'>Projects</p>
            <p className='me-3 font-semibold'>Skills</p>
        </div>
        <button className='text-white rounded-xl bg-slate-800 p-2'>Contact Me</button>
        
    </div>
    </>
  )
}

export default Header