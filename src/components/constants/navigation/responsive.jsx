import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/images/evermed-logo.svg'

export default function Responsive() {

    const router = useRouter ();
    const [show, setShow] = useState(true);

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
    <div className='lg:hidden'>
      <div className='bg-transparent xl:hidden flex justify-between w-full px-8 py-4 items-center border-transparent sm:border-gray-200'>
            <button className="flex focus:outline-none justify-between  items-center space-x-3">
                <Link href={'/'} className=''>
                <Image src={Logo} alt="" width={100} height={80}/>
                 </Link>
            </button>
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? "flex items-center space-x-1" : "hidden"} focus:outline-none focus:ring-2 `}>
                        <svg className="text-[#1dbfc1]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">open</span> */}
                    </button>
                    <button id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? "hidden" : "flex items-center space-x-1"} focus:outline-none focus:ring-2  `}>
                        <svg className="text-[#1dbfc1]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">close</span> */}
                    </button>
                </div>
                
      </div>
            <div id="Main" className={`${show ? "-translate-x-full" : "-translate-x-0"} bg-white space-y-2 transform  xl:translate-x-0 shadow xl:rounded-r fixed h-screen top-22 sm:z-20  ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 flex-col `}>
                {navigation.links.map((item)=>(
                    <button className="text-stone-700 rounded py-3 px-8 items-start text-left space-x-6 w-full" key={item.id} >
                        <Link href={item.href} className={router.pathname == item.href ? "text-[#1dbfc1] capitalize font-medium" : "hover:text-[#1dbfc1] text-slate-600 capitalize font-normal"}>{item.name}</Link>
                    </button>
                ))}
            </div>
    </div>
  )
}
