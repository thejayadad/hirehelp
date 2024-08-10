import Sidebar from '@/components/sidebar/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <div className='hidden lg:flex'>
            <Sidebar />          
        </div>
        <main className='lg:pl-[256px] h-full pt-[50px] lg:pt-0'>
        <div className='h-full max-w-[1056px] mx-auto pt-6'>
        {children}
           </div>
        </main>
  
    </>
  )
}

export default layout