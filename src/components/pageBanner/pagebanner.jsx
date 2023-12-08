import React from 'react'
import Container from '../container'

const Pagebanner = ({title,info}) => {
  return (
    <div className='bg-primary pt-20'>
     <Container className="py-12">
          <h1 className='text-white font-bold text-3xl'>{title}</h1>
          <p className='text-white text-lg mt-3'>{info}</p>
     </Container>
    </div>
  )
}

export default Pagebanner