import React from 'react'
import { IoCodeOutline } from 'react-icons/io5'
import { IoIosMegaphone, IoMdAdd } from 'react-icons/io'
import { FiPenTool } from 'react-icons/fi'
import { FaVectorSquare } from 'react-icons/fa'

const SecondSection = () => {
  const megaphoneIcon = () => {
    return <IoIosMegaphone fontWeight='bold' />
  }
  const codeIcon = () => {
    return <IoCodeOutline fontWeight='bold' />
  }
  const penIcon = () => {
    return <FiPenTool fontWeight='bold' />
  }
  const data = [
    { title: 'Design Team', notification: 1, icon: penIcon() },
    { title: 'Marketing Team', notification: 2, icon: megaphoneIcon() },
    { title: 'Development Team', notification: 3, icon: codeIcon() },
  ]
  return (
    <div className='border-2 border-slate-100 rounded-xl'>
      {data.map((elem, i) => {
        return (
          <div
            key={i + 1}
            className='flex flex-row items-center justify-between p-2 cursor-pointer hover:bg-slate-100 rounded-xl'
          >
            <div className='flex flex-row items-center gap-2 font-semibold'>
              {elem.icon}
              <h3 className='text-sm'>{elem.title}</h3>
            </div>
            <div className='flex flex-row items-center gap-2 px-2 py-1 rounded-lg bg-slate-100 '>
              <FaVectorSquare />+{elem.notification}
            </div>
          </div>
        )
      })}
      <hr />
      <div className='flex flex-row items-center justify-start gap-2 px-2 py-1 cursor-pointer'>
        <IoMdAdd />
        <h2 className='text-slate-400'>Create A team</h2>
      </div>
    </div>
  )
}

export default SecondSection
