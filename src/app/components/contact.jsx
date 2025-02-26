import React from 'react'

function Contact() {
  return (
    <div className='py-[100px] '>
      <div className='w-[90%] mx-auto'>
        <h2 className='uppercase mb-5 text-center text-[18px]'>do you want to add your business listing with us?</h2>
        <p className='mt-10 text-center font-medium text-[16px]  text-[#7b8088]'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
        <div className='flex flex-col justify-center align-middle py-12  lg:flex-row'>
          <form className='w-[100%] flex flex-col gap-3 items-center   py-5 px-2 lg:flex-row lg:w-[70%] lg:mx-auto '>
            <input className='lg:w-[60%] border-1 text-[20px] outline-none pl-[30px]' type='email' placeholder='Enter your email here' />
            <button className='w-[50%] text-2xl py-5 px-2 capitalize text-center bg-red-400 text-white cursor-pointer lg:w-[25%]'>create account</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contact
