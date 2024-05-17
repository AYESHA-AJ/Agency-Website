import React from 'react'
import aboutImg from '../assets/aboutImg.png'
const About = () => {
  return (
    <div>
          <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-10'>
              <div className='w-11/12 flex flex-col md:flex-row justify-between'>
                  <div>
                      <img  src={aboutImg}></img>
                  </div>
                  <div className='md:w-3/5'>
                      <h2 className='text-neutralDGray font-semibold text-4xl mb-4 md:w-4/5 mt-8 py-6'>The unseen of spending three years at Pixelgrade</h2>
                      <p className='text-neutralDGray mb-8 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                      <button className='btn-primary'>Learn More</button>
                  </div>
              </div>
              <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-neutralSilver'>
                  <div className=' flex flex-col md:flex-row justify-between items-center gap-8'>
                      <div className='w-1/2'>
                          <h2 className='text-4xl font-semibold w-2/3'>Helping a local <br /><span className='text-brandPrimary '>business reinvent itself</span></h2>
                          <p className='text-neutralDGray'>We reached here with our hard work and dedication</p>
                      </div>
                      {/*stats */}
                      <div className='md:w-1/2 mx-auto sm:flex-row flex-col sm:items-center  justify-around flex  gap-12 '>
                          <div className='space-y-8'>
                              <div className='flex items-center gap-4'>
                                  <img src="/src/assets/Icon1.png"></img>
                                  <div>
                                      <h4 className='font-semibold text-neutralDGray text-2xl'>2,245,341</h4>
                                      <p className='text-neutralDGray font-sm'>Members</p>
                                  </div>
                              </div>
                              <div className='flex items-center gap-4 '>
                                  <img src="/src/assets/Icon3.png"></img>
                                  <div>
                                      <h4 className='font-semibold text-neutralDGray text-2xl'>828,867</h4>
                                      <p className='text-neutralDGray font-sm'>Event Bookings</p>
                                  </div>
                              </div>
                          </div>
                          <div className='space-y-8'>
                             
                              <div className='flex items-center gap-4 '>
                                  <img src="/src/assets/Icon2.png"></img>
                                  <div>
                                      <h4 className='font-semibold text-neutralDGray text-2xl'>46,328</h4>
                                      <p className='text-neutralDGray font-sm'>Clubs</p>
                                  </div>
                              </div>
                              <div className='flex items-center gap-4'>
                                  <img src="/src/assets/Icon4.png"></img>
                                  <div>
                                      <h4 className='font-semibold text-neutralDGray text-2xl'>1,926,436</h4>
                                      <p className='text-neutralDGray font-sm'>Paymentts</p>
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

export default About
