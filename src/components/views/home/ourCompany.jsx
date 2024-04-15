import React from 'react'
import Image from 'next/image'
import Founder from '../../../../public/images/founder-photo.png'
import Dot from '../../../../public/images/dot-bg.svg'

export default function OurCompany() {
  return (
    <div className="lg:w-10/12 py-16 mx-auto px-6 justify-center w-full">
    <div className='grid md:grid-cols-2 gap-6 justify-center'>
        <div className='h-full w-full '>
          <div className='flex-shrink-0 relative'>
            <Image src={Founder} alt='Evermed' className='object-cover' width={500} height={500}/>
          </div>
        </div>

        <div className='items-center md:pt-16'>
          <div className='flex md:space-x-8'>
            <div className='space-y-6'>
              <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm'>our company</h3>
            <h2 className='lg:text-6xl text-3xl font-medium capitalize text-slate-700'>fast growing pharma</h2>
            <h2 className='lg:text-6xl text-3xl font-medium capitalize text-slate-700'>company</h2>
            <div className='space-y-4 leading-7'>
            <p className='text-slate-600'>Mattis tristique tincidunt scelerisque neque felis non sed sed dignissim sit ornare fermentum velit amet mauris eget dui scelerisque augue cum tellus aliquet donec leo, euismod id mattis eu, tortor sit eget commodo egestas tincidunt tortor justo, porta pulvinar at.</p>
            <p className='flex space-x-3'>
                <span ><svg className='w-8 h-8' fill='#1dbfc1' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-128c0-26.5-21.5-48-48-48zm-288 0h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-128c0-26.5-21.5-48-48-48z"/></svg></span>
                <span>Odio vel in nunc aenean dignissim dignissim mattis elementum id sed senectus laoreet blandit faucibus vitae quam aliquam nibh lacus, rhoncus massa placerat urna.</span>
            </p>
            <p className='flex flex-col space-y-1 md:px-6'>
                <span className='text-sm font-semibold'>OLIVIA MICHELLE</span>
                <span className='font-light text-sm'>Founder, CEO of evermed</span>
            </p>
            </div>
            <div>
            </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
