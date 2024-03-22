import React from 'react'
import SideBarBottom from './SideBarBottom'
import SideBarTop from './SideBarTop'

const Sidebar = () => {
  return (
    <div className='lg:w-[20%] md:w-[30%] w-screen'>
      <div className='flex flex-col justify-between h-screen p-2 border-2 rounded-lg shadow-md lg:h-full md:h-full border-slate-100'>
        <SideBarTop />
        <SideBarBottom />
      </div>
    </div>
  )
}

export default Sidebar
