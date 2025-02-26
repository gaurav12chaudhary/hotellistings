import React from 'react'

function Footer() {
    return (
        <div className='pb-[100px]'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col justify-between border-b-2 lg:flex-row'>
                    <div className='text-5xl py-10'>
                        <h3>List<span className='text-red-400 '>Race</span></h3>
                    </div>
                    <div className='py-10 grid grid-cols-4 md:grid-cols-6 gap-6 text-[14px] font-poppins text-gray-400 uppercase lg-gap-0 '>
                        <ul className='cursor-pointer hover:text-red-400'>Explore</ul>
                        <ul className='cursor-pointer hover:text-red-400'>Review</ul>
                        <ul className='cursor-pointer hover:text-red-400'>Blog</ul>
                        <ul className='cursor-pointer hover:text-red-400'>Contact</ul>
                        <ul className='cursor-pointer hover:text-red-400'>My Account</ul>
                    </div>

                </div>

                <div className='flex flex-col justify-between gap-5 py-14 lg:flex-row '>
                    <div>
                        <p className='text-2xl text-[#859098] lg:w-[75%] xl:w-[100%]'>© copyright. designed and developed by themesine</p>
                    </div>
                    <div className='  flex justify-evenly text-xl text-[#859098] lg:w-[55%]'>
                        <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>+1 (222) 777 8888 </p>
                        <svg className='bg-gray-100 rounded-full  text-xl' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        <svg className='bg-gray-100 rounded-full  text-xl' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        <svg className='bg-gray-100 rounded-full  text-xl' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
