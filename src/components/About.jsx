import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
                    About   
                </p>
            </div>
            <div></div>
            </div>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Christine. Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. When designing projects, I try to incorporate my values and visions into the pieces and projects. My primary work values are: communication, equity, authenticity, creativity/play, and freedom.</p>
              <p>I also enjoy the textile side of life. I make journals, t-shirts and pottery as well. All pieces available on my Etsy site under my company name Lost and Found Creative.</p>  
            </div>
          </div>
      </div>
    </div>

  )
}

export default About