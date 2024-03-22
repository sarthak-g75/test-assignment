import React, { useState } from 'react'
import { FaRegFolder, FaRegFolderOpen } from 'react-icons/fa'
import { MdArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'

const Folder = ({ name, subFolder }) => {
  const [clicked, setClicked] = useState(false)

  const toggleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div className='flex flex-col gap-2  cursor-pointer  '>
      <div
        onClick={toggleClicked}
        className='flex hover:bg-slate-100 rounded-lg flex-row gap-2 px-6 py-2 items-center justify-between'
      >
        <div className='flex items-center gap-2'>
          <FaRegFolder />
          <h2 className='font-semibold'>{name}</h2>
        </div>
        {clicked ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />}
      </div>

      {clicked &&
        subFolder.map((elem, i) => {
          return (
            <div
              className='px-10'
              key={i + 1}
            >
              <div className='flex flex-row items-center gap-2'>
                <FaRegFolderOpen />
                <h2>{elem}</h2>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Folder
