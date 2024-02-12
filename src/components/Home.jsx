import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";


const Home = () => {
  return (
    <div name="home" className='w-fill h-screen bg-[#0A192f]'>

{/* container */}
<div className='flex flex-col justify-center items-center w-full h-full'>
<div>

          <p className='text-yellow-400 pt-12 md:pt-16'>Hi My name is</p>   
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Christine.
          </h1>
          <p className='text-yellow-400 pt-12 md:pt-16'>I am a</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>

            <TypeAnimation
              sequence={[
                "Web Developer.",
                1000,
                "Designer.",
                1000,
                "Potter.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          </div>
<p className='text-[#8892b0] py-4 max-w-[700px]'>This is a multi-medium portfolio with a focus on pottery. I have included some of my ai work (coming soon) and graphic design work here as well. You will find I have a seperate portfolio dedicated to my full stack developer projects. I specializing in building and designing exceptional digital experiences. Please head over there if that interests you.</p>
<p className='text-[#ccd6f6] py-4 max-w-[700px]'>Don't tell me about your reality. Tell me about your dreams.</p>



<div>
    <button className='text-white rounded-lg group border-2 px-6 py-3 my-2 flex items-center  hover:border-yellow-400'>
    <a href='/design'>View Work</a>

        <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3 '/>
        </span>
        
    </button>
</div>
</div>


    </div>
  )
}

export default Home