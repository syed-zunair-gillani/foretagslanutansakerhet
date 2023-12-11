import React from 'react'
import Container from '../container'

const Steps = ({data:{homePagedata}}) => {
  return (
    <>
     <Container className="relative">
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
               {
                    homePagedata?.homePage?.featureCard?.map((s,idx)=>(
                         <div key={idx} className='bg-gray-100 p-6 border z-10 border-primary'>
                              <h3 className='font-semibold text-secondary'>{s.title}</h3>
                              <p className='mt-2 text-sm'>{s.info}</p>
                         </div>
                    ))
               }
          </div>
          <div className='pt-[1px] hidden md:block w-[90%] bottom-1/2 absolute left-1/2  -translate-x-1/2 bg-primary'/>
     </Container>
    </>
  )
}

export default Steps