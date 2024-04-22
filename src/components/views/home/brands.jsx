import React from 'react'
import Image from 'next/image'
import Logo1 from '../../../../public/images/logo-1.svg'
import Logo2 from '../../../../public/images/logo-2.svg'
import Logo3 from '../../../../public/images/logo-3.svg'
import Logo4 from '../../../../public/images/logo-4.svg'

export default function Brands() {
  return (
    <div className="lg:w-10/12 py-16 mx-auto px-6 justify-center w-full">
      <div className='text-center justify-center'>
        <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm'>our brands</h3>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 gap 6 py-12'>
        <div className='justify-center items-center'>
            <p className='flex-shrink-0 relative'>
                <Image src={Logo1} alt='Evermed' className='object-cover' width={200} height={200}/>
            </p>
        </div>
        <div className='justify-center items-center'>
            <p className='flex-shrink-0 relative'>
                <Image src={Logo2} alt='Evermed' className='object-cover' width={200} height={200}/>
            </p>
        </div>
        <div className='justify-center items-center'>
            <p className='flex-shrink-0 relative'>
                <Image src={Logo3} alt='Evermed' className='object-cover' width={200} height={200}/>
            </p>
        </div>
        <div className='justify-center items-center'>
            <p className='flex-shrink-0 relative'>
                <Image src={Logo4} alt='Evermed' className='object-cover' width={200} height={200}/>
            </p>
        </div>
      </div>
    </div>
  )
}
