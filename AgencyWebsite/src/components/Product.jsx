import React from 'react'
import { Link } from 'react-scroll'

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
                      <p className='text-neutralDGray md:w-3/4 mb-8 text-sm'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                      <button className='btn-primary'>Learn More</button>
                  </div>
              </div>
              <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-8 '>
                      <div className='md:w-1/3'>
                          <img src="/src/assets/maec.png"></img>
                      </div>
                      <div className=' md:w-2/3'>
                          <div>
                          <p className='text-neutralGrey md:w-4/5 text-sm font-semibold mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                          </div>
                          <h5 className='text-brandPrimary font-semibold text-xl mb-2'>Tim Smith</h5>
                          <p className='text-neutralGrey text-sm mb-4'>British Dragon Boat Racing Association</p>
                          <div>
                              <div className='flex justify-between'>
                                  <img src="/src/assets/company1.png"></img>
                                  <img src="/src/assets/company2.png"></img>
                                  <img src="/src/assets/company3.png"></img>
                                  <img src="/src/assets/company4.png"></img>
                                  <img src="/src/assets/company5.png"></img>
                                  <img src="/src/assets/company6.png"></img>
                                  <div className='flex items-center justify-around'>
                                      <Link className='text-brandPrimary font-bold hover:text-neutral-700' href="/">Meet all customers</Link>
                                      <img className="inline-block ml-2 pt-2 "src="/src/assets/Right.png"></img>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  
              </div>
      </div>
    </div>
  )
}

export default Product
