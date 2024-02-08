import React from 'react'

const Contact = () => {
 
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/f5d0f224-a36f-4f18-adc8-ad440ca19dea" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - deneschukc@gmail.com</p>
                </div>
                <input name='name' className='bg-white p-2 rounded-sm' type="text" placeholder='Name'  />
                <input name='email'  className='my-4 p-2 bg-white rounded-sm' type="email" placeholder='Email' />
                <textarea name="message" className='bg-white p-2 rounded-sm'  rows="5" placeholder='Message'></textarea>
                {/* <input type="hidden" name="_gotcha" style="display:none !important"></input> */}
                <button className='text-white border-2 hover:bg-yellow-400  rounded-lg hover:border-yellow-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        
            </form>
        </div>
  )
}

export default Contact