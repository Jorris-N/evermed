import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../../../public/images/evermed-logo.svg'


export default function WebNav() {

    const router = useRouter ();

    const navigation = {
        links: [
            {
                id: 1,
                name: 'home',
                href: '/'
            },
            {
                id: 2,
                name: 'company',
                href: '/company'
            },
            {
                id: 3,
                name: 'products',
                href: '/products'
            },
            {
                id: 4,
                name: 'R & D',
                href: '/research-and-development'
            },
            {
                id: 5,
                name: 'contact',
                href: '/contact'
            }
          
        ]

    }

  return (
    <div className=''>
        <div className='py-6 lg:flex justify-between items-center lg:w-10/12 px-6 mx-auto hidden'>
        <div className='items-center'>
                <Link href={'/'} className=''>
                    <Image src={Logo} alt="" width={160} height={160}/>
                </Link>

            </div>
            <div className='flex space-x-8 items-center'>
                <nav className='flex items-center space-x-8 items-center'>
                    {navigation.links.map((item)=>(
                        <Link href={item.href} key={item.id} className={router.pathname == item.href ? "text-[#1dbfc1] capitalize font-normal" : "hover:text-[#1dbfc1] ease-in-out duration-300 text-slate-600 capitalize font-normal"}>{item.name}</Link>
                    ))}
                </nav>
                <Link href={"tel://+2547123456789"} target={'_blank'} className='bg-[#1dbfc1] border rounded-full py-2.5 px-8 text-white text-[15px] hover:bg-transparent hover:border hover:border-[#1dbfc1] hover:text-[#1dbfc1] ease-in-out duration-300'>
                    +254 7123 456 789
                </Link>
            </div>
        </div>
    </div>
  )
}