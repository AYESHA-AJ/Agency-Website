import React from 'react'
import { Link } from 'react-scroll'
const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
          <div className='lg:w-2/5 flex justify-center items-center mx-auto'>
          <div className='text-center'>
                  <h2 className=' font-semibold text-neutral-800 lg:text-5xl text-3xl  mb-6 lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h2>
                  <div className='items-center justify-center text-center '> 
              <button className='btn-primary gap-2 '>
                  Get a demo <img className="pt-1 inline-block text-white"src="/src/assets/whiteRight.png"/>
              </button>
</div>
          </div>
          
        </div>
    </div>
  )
}

export default Newsletter
