import React from 'react'

const Skill = () => {
    return (
        <>
            <div className='flex justify-evenly mt-[100px]'>
                <div
                    class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
                >
                    <div
                        class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
                    >
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" alt=""  className='p-2 rounded-2xl'/>
                        <h4 className='text-center'>React</h4>
                        </div>
                    </div>
                    <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                </div>
                <div
                    class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
                >
                    <div
                        class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
                    >
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vhtduqyJenzBGpJg5x2icg46efIAeK7AtyL5uskqMQ&s" alt=""  className='p-2 rounded-2xl'/>
                        <h4 className='text-center'>Node.js</h4>
                        </div>
                    </div>
                    <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                </div>
                <div
                    class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
                >
                    <div
                        class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
                    >
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s" alt=""  className='p-2 rounded-2xl'/>
                        <h4 className='text-center'>Tailwindcss</h4>
                        </div>
                    </div>
                    <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                </div>
                <div
                    class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
                >
                    <div
                        class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
                    >
                        <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZ0Gy068hsbTG6MVcSBE11zBx4gRtcPgk3p5kdZnrbg&s" alt=""  className='p-2 rounded-2xl'/>
                        <h4 className='text-center'>JavaScript</h4>
                        </div>
                    </div>
                    <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                </div>
            </div>
        </>
    )
}

export default Skill