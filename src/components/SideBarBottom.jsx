import React from 'react'
import { MdPersonAdd } from 'react-icons/md'
import { IoMdHelpCircleOutline } from 'react-icons/io'
const SideBarBottom = () => {
  return (
    <div className='flex flex-col w-full gap-4 p-2'>
      <div className='flex flex-row items-center gap-2 cursor-pointer'>
        <MdPersonAdd className='text-2xl' />
        <h2 className='text-md'>Invite teammates</h2>
      </div>
      <div className='flex flex-row items-center gap-2 cursor-pointer'>
        <IoMdHelpCircleOutline className='text-2xl' />
        <h2 className='text-md'>Help and first steps</h2>
      </div>

      <div className='flex items-center justify-between px-2 py-2 rounded-lg bg-slate-100'>
        <div className='flex items-center gap-2'>
          <h3 className='p-1 text-xs bg-white text-nowrap lg:text-sm w-max'>
            7
          </h3>
          <h2>days left on trial</h2>
        </div>
        <button className='p-1 px-2 text-white bg-black rounded-lg w-max lg:text-md'>
          Add Billing
        </button>
      </div>
    </div>
  )
}

export default SideBarBottom
