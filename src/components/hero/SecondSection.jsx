import React from 'react'
import Button from './Button'
import { MdDensitySmall } from 'react-icons/md'
import { CiSquarePlus } from 'react-icons/ci'
import { GrSort } from 'react-icons/gr'
import { TbDatabaseImport } from 'react-icons/tb'
import { IoFilterOutline } from 'react-icons/io5'
const SecondSection = () => {
  const ImportIcon = () => {
    return <TbDatabaseImport />
  }
  const PlusIcon = () => {
    return <CiSquarePlus />
  }
  const FilterIcon = () => {
    return <IoFilterOutline />
  }
  const SortIcon = () => {
    return <GrSort />
  }
  const AllIcon = () => {
    return <MdDensitySmall />
  }
  const buttonData = [
    { icon: AllIcon(), title: 'All Brands', dropdown: true, opacity: 100 },
    { title: 'Desk', dropdown: true, opacity: 100 },
    { title: 'Tags', dropdown: true, opacity: 100 },
    { icon: SortIcon(), title: 'Sort', dropdown: false, opacity: 40 },
    { icon: FilterIcon(), title: 'Filter', dropdown: false, opacity: 40 },
  ]
  const otherButtonData = [
    { icon: PlusIcon(), title: 'Meeting', dropdown: false, opacity: 100 },
    {
      icon: ImportIcon(),
      title: 'Import / Export',
      dropdown: false,
      opacity: 100,
    },
  ]
  return (
    <div className='flex flex-col justify-start gap-2 px-2 lg:px-8 lg:items-center lg:justify-between lg:flex-row '>
      <div className='overflow-x-scroll lg:overflow-auto example'>
        <div className='flex items-center gap-2 w-max '>
          {buttonData.map((button, index) => (
            <Button
              key={index}
              icon={button.icon}
              title={button.title}
              dropdown={button.dropdown}
              opacity={button.opacity}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {otherButtonData.map((button, index) => (
          <Button
            key={index}
            icon={button.icon}
            title={button.title}
            dropdown={button.dropdown}
            opacity={button.opacity}
          />
        ))}
      </div>
    </div>
  )
}

export default SecondSection
