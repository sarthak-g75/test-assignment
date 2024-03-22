import React from 'react'
import { IoMdChatboxes, IoMdSettings, IoIosSearch } from 'react-icons/io'
const TopBar = () => {
  return (
    <div className='flex items-center justify-between w-full gap-1 lg:px-4 '>
      <h1 className='text-lg font-semibold lg:text-2xl'>Products</h1>
      <div className='flex gap-2'>
        <div className='flex items-center gap-1 px-2 border-2 rounded-lg border-slate-100'>
          <IoIosSearch className='text-lg lg:text-xl' />
          <input
            className='px-2 border-none'
            type='text'
            placeholder='Search'
          />
        </div>
        <button className='p-1 border-2 rounded-md border-slate-100'>
          <IoMdChatboxes className='text-lg lg:text-xl' />
        </button>
        <button className='p-1 border-2 rounded-md border-slate-100'>
          <IoMdSettings className='text-lg lg:text-xl' />
        </button>
      </div>
    </div>
  )
}

export default TopBar
