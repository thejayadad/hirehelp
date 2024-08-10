import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'

const TopHeader = ({title, desctiption}) => {
  return (
    <div className='sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-2 text-neutral-500 lg:z-50'>
        <Link href="/events">
            <Button
            variant='light'
            >
         <h1 className='font-bold text-lg'>{title}</h1>
         </Button>
          </Link>
          <div>
            {desctiption}
         </div>
    </div>
  )
}
 
export default TopHeader