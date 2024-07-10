import React from 'react'
import Image from 'next/image'
import Pharma from '../../../../public/images/pharma-img.svg'

export default function Therapy() {
  return (
    <div className='lg:w-10/12 py-16 mx-auto px-6 justify-center w-full'>
        <div className='grid md:grid-cols-2 gap-12 justify-center'>
            <div className='items-center'>
                <div className='flex md:space-x-8'>
                    <div className='space-y-6'>
                        <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm'>therapeutic areas of focus</h3>
                        <h2 className='lg:text-4xl text-3xl font-medium capitalize text-slate-700'>neurology and oncology</h2>
                    </div>
                </div>
                <div className='space-y-8 leading-8 pt-10'>
                    <p className='text-slate-700 font-semibold text-lg'>Odio vel in nunc aenean dignissim dignissim mattis elementum id sed senectus laoreet blandit faucibus vitae quam aliquam nibh lacus, rhoncus massa placerat urna.</p>
                    <p className='text-slate-700 font-light text-lg'>Mattis tristique tincidunt scelerisque neque felis non sed sed dignissim sit ornare fermentum velit amet mauris eget dui scelerisque augue cum tellus aliquet donec leo, euismod id mattis eu, tortor sit eget commodo egestas tincidunt tortor justo, porta pulvinar at.</p>
                </div>
            </div>

            <div className='h-full w-full'>
                <div className='flex-shrink-0 relative'>
                    <Image src={Pharma} alt='Evermed' className='object-cover' width={500} height={500}/>
                </div>
            </div>
        </div>
    </div>
  )
}
