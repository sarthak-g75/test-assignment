import React from 'react'

const TopCompanyName = () => {
  return (
    <div className='flex flex-row items-center justify-between p-2 border-2 border-slate-100 rounded-xl'>
      <div className='flex items-center gap-1'>
        <div className=''>
          <img
            className='object-cover w-10 h-10 '
            src='/main_logo.png'
            alt='main logo'
          />
        </div>
        <div className='flex flex-col '>
          <h2 className='opacity-65'>ING</h2>
          <h1 className='text-xl font-semibold'>InnovateHub</h1>
        </div>
      </div>
      <img
        className='object-cover w-10 h-10 rounded-full'
        src='/pfp.jpg'
        alt='profile image'
      />
    </div>
  )
}

export default TopCompanyName
