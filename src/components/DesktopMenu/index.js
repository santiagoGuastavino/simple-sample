import React from 'react'
import Title from '../Title'

export default function DesktopMenu () {
  return (
    <>
      <Title />
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </>
  )
}
