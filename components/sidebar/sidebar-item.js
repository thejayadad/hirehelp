'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SidebarItem = ({ label, href, icon }) => {
    const pathname = usePathname()
    const active = pathname === href
    
    return (
        <Link
            className={`h-[52px] justify-start flex items-center ${active ? 'bg-secondary/10 border-l-4 border-r-4 border-primary' : ''}`}
            href={href}
        >
            <div className='flex items-center gap-x-2 text-sm font-[500] pl-5 transition-all'>
                <span>{icon}</span>
                <span>{label}</span>
            </div>
        </Link>
    )
}

export default SidebarItem
