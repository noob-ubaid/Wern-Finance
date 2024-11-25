import React from 'react'
import { Button } from '@nextui-org/react'
const Card = () => {
  return (
    <section>
      <div className='flex items-center flex-col lg:mt-36 md:mt-20 mt-16 lg:flex-row px-4 md:mx-auto justify-between w-full max-w-[1200px]'>

        <div className='md:w-1/2 w-full'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-mplus1'>Wern Debit Card</h2>
            <p className='text-[16px] pt-6 text-[#ADB2B1] font-mplus1 lg:w-[424px] w-full'>More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
            <Button className='flex mt-6 items-center gap-4 ' variant='solid' color='primary' radius='full'>
                <span>Create New Card</span>
                <i class="fa-solid fa-arrow-right"></i>
            </Button>
            <p className='text-[#772AB3] pt-1 font-bold font-mplus1 text-[16px]'>Will be available soon</p>
        </div>

        <div className='md:w-1/2 mt-14 md:mt-0 w-full'>
            <img src="hero2.png" alt="" />
        </div>

      </div>  
    </section>
  )
}

export default Card