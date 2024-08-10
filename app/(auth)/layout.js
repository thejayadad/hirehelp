import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        {children}
    </div>
  )
}

export default layout