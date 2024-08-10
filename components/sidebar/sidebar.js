'use client'
import Image from 'next/image'
import React from 'react'
import SidebarItem from './sidebar-item'
import { FiHome, FiDatabase, FiSearch } from "react-icons/fi"

const routes = [
    {
        icon: <FiHome />,
        label: "Home",
        href: "/"
    },
    {
        icon: <FiDatabase />,
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: <FiSearch />,
        label: "Browse",
        href: "/search"
    }
]

const Sidebar = () => {
    return (
        <div className='flex h-full lg:w-[256px] lg:fixed
        left-0 top-0 border-r-2 flex-col 
        '>
            <div className='pt-8 pl-4 pb-7 flex items-center'>
                <Image
                    src="/logo.png"
                    alt='logo'
                    width={80}
                    height={80}
                />
                <h1 className='text-xl font-extrabold tracking-wide'>Hive</h1>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
                {routes.map((route) => (
                    <SidebarItem 
                        key={route.label} 
                        label={route.label} 
                        href={route.href} 
                        icon={route.icon} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
