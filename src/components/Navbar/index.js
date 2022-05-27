import React, { useState } from 'react'
import DesktopMenu from '../DesktopMenu'
import MobileMenu from '../MobileMenu'

export default function Navbar () {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <DesktopMenu />
      <MobileMenu sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  )
}
