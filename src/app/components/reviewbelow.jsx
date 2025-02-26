import React from 'react'

function Reviewbelow() {
    return (
        <div className='' style={{
            backgroundImage: 'url(/images/counter-banner.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }}>
            <div className='w-[90%] mx-auto py-[100px] '>
                <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4 '>
                    <div className='text-center text-white'>
                        <h2 className='text-[40px]  mb-2'>90 <span className='ml-1 text-5xl'>k+</span></h2>
                        <p className='text-[18px]'>Listings</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='text-[40px] mb-2'>40 <span className='ml-1 text-5xl'>k+</span></h2>
                        <p className='text-[18px] '>Listing categories</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='text-[40px]  mb-2'>65 <span className='ml-1 text-5xl'>k+</span></h2>
                        <p className='text-[18px]'>Visitors</p>
                    </div>
                    <div className='text-center text-white'>
                        <h2 className='text-[40px] font-semibold  mb-2'>50 <span className='ml-1 font-semibold text-5xl'>k+</span></h2>
                        <p className='text-[18px] font-bold '>Happy Clients</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Reviewbelow
