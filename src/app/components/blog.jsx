import React from 'react'
import Image from 'next/image'

function Blog() {
    return (
        <div className='py-[100px]'>
            <div className='w-[90%] mx-auto'>
                <div>
                    <h2 className='text-center text-4xl font-medium mb-10  uppercase'>news and articles</h2>
                    <p className='text-center text-2xl mb-10 mt-5 text-[#859098]'>Always upto date with our latest News and Articles</p>
                </div>

                <div className='grid grid-cols-1 gap-5 md:w-[60%] md:mx-auto lg:w-[90%] lg:grid-cols-2 xl:grid-cols-3'>

                    <div className='border-2'>
                        <div className='w-[100%] '>
                            <Image className='rounded-sm w-[100%]' alt='monument' src='/images/b1.jpg' width={350} height={250} />
                        </div>
                        <div className='p-5 '>
                            <h5 className='w-[70%] px-auto mb-2 text-2xl'>How to find your Desired Place more quickly</h5>
                            <div className='flex justify-between w-[80%] text-[#859098] text-base'>
                                <p className='capitalize '>posted by<span className='text-black ml-2 uppercase text-base'>admin</span> </p>
                                <p className='capitalize'>march 2045</p>
                            </div>
                            <p className='w-[80%] text-base text-[#859098] mt-5'>Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className='border-2'>
                        <div className='w-[100%] '>
                            <Image className='rounded-sm w-[100%]' alt='monument' src='/images/b2.jpg' width={350} height={250} />
                        </div>
                        <div className='p-5 '>
                            <h5 className='w-[70%] px-auto mb-2 text-2xl'>How to find your Desired Place more quickly</h5>
                            <div className='flex justify-between w-[80%] text-[#859098] text-base'>
                                <p className='capitalize '>posted by<span className='text-black ml-2 uppercase text-base'>admin</span> </p>
                                <p className='capitalize'>march 2045</p>
                            </div>
                            <p className='w-[80%] text-base text-[#859098] mt-5'>Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className='border-2'>
                        <div className='w-[100%] '>
                            <Image className='rounded-sm w-[100%]' alt='monument' src='/images/b3.jpg' width={350} height={250} />
                        </div>
                        <div className='p-5 '>
                            <h5 className='w-[70%] px-auto mb-2 text-2xl'>How to find your Desired Place more quickly</h5>
                            <div className='flex justify-between w-[80%] text-[#859098] text-base'>
                                <p className='capitalize '>posted by<span className='text-black ml-2 uppercase text-base'>admin</span> </p>
                                <p className='capitalize'>march 2045</p>
                            </div>
                            <p className='w-[80%] text-base text-[#859098] mt-5'>Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Blog
