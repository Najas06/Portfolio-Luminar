import React from 'react'
import Photo1 from '../assets/1.png'
import Photo2 from '../assets/2.png'
import Photo3 from '../assets/3.png'
import Photo4 from '../assets/4.png'

const Projects = () => {
    return (
        <>
            <h2 className='mt-5 text-4xl font-bold text-center underline'>Projects</h2>
            <div className='flex mt-[100px] justify-evenly'>
                <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                        <img src={Photo1} alt="" className='mt-6' />
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Brain Wave
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <a href="https://brain-wave-talwind.vercel.app/">
                            <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Visit
                            </button>
                        </a>
                    </div>
                </div>

                <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                        <img src={Photo2} alt="" className='mt-6' />
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Nike Landing
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <a href="https://nike-tailwindcss-react.vercel.app/">
                            <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Visit
                            </button>
                        </a>
                    </div>
                </div>

                <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                        <img src={Photo3} alt="" className='mt-6' />
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Promptopia
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <a href="https://next-js-promptopia-pi.vercel.app/">
                            <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Visit
                            </button>
                        </a>
                    </div>
                </div>

                <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                        <img src={Photo4} alt="" className='mt-6' />
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            TinkerSpace
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                        </p>
                    </div>
                    <div class="p-6 pt-0">
                        <a href="https://tinker-space-login-ui.vercel.app/">
                            <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Visit
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects