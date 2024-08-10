import React from 'react'

const SideBox = ({children}) => {
  return (
    <div className='hidden lg:block w-[368px] sticky self-end bottom-6'>
        <div className='min-h-[calc(100vh-48px)] sticky top- flex flex-col gap-4'>
            {children}
        </div>
    </div>
  )
}

export default SideBox