import React from 'react'
import {
  AiOutlineClose,
  AiOutlineMenu
} from 'react-icons/ai'
import Title from '../Title'

export default function MobileMenu ({ sidebar, setSidebar }) {
  const handleClick = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <div onClick={handleClick} className='block md:hidden'>
        { sidebar
          ? <AiOutlineClose size={20} />
          : <AiOutlineMenu size={20} />
        }
      </div>
      <div
        className={
          sidebar
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-200'
            : 'fixed left-[-100%]'
        }
      >
        <Title customStyles='m-4 mt-8' />
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </>
  )
}
