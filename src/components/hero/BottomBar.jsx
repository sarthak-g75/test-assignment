import React, { useState } from 'react'
import { IoArchiveOutline, IoTrashBinOutline } from 'react-icons/io5'
import { ImCross } from 'react-icons/im'
import Button from './Button'

const BottomBar = ({ selected }) => {
  const DeleteIcon = () => {
    return <IoTrashBinOutline />
  }

  const ArchiveIcon = () => {
    return <IoArchiveOutline />
  }

  const buttonData = [
    { icon: ArchiveIcon(), title: 'Archive', opacity: 100, dropdown: false },
    {
      icon: DeleteIcon(),
      title: 'Delete',
      opacity: 100,
      color: 'red',
      dropdown: false,
    },
    { title: 'More', opacity: 100, dropdown: true },
  ]

  return (
    <div className='flex flex-row items-center justify-center lg:w-full '>
      <div className='flex items-center gap-3 p-1 rounded-lg lg:px-2 lg:py-2 bg-slate-100'>
        <div className='flex gap-2'>
          <span className='px-1 text-sm text-white bg-black rounded-md lg:text-md'>
            {selected}
          </span>{' '}
          <span className='text-sm font-semibold lg:text-md'>selected</span>
        </div>
        {buttonData.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            title={button.title}
            dropdown={button.dropdown}
            opacity={button.opacity}
            color={button.color}
          />
        ))}
        <ImCross className='cursor-pointer opacity-40' />
      </div>
    </div>
  )
}

export default BottomBar
