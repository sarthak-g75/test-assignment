import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import Folder from './Folder'
const FolderSection = () => {
  const subFolder = ['Sub1', 'Sub2', 'Sub3']
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row justify-between px-2'>
        <h2 className='opacity-65'>FOLDERS</h2>
        <div className='opacity-65'>
          <IoMdAdd />
        </div>
      </div>
      <Folder
        name='Hello'
        subFolder={subFolder}
      />
      <Folder
        name='Hello'
        subFolder={subFolder}
      />
      <Folder
        name='Hello'
        subFolder={subFolder}
      />
    </div>
  )
}

export default FolderSection
