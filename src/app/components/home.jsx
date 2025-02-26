import React from 'react'
import Image from 'next/image'

function Homesection() {
  return (
    <div className='w-[100%]'
      style={{
        backgroundImage: "url(/images/banner.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-[90%] mx-auto flex flex-col py-[100px]'>
        <div className='flex flex-col '>
          <h2 className='w-[75%]  mx-auto text-center text-white text-[24px] lg:text-[48px] font-bold uppercase'>best place to find and explore
            that all you need</h2>
          <p className='text-center text-white text-xl font-bold mt-8'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
        </div>

        <div className='mt-[75px] flex lg:w-[90%] justify-between flex-col w-[100%] items-center xl:flex-row'>

          <div className='lg:w-[75%] py-6 lg:px-5 lg:flex lg:flex-row align-middle gap-5 lg:gap-0  px-0 w-[100%] flex flex-col xl:w-[100%]'>

            <div className='flex  bg-white justify-between  p-10 xl:w-[50%] '>
              <div className='flex  flex-col gap-5 text-center w-[90%] lg:flex-row'>
                <h3 className='text-xl font-normal capitalize '>What?</h3>
                <form className='text-[#859098] '>
                  <input type='text' placeholder='Ex:Palace,Restaurant,Food,Automobile' />
                </form>
              </div>

              <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </div>

            <div className='flex gap-6 bg-white justify-between  p-10 xl:w-[50%]'>
              <div className='flex  flex-col gap-5 text-center w-[90%] lg:flex-row'>
                <h3 className='text-xl font-normal capitalize '>Location</h3>
                <form className=''>
                  <input type='text' placeholder='Ex:London,NewYork,Rome' />
                </form>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12" /><line x1="19" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="5" /><line x1="12" x2="12" y1="19" y2="22" /><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /></svg>
            </div>

          </div>

          <div className='lg:w-[15%] w-[30%] flex py-6 px-4 align-middle bg-red-400  xl:p-10'>
            <button className='flex justify-center gap-4 mx-auto text-white'>Search<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></span></button>
          </div>

        </div>

      </div>

      <div className='w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid  lg:grid-cols-3 lg:gap-5 bg-white xl:bg-transparent xl:grid-cols-5  '>
        <div className='lg:w-[90%] w-[50%] text-center items-center hover:bg-red-400 hover:text-white cursor-pointer flex flex-col gap-2  py-10 px-5 bg-white lg:relative lg:bottom-12 xl:static'>
          <Image src="/images/restaurant.png" alt='Restaurant' width={25} height={25} />
          <h3 className='text-lg'>Restaurant</h3>
          <p className='text-[#859098] text-base hover:text-white'>150 Listings</p>
        </div>

        <div className=' lg:w-[90%] w-[50%] text-center items-center hover:bg-red-400 hover:text-white cursor-pointer flex flex-col gap-2 bg-white  py-10 px-5 lg:relative lg:bottom-12 xl:static'>
          <Image src="/images/travel-bag.png" alt='Restaurant' width={25} height={25} />
          <h3 className='text-lg'>Destination</h3>
          <p className='text-[#859098] text-base hover:text-white'>214 Listings</p>
        </div>

        <div className=' lg:w-[90%] w-[50%] text-center items-center hover:bg-red-400 hover:text-white cursor-pointer flex flex-col gap-2 bg-white py-10 px-5 lg:relative lg:bottom-12 xl:static'>
          <Image src="/images/hotel.png" alt='Restaurant' width={25} height={25} />
          <h3 className='text-lg'>Hotels</h3>
          <p className='text-[#859098] text-base hover:text-white'>185 Listings</p>
        </div>

        <div className='lg:w-[90%] w-[50%] text-center items-center hover:bg-red-400 hover:text-white cursor-pointer flex flex-col gap-2 bg-white py-10 px-5 '>
          <Image src="/images/medicine.png" alt='Restaurant' width={25} height={25} />
          <h3 className='text-lg'>Healthcare</h3>
          <p className='text-[#859098] text-base hover:text-white'>200 Listings</p>
        </div>

        <div className='lg:w-[90%] w-[50%] text-center items-center hover:bg-red-400 hover:text-white cursor-pointer flex flex-col gap-2 bg-white py-10 px-5 '>
          <Image src="/images/car.png" alt='Restaurant' width={25} height={25} />
          <h3 className='text-lg'>Automotion</h3>
          <p className='text-[#859098] text-base hover:text-white'>120 Listings</p>
        </div>

      </div>


    </div>
  )
}

export default Homesection
