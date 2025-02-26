import React from 'react'

function Works() {
    return (
        <div className='w-[90%] mx-auto py-20'>
            <h2 className='text-3xl uppercase text-center mb-4 '>how it works</h2>
            <p className='text-xl text-[#859098] text-center mt-10'>Learn More about how our website works</p>

            <div className='grid grid-cols-1 gap-10 pt-14  mx-auto md:w-[60%] lg:grid-cols-2 lg:w-[90%] xl:grid-cols-3'>
                <div className='text-center border-2 px-10 py-8 hover:bg-red-400 hover:text-white'>
                    <div className='flex justify-center bg-gray-200 hover:bg-white hover:text-red-400 rounded-full w-[20%] mx-auto py-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                    </div>
                    <h2 className='mt-10 mb-5 text-xl font-medium capitalize '>choose what to do</h2>
                    <p className='w-[75%] mx-auto text-lg text-[#859098] hover:text-white mb-8'>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.</p>
                    <button className='text-[#859098] hover:text-red-400 hover:bg-white text-base px-7 py-3 border-2 rounded-lg'>Read More</button>
                </div>
                <div className='text-center border-2 px-10 py-8 hover:bg-red-400 hover:text-white'>
                    <div className='flex justify-center bg-gray-200 hover:bg-white hover:text-red-400
                     rounded-full w-[20%] mx-auto py-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boom-box"><path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M8 8v1" /><path d="M12 8v1" /><path d="M16 8v1" /><rect width="20" height="12" x="2" y="9" rx="2" /><circle cx="8" cy="15" r="2" /><circle cx="16" cy="15" r="2" /></svg>
                    </div>
                    <h2 className='mt-10 mb-5 text-xl font-medium capitalize  '>find what you want</h2>
                    <p className='w-[75%] mx-auto text-lg text-[#859098] hover:text-white mb-8'>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.</p>
                    <button className='text-[#859098] hover:text-red-400 hover:bg-white  text-base px-7 py-3 border-2'>Read More</button>
                </div>
                <div className='text-center border-2 px-10 py-8 hover:bg-red-400 hover:text-white'>
                    <div className='flex justify-center bg-gray-200 hover:bg-white hover:text-red-400 rounded-full w-[20%] mx-auto py-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" /><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" /><path d="M18 22v-3" /><circle cx="10" cy="10" r="3" /></svg>
                    </div>
                    <h2 className='mt-10 mb-5 text-xl font-medium capitalize'>explore amazing place</h2>
                    <p className='w-[75%] mx-auto text-lg text-[#859098] hover:text-white mb-8'>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.</p>
                    <button className='text-[#859098] hover:text-red-400 hover:bg-white  text-base px-7 py-3 border-2'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Works
