'use client'
import { Button } from '@/components/ui/button'
import { Link, Plus } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export const Header = () => {
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [path])
    return (
        <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
            <div className='flex gap-12 items-center'>
                <Image src={'./logo.svg'} width={150} height={150} alt='logo' />
                <ul className='hidden md:flex gap-10 items-center'>
                    {/* <Link href='/'>
                        <li className={`hover:text-primary font-medium text-sm cursor-pointer ${path ==='/' ? 'text-primary':''}`}>For Sale</li>
                    </Link> */}
                    <li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path =='/'&&'text-primary'}`}>
                        <a href={'/'}>For Sale</a>
                        {/* <Link href={'/'}>For Sale</Link> */}
                    </li>
                    <li className='hover:text-primary font-medium text-sm cursor-pointer'>
                        <a href="/rent">For Rent</a>
                    </li>
                    <li className='hover:text-primary font-medium text-sm cursor-pointer'>
                        <a href="/agents">Agent Finder</a>
                    </li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <Button className='flex gap-2'><Plus/>Post Your Ad</Button>
                <Button variant='outline'>Login</Button>
            </div>


        </div >
    )
}
