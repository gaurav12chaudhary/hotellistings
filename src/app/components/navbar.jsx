"use client"

import React, { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className='flex justify-between text-[#a7b0b1] text-sm'>

                <div className='flex justify-center cursor-pointer  py-3 px-6  gap-5'>
                    <div className='flex flex-col  border-none'>
                        <select className=' '>
                            <option>En</option>
                            <option>Bn</option>
                            <option>Ab</option>
                        </select>
                    </div>
                    <div className='flex flex-col  border-none'>
                        <select className=' '>
                            <option>USD</option>
                            <option>EURO</option>
                            <option>BDT</option>
                        </select>
                    </div>
                    <svg className='text-sm' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>

                <div className='flex align-middle justify-center cursor-pointer  py-3 px-6  gap-5'>
                    <p>+1 2345678900</p>
                    <p>Sign IN</p>
                    <p>Register</p>
                </div>
            </div>

            <div className='w-[100%] mx-auto py-10 bg-white sticky top-0 z-50'>
               
                <div className='flex justify-evenly lg:hidden '>
                    <div className='px-5 w-[20%]'>
                        <button className='' onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </button>

                        <div className={`${isMenuOpen ? 'block' : 'hidden'} text-gray-400 text-2xl flex flex-col gap-5`}>
                            <ul className='cursor-pointer hover:text-red-500'>Home</ul>
                            <ul className='cursor-pointer hover:text-red-500'>How it works</ul>
                            <ul className='cursor-pointer hover:text-red-500'>Explore</ul>
                            <ul className='cursor-pointer hover:text-red-500'>Review</ul>
                            <ul className='cursor-pointer hover:text-red-500'>Blog</ul>
                            <ul className='cursor-pointer hover:text-red-500'>Contact</ul>
                        </div>
                    </div>

                    <div className='w-[60%] md:w-[40%] items-center'>
                        <h2 className='text-3xl'>List<span className='text-red-400 text-3xl'>Race</span></h2>
                    </div>

                </div>


                <div className=' hidden w-[90%] mx-auto  lg:flex justify-between align-middle   '>
                    <div>
                        <h3 className=' text-3xl font-bold '>
                            List<span className=' text-3xl font-bold text-red-500'>Race</span>
                        </h3>

                    </div>
                    <div className='flex gap-6 text-base font-poppins text-gray-400 uppercase align-middle'>
                        <ul className='cursor-pointer hover:text-red-500'>Home</ul>
                        <ul className='cursor-pointer hover:text-red-500'>How it works</ul>
                        <ul className='cursor-pointer hover:text-red-500'>Explore</ul>
                        <ul className='cursor-pointer hover:text-red-500'>Review</ul>
                        <ul className='cursor-pointer hover:text-red-500'>Blog</ul>
                        <ul className='cursor-pointer hover:text-red-500'>Contact</ul>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Navbar
