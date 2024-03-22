import React, { useState } from 'react'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'

const Button = ({ icon, title, opacity, dropdown, color }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      {!dropdown ? (
        <div
          style={{ opacity: `${opacity}%`, color: color || 'black' }}
          className='flex items-center gap-1 px-2 py-1 border-2 rounded-md cursor-pointer border-slate-200'
        >
          {icon}
          <h2 className='text-sm lg:text-md'>{title}</h2>
        </div>
      ) : (
        <div
          onClick={() => setClicked(!clicked)}
          style={{ opacity: `${opacity}%`, color: color || 'black' }}
          className='relative flex items-center px-2 py-1 border-2 rounded-md cursor-pointer border-slate-200'
        >
          {icon}
          <h2 className='text-sm lg:text-md '>{title}</h2>
          {clicked ? (
            <MdArrowDropUp className='' />
          ) : (
            <MdArrowDropDown className='' />
          )}
        </div>
      )}
    </div>
  )
}

export default Button
