import React from 'react'
import { Button } from '@nextui-org/react'
const Find = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-between md:mx-auto lg:mt-36 md:mt-20 mt-16 lg:flex-row-reverse px-4 md:px-0 w-full max-w-[1200px]'>

        <div className='md:w-1/2 w-full'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold font-mplus1'>Find the Perfect Card for You</h2>
            <p className='text-[16px] pt-6 text-[#ADB2B1] font-mplus1 lg:w-[546px] w-full'>Unlocking the Power of Crypto, Both Virtually and Physically
            Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</p>
            <Button className='flex mt-6 items-center gap-4 ' variant='solid' color='primary' radius='full'>
                Learn more
            </Button>
        </div>

        <div className='md:w-1/2 mt-14 md:mt-0 w-full'>
            <img src="hero3.png" alt="" />
        </div>

      </div>  
    </section>
  )
}

export default Find