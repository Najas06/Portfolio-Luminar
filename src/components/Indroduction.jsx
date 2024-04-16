import React from 'react'
import Photo from '../assets/passport size.jpg'
// import '../index.css'

const Indroduction = () => {
  return (
    <>
    <div className='flex justify-evenly items-center '>
        <div> 
            <h1 className='font-bold text-4xl mb-3'>I'M <span className='text-blue-500'>Najas Nazar</span> </h1>
            <p className='text-3xl mb-4'>MEARN Stack Developer</p>
            <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
  <p class="z-10">Connect Me</p>
</button>
        </div>
        <div>
            <img src={Photo} alt="" width={450}/>
        </div>
    </div>
    </>
  )
}

export default Indroduction