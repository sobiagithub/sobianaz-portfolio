import React from 'react'

interface propsType{
    title:string;
}

const Headings :React.FC<propsType> = (title) => {
  return (
    <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2'></p>

    </div>
  )
}

export default Headings