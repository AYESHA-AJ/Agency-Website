import React from 'react'

const Services = () => {


  const services = [
    { id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/membership.png" },
    { id: 2, title: "National Associations ", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/associations.png" },
    { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/groups.png" },
    
  ]


  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
          <div className='text-center'>
              <h2 className='text-neutralDGray font-semibold text-4xl mb-2'>Our Clients</h2>
              <p className='text-neutralDGray'>We have been working with some Fortune 500+ clients</p>
          </div>
          <div className='flex gap-8 justify-between my-12 items-center'>
              <img src="/src/assets/company1.png"></img>
              <img src="/src/assets/company2.png"></img>
              <img src="/src/assets/company3.png"></img>
              <img src="/src/assets/company4.png"></img>
              <img src="/src/assets/company5.png"></img>
              <img src="/src/assets/company6.png"></img>
          </div>
          {/* service card */}
          <div className='text-center text-neutralDGray mt-20 md:w-1/2 mx-auto'>
              <h2 className='font-semibold text-4xl'>Manage your entire community in a single system</h2>
              <p className='mt-6'>Who is Nextcent suitable for?</p>
      </div>
      <div>

      </div >
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto '>
      {
        services.map(service => <div key={service.id} className='hover:border-b-4 hover:border-indigo-700 transition-all duration-300 text-center flex items-center justify-center h-full md:w-[300px] px-4 py-8 rounded-md shadow cursor-pointer md:h-80 mx-auto'>
          <div>
         <div className="rounded-tl-3xl mb-4 bg-[#E8F5E9] rounded-br-3xl h-14 w-14 mx-auto"> <img src={service.image} ></img></div>
          <h2 className='text-neutralDGray font-semibold text-2xl mb-2 px-2'>{service.title}</h2>
            <p className='text-neutralDGray text-sm'>{service.description}</p>
            </div>
        </div>)
        }
        </div>
    </div>
  )
}

export default Services
