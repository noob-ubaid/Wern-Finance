import { Button } from '@nextui-org/react'
import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='flex flex-col-reverse mt-6 md:mt-10 pb-6 mx-4 md:mx-14 lg:mx-20 lg:mt-12 md:flex-row gap-6 md:gap-8 lg:gap-12 items-center'>
            <div className='w-full md:w-1/2 md:mt-0 mt-6'>
                <h2 className='font-mplus1 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:text-left text-center'>Spend your Cardano anywhere, anytime.</h2>
                <p className='text-lg py-6 text-center md:text-left font-mplus1 text-[#ADB2B1]'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
                <div className='flex items-center justify-center md:justify-start'>
                    <Button className='flex items-center gap-4 ' variant='solid' color='primary' radius='full'>
                        <span>Get Started</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </Button>
                </div>
            </div>

            <div className='w-full md:w-1/2'>
                <img src="/hero.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero