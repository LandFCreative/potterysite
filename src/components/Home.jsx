import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name="home" className='w-fill h-screen bg-[#0A192f]'>

{/* container */}
<div className='max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full'>
<p className='text-yellow-400 pt-12 md:pt-16'>Hi My name is</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Christine Deneschuk</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer.
 Designer. Potter.</h2>
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