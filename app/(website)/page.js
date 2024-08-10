import FeedBox from '@/components/box/feedbox'
import SideBox from '@/components/box/sidebox'
import TopHeader from '@/components/box/top-header'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex  gap-[48px] px-6'>
       <FeedBox>
       <div>
        <div flex flex-col >
          <TopHeader
          title={'The Talent Hive'}
          desctiption={'A place to find the best talent'}
          />
        </div>
          </div>
      <div className='space-y-4'>
      <div className='h-[300px] bg-green-200' />
              <div className='h-[300px] bg-green-200' />
              <div className='h-[300px] bg-green-200' />
              <div className='h-[300px] bg-green-200' />        
      </div>
      </FeedBox>
      <SideBox>
        SideBox
      </SideBox>
    </div>
  )
}

export default HomePage