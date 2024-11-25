import React from 'react'

const Offer = () => {
    const offerList = [
        {
            description:"Cardano, simplified. The debit card that makes crypto spending easy.",
            icon: "/dollar.png",
            title: "Cardano Debit Cards",
        },
        {
            description: "Fiat meets crypto, effortlessly buy, sell, and manage.",
            icon: "/link.png",
            title: "On & Off Ramp",
        },
        {
            description:"Empowering businesses with effortless crypto payments and seamless fiat solutions.",
            icon: "/hand.png",
            title: "Solutions for business",
        },
    ];
  return (
    <section className='lg:mt-36 md:mt-20 mt-8 lg:w-[1200px] xl:w-[1300px] mx-auto px-6 '>
        <div>
            <h2 className='text-center font-bold font-mplus1 text-2xl md:text-3xl lg:text-4xl'>What do we offer?</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-6 space-y-6 lg:gap-6 xl:gap-12'>
            {
                offerList.map((item, index) => (
                    <div key={index} className='flex items-center gap-3'>
                        <img src={item.icon} alt="" />

                        <div className='flex flex-col'>
                            <h3 className='font-mplus1 font-medium text-2xl'>{item.title}</h3>
                            <p className='text-[16px] font-mplus1 text-[#ADB2B1]'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Offer