import React from 'react'

const Product = () => {
  return (
    <div>
          <div className='product'>
          <div className='w-11/12 flex flex-col md:flex-row justify-between my-12'>
                  <div>
                      <img  src="/src/assets/pana.png"></img>
                  </div>
                  <div className='md:w-3/5'>
                      <h2 className='text-neutralDGray font-semibold text-4xl mb-4 md:w-4/5  py-6'>How to design your site footer like we did</h2>
                      <p className='text-neutralDGray mb-8 text-sm'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                      <button className='btn-primary'>Learn More</button>
                  </div>
              </div>
              
      </div>
    </div>
  )
}

export default Product
