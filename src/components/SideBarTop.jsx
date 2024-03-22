import React from 'react'
import TopCompanyName from './sidebar/TopCompanyName'
import SecondSection from './sidebar/SecondSection'
import FolderSection from './sidebar/FolderSection'

const SideBarTop = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <TopCompanyName />
      <SecondSection />
      <FolderSection />
    </div>
  )
}

export default SideBarTop
