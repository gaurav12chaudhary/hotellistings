import React from 'react'
import Image from 'next/image'

function Explore() {
    return (
        <div className='py-[100px]'>
            <div className=' w-[90%] mx-auto'>
                <h2 className='uppercase text-center text-5xl mb-[30px] '>explore</h2>
                <p className='text-center text-2xl text-[#859098] mt-[20px] mb-[80px]'>Explore New place, food, culture around the world and many more</p>

                <div className='grid grid-cols-1 gap-8  md:w-[60%] mx-auto lg:w-[90%] lg:grid-cols-2 xl:grid-cols-3'>

                    <div className='border-2 flex flex-col '>
                        <div className=''
                        >
                            <Image className='w-[100%]' src="/images/e1.jpg" alt='Bar' width={350} height={250} />
                        </div>
                        <div className='pl-[15px] py-[25px] pr-[25px]' >
                            <h3 className='text-2xl '>Tommy Hilfinger Bar</h3>
                            <div className='mt-3'>
                                <div className='flex gap-2 align-middle text-sm text-[#859098]'>
                                    <p className='px-2  rounded-sm bg-sky-300 text-white font-semibold'>5.0</p>
                                    <p>10 Ratings |</p>
                                    <p>Form <span className='text-red-400'> 5$-300$ </span>|</p>
                                    <p className=''>Restaurant</p>
                                </div>

                            </div>
                            <div className='flex mt-5 gap-3  mb-5 '>
                                <Image className='w-[40px] h-[40px]' alt='person' src="/images/person.png" width={40} height={40} />
                                <p className='text-[#859098] text-sm w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                            </div>
                            <div className='flex justify-between border-t-2 py-3'>
                                <p className='text-sm text-red-400'>Close Now</p>
                                <div className='flex text-base gap-5 align-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col '>
                        <div className='' >
                            <Image className='w-[100%]' src="/images/e2.jpg" alt='Bar' width={350} height={250} />
                        </div>
                        <div className='pl-[15px] py-[25px] pr-[25px]' >
                            <h3 className='text-2xl capitalize'>swim and dine resort</h3>
                            <div className='mt-3'>
                                <div className='flex gap-2 align-middle text-sm text-[#859098]'>
                                    <p className='px-2  rounded-sm bg-green-400 text-white font-semibold'>4.5</p>
                                    <p>8 Ratings |</p>
                                    <p>Form <span className='text-red-400'> 50$-500$ </span>|</p>
                                    <p className=''>Hotel</p>
                                </div>

                            </div>
                            <div className='flex mt-5 gap-3  mb-5 '>
                                <Image className='w-[40px] h-[40px]' alt='person' src="/images/person.png" width={40} height={40} />
                                <p className='text-[#859098] text-sm w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                            </div>
                            <div className='flex justify-between border-t-2 py-3'>
                                <p className='text-sm text-green-400'>Open Now</p>
                                <div className='flex text-base gap-5 align-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col '>
                        <div className=''
                        >
                            <Image className='w-[100%]' src="/images/e3.jpg" alt='Bar' width={350} height={250} />
                        </div>
                        <div className='pl-[15px] py-[25px] pr-[25px]' >
                            <h3 className='text-2xl capitalize'>europe tour</h3>
                            <div className='mt-3'>
                                <div className='flex gap-2 align-middle text-sm text-[#859098]'>
                                    <p className='px-2  rounded-sm bg-yellow-300 text-white font-semibold'>5.0</p>
                                    <p>15 Ratings |</p>
                                    <p>Form <span className='text-red-400'> 5k$-10k$ </span>|</p>
                                    <p className=''>Destination</p>
                                </div>

                            </div>
                            <div className='flex mt-5 gap-3  mb-5 '>
                                <Image className='w-[40px] h-[40px]' alt='person' src="/images/person.png" width={40} height={40} />
                                <p className='text-[#859098] text-sm w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                            </div>
                            <div className='flex justify-between border-t-2 py-3'>
                                <p className='text-sm text-red-400'>Close Now</p>
                                <div className='flex text-base gap-5 align-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col'>
                        <div className='' >
                            <Image className='w-[100%]' src="/images/e4.jpg" alt='Bar' width={350} height={250} />
                        </div>
                        <div className='pl-[15px] py-[25px] pr-[25px]' >
                            <h3 className='text-2xl capitalize'>bungalow with swimming pool</h3>
                            <div className='mt-3'>
                                <div className='flex gap-2 align-middle text-sm text-[#859098]'>
                                    <p className='px-2  rounded-sm bg-purple-400 text-white font-semibold'>5.0</p>
                                    <p>10 Ratings |</p>
                                    <p>Form <span className='text-red-400'> 10k$-15k$ </span>|</p>
                                    <p className=''>Real Estate</p>
                                </div>

                            </div>
                            <div className='flex mt-5 gap-3  mb-5 '>
                                <Image className='w-[40px] h-[40px]' alt='person' src="/images/person.png" width={40} height={40} />
                                <p className='text-[#859098] text-sm w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                            </div>
                            <div className='flex justify-between border-t-2 py-3'>
                                <p className='text-sm text-red-400'>Close Now</p>
                                <div className='flex text-base gap-5 align-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col '>
                        <div className='' >
                            <Image className='w-[100%]' src="/images/e5.jpg" alt='Bar' width={350} height={250} />
                        </div>
                        <div className='pl-[15px] py-[25px] pr-[25px]' >
                            <h3 className='text-2xl capitalize'>vintage car expo</h3>
                            <div className='mt-3'>
                                <div className='flex gap-2 align-middle text-sm text-[#859098]'>
                                    <p className='px-2  rounded-sm bg-green-400 text-white font-semibold'>4.2</p>
                                    <p>8 Ratings |</p>
                                    <p>Form <span className='text-red-400'> 500$-1200$ </span>|</p>
                                    <p className=''>Automation</p>
                                </div>

                            </div>
                            <div className='flex mt-5 gap-3  mb-5 '>
                                <Image className='w-[40px] h-[40px]' alt='person' src="/images/person.png" width={40} height={40} />
                                <p className='text-[#859098] text-sm w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                            </div>
                            <div className='flex justify-between border-t-2 py-3'>
                                <p className='text-sm text-green-400 cursor-pointer'>Open Now</p>
                                <div className='flex text-base gap-5 align-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-2 flex flex-col '>
                        <div className='' >
                            <Image className='w-[100%]' src="/images/e6.jpg" alt='Bar' width={350} height={250} />
                        </div>
                        <div className='pl-[15px] py-[25px] pr-[25px]' >
                            <h3 className='text-2xl capitalize'>thailand tour</h3>
                            <div className='mt-3'>
                                <div className='flex gap-2 align-middle text-sm text-[#859098]'>
                                    <p className='px-2  rounded-sm bg-orange-400 text-white font-semibold'>5.0</p>
                                    <p>15 Ratings |</p>
                                    <p>Form <span className='text-red-400'> 5k$-10k$ </span>|</p>
                                    <p className=''>Destination</p>
                                </div>

                            </div>
                            <div className='flex mt-5 gap-3  mb-5 '>
                                <Image className='w-[40px] h-[40px]' alt='person' src="/images/person.png" width={40} height={40} />
                                <p className='text-[#859098] text-sm w-[70%] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....</p>
                            </div>
                            <div className='flex justify-between border-t-2 py-3'>
                                <p className='text-sm text-red-400'>Close Now</p>
                                <div className='flex text-base gap-5 align-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Explore
