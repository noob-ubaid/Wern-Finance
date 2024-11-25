import { div } from 'framer-motion/client';
import React from 'react'

const Review = () => {
    const reviews = [
        {
          image: "hadid.png",
          name: "Hadid Khan",
          commitment:
            "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
          status: "UI/UX Designer",
        },
        {
          image: "wade.png",
          name: "Wade Warren",
          commitment:
            "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
          status: "Web Designer",
        },
        {
          image: "wilson.png",
          name: "Jenny Wilson",
          commitment:
            "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
          status: "Trust Administrator",
        },
      ];
  return (
    <section>
        <div className='flex items-center flex-col lg:flex-row mt-10 md:mt-16 lg:mt-24 gap-14 pb-10 justify-between max-w-[1240px] mx-auto'>
            {
                reviews.map((data,index) => (
                    <div key={index} className='md:w-[392px] w-full  md:gap-0 px-7 my-auto h-[360px] space-y-8 bg-[#27322F3D] rounded-md'>
                        <img className='pt-10' src="qutation.png" alt="" />
                        <p>{data.commitment}</p>
                        <div className='flex items-center gap-3'>
                            <img src={data.image} alt="" />
                            <div className='flex flex-col gap-2'>
                                <p>{data.name}</p>
                                <p>{data.status}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Review