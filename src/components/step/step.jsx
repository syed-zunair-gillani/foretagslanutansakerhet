import React from 'react'
import Container from '../container'

const Steps = () => {
  return (
    <>
     <Container className="relative">
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
               {
                    data.map((s,idx)=>(
                         <div key={idx} className='bg-gray-100 p-6 border z-10 border-primary'>
                              <h3 className='font-semibold'>{s.title}</h3>
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



const data =[
     {
          title: "WHAT IS AN UNSECURED BUSINESS LOAN?",
          info: "You do not have to pledge materials or other property, but a personal guarantee may be required."
     },
     {
          title: "CAN I GET A BUSINESS LOAN WITHOUT COLLATERAL?",
          info: "You can get loans without collateral and without a personal guarantee from several lenders. "
     },
     {
          title: "WHAT INTEREST RATE DO I GET ON BUSINESS LOANS?",
          info: "The interest rates on business loans vary between different lenders. Some lenders set an individual interest rate according to your company's credit score, other lenders have a fixed interest rate. "
     },
     {
          title: "WHEN WILL I RECEIVE THE BUSINESS LOAN?",
          info: "Unsecured business loans can take a little longer to be paid out as the lender needs to assess a little more whether the loan can be repaid. Usually, you get an unsecured business loan disbursed within 1-5 banking days. "
     }
]