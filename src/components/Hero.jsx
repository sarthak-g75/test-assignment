import React, { useState } from 'react'
import TopBar from './hero/TopBar'
import { IoMdAdd } from 'react-icons/io'
import BottomBar from './hero/BottomBar'
import SecondSection from './hero/SecondSection'
import { rowData } from '../../data'
const Hero = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [rows, setRows] = useState(rowData)

  const handleSelectAll = () => {
    const updatedRows = rows.map((row) => ({ ...row, selected: !selectAll }))
    setRows(updatedRows)
    setSelectAll(!selectAll)
  }

  const handleRowSelect = (id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, selected: !row.selected } : row
    )
    setRows(updatedRows)
    setSelectAll(updatedRows.every((row) => row.selected))
  }

  const selectedRowNumbers = rows
    .filter((row) => row.selected)
    .map((row) => row.id)

  return (
    <div className='flex flex-col justify-between lg:w-full md:w-[70%] w-screen py-2 border-2 rounded-lg shadow-md border-slate-100 overflow-hidden'>
      <div className='flex flex-col justify-center gap-4'>
        <TopBar />
        <hr />
        <SecondSection />
        <div className='w-full px-2 overflow-x-scroll example'>
          <div className='grid  grid-cols-7 w-[200%] border md:grid-cols-7 lg:w-full border-slate-100'>
            <div className='flex items-center justify-between w-full gap-2 p-2 font-semibold border border-slate-100 bg-slate-100'>
              <div className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={selectAll}
                  className='w-4 h-4 text-black rounded form-checkbox focus:bg-black'
                  onChange={handleSelectAll}
                />
                Brand
              </div>
              <IoMdAdd />
            </div>
            <div className='p-2 font-semibold border border-slate-300 bg-slate-100'>
              Description
            </div>
            <div className='p-2 font-semibold border border-slate-300 bg-slate-100'>
              Members
            </div>
            <div className='p-2 font-semibold border border-slate-300 bg-slate-100'>
              Categories
            </div>
            <div className='p-2 font-semibold border border-slate-300 bg-slate-100'>
              Tags
            </div>
            <div className='p-2 font-semibold border border-slate-300 bg-slate-100'>
              Next Meeting
            </div>
            <div className='w-full p-2 font-semibold border border-slate-300 bg-slate-100'>
              <IoMdAdd />
            </div>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                <div className='flex items-center gap-2 p-2 border border-slate-100'>
                  <input
                    type='checkbox'
                    checked={row.selected || false}
                    onChange={() => handleRowSelect(row.id)}
                  />
                  {row.brand}
                </div>
                <div className='p-2 border border-slate-100'>
                  {row.description}
                </div>
                <div className='flex items-center px-4 py-2 border border-slate-100 '>
                  {row.members.map((memberUrl, index) => (
                    <img
                      key={index}
                      src={memberUrl}
                      alt={`Member ${index + 1}`}
                      className='object-cover w-6 h-6 -ml-3 border-2 border-white rounded-full lg:w-8 lg:h-8'
                      style={{ zIndex: row.members.length - index }}
                    />
                  ))}
                </div>
                <div className='flex px-2 border border-slate-100 '>
                  <div className='flex flex-col items-center justify-center h-full gap-2 lg:flex-row '>
                    {row.categories.map((category, index) => (
                      <span
                        style={{
                          background: `${category.color}35`,
                          border: `solid 1px ${category.color}80`,
                          color: `${category.color}`, // Set the text color to 100% opacity
                        }}
                        className='px-2 text-sm font-bold rounded-lg w-max '
                        key={index}
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='items-center p-2 overflow-x-scroll border example border-slate-100'>
                  <div className='flex items-center h-full gap-2 w-max '>
                    {row.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-2 text-sm bg-gray-100 border-2 border-gray-200 rounded-lg w-max '
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex items-center p-2 border border-slate-100'>
                  <span
                    style={{
                      background: `${row.nextMeeting.color}35`,
                      border: `solid 1px ${row.nextMeeting.color}80`,
                      color: `${row.nextMeeting.color}`, // Set the text color to 100% opacity
                    }}
                    className='px-2 text-sm font-bold rounded-lg w-max '
                  >
                    {row.nextMeeting.title}
                  </span>
                </div>
                <div className='p-2 border border-slate-100'></div>{' '}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <BottomBar selected={selectedRowNumbers.length} />
    </div>
  )
}

export default Hero
