'use client'
import React, { useState } from 'react';
import {FiMenu, FiX}  from "react-icons/fi"
import Sidebar from '../sidebar/sidebar';


const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-full border-2 hover:shadow-md bg-primary p-2 text-transparent cursor-pointer'>
        {isOpen ? (
          <FiX className="h-4 w-4 text-secondary" />
        ) : (
          <FiMenu className="h-4 w-4 text-secondary" />
        )}
        </div>
        {/* Sidebar Info */}
        <div
        className={`fixed top-0 right-0 h-full bg-neutral-100 w-[256px] transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
      >
        <div className="h-full">
            <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar