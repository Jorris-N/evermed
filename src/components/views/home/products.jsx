import React from 'react'
import Image from 'next/image'
import Prod from '../../../../public/images/products-img.jpg'
import Microscope from '../../../../public/images/microscope.svg'
import List from '../../../../public/images/list.svg'
import Tube from '../../../../public/images/testtube.svg'
import Firstaid from '../../../../public/images/firstaid.svg'

export default function Products() {
  return (
    <div className="lg:w-10/12 py-16 mx-auto px-6 justify-center w-full">
    <div className='grid md:grid-cols-2 gap-6 justify-center'>
        <div className='h-full w-full '>
          <div className='flex-shrink-0 relative'>
            <Image src={Prod} alt='Evermed' className='object-cover' width={500} height={500}/>
          </div>
        </div>

        <div className='items-center md:pt-16'>
          <div className='flex md:space-x-8'>
            <div className='space-y-6'>
              <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm'>our products</h3>
            <h2 className='lg:text-6xl text-3xl font-medium capitalize text-slate-700'>commited to quality</h2>
            <div className='space-y-4 leading-7'>
            <p className='text-slate-600'>MDictum vel donec viverra habitasse vitae commodo neque libero odio tempus eget laoreet id arcu molestie.</p>
            <div className='grid space-y-6 py-4'>
              <div className='flex md:flex-row md:space-x-6 space-x-0 flex-col '>
                <p className='flex-shrink-0 relative'>
                  <Image src={Microscope} alt='Evermed' className='object-cover' width={40} height={50}/>
                </p>
                <p className='flex flex-col space-y-1'><span className='font-semibold'>Clinical Development</span><span className='text-slate-600 font-light text-sm'>Quam eu aliquet aliquam tincidunt sit at adipiscing.</span></p>
              </div>
              <div className='flex md:flex-row md:space-x-6 space-x-0 flex-col'>
                <p className='flex-shrink-0 relative'>
                  <Image src={List} alt='Evermed' className='object-cover' width={40} height={50}/>
                </p>
                <p className='flex flex-col space-y-1'><span className='font-semibold'>Regulatory & Access</span><span className='text-slate-600 font-light text-sm'>Vitae non at sed augue mauris diam feugiat.</span></p>
              </div>
              <div className='flex md:flex-row md:space-x-6 space-x-0 flex-col'>
              <p className='flex-shrink-0 relative'>
                  <Image src={Tube} alt='Evermed' className='object-cover' width={40} height={50}/>
                </p>
                <p className='flex flex-col space-y-1'><span className='font-semibold'>Biotech</span><span className='text-slate-600 font-light text-sm'>Ornare volutpat, tellus nisl ut non lorem lacinia.</span></p>
              </div>
              <div className='flex md:flex-row md:space-x-6 space-x-0 flex-col'>
              <p className='flex-shrink-0 relative'>
                  <Image src={Firstaid} alt='Evermed' className='object-cover' width={40} height={50}/>
                </p>
                <p className='flex flex-col space-y-1'><span className='font-semibold'>Functional Service</span><span className='text-slate-600 font-light text-sm'>Venenatis laoreet tortor id sapien mattis quis integer.</span></p>
              </div>
            </div>
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
