import React from 'react'
import Image from 'next/image'
import Dot from '../../../../public/images/dot-bg.svg'

export default function Values() {
  return (
    <div className="lg:w-10/12 py-16 mx-auto px-6 justify-center w-full">
      <div className='flex lg:flex-row lg:space-x-16 lg:space-y-0 flex-col gap-6 space-y-4'>
        <div className=''>
            <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>our values</h3>
            <div className='flex-shrink-0 relative pt-16 lg:block hidden'>
            <Image src={Dot} alt='Evermed' className='object-cover' width={300} height={500}/>
          </div>
        </div>
        <div className='lg:w-10/12 flex flex-col items-end'>
            <h2 className='lg:text-4xl text-3xl font-medium capitalize text-slate-700'>Congue ultric in pellentesque sodales egestas faucibus accumsan.</h2>
            <div className='grid md:grid-cols-3 gap-12 pt-20'>
                <div className='flex flex-col space-y-4 border-t-transparent hover:border-t hover:border-[#1dbfc1] ease-in-out duration-300 py-2'>
                    <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>01</h3>
                    <h2 span className=' font-semibold'>Innovation</h2>
                    <p className='text-slate-600 font-light leading-7'>Id leo massa lacinia morbi pulvinar venenatis, etiam amet purus in interdum proin nisl morbi eleifend.</p>
                </div>
                <div className='flex flex-col space-y-4 border-t border-transparent hover:border-t hover:border-[#1dbfc1] ease-in-out duration-300 py-2'>
                    <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>02</h3>
                    <h2 span className=' font-semibold'>Team Work</h2>
                    <p className='text-slate-600 font-light leading-7'>Id leo massa lacinia morbi pulvinar venenatis, etiam amet purus in interdum proin nisl morbi eleifend.</p>
                </div>
                <div className='flex flex-col space-y-4 border-t border-transparent hover:border-t hover:border-[#1dbfc1] ease-in-out duration-300 py-2'>
                    <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>03</h3>
                    <h2 span className=' font-semibold'>Sustainable</h2>
                    <p className='text-slate-600 font-light leading-7'>Id leo massa lacinia morbi pulvinar venenatis, etiam amet purus in interdum proin nisl morbi eleifend.</p>
                </div>
                <div className='flex flex-col space-y-4 border-t border-transparent hover:border-t hover:border-[#1dbfc1] ease-in-out duration-300 py-2'>
                    <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>04</h3>
                    <h2 span className=' font-semibold'>Integrity</h2>
                    <p className='text-slate-600 font-light leading-7'>Id leo massa lacinia morbi pulvinar venenatis, etiam amet purus in interdum proin nisl morbi eleifend.</p>
                </div>
                <div className='flex flex-col space-y-4 border-t border-transparent hover:border-t hover:border-[#1dbfc1] ease-in-out duration-300 py-2'>
                    <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>05</h3>
                    <h2 span className=' font-semibold'>Excellence</h2>
                    <p className='text-slate-600 font-light leading-7'>Id leo massa lacinia morbi pulvinar venenatis, etiam amet purus in interdum proin nisl morbi eleifend.</p>
                </div>
                <div className='flex flex-col space-y-4 border-t border-transparent hover:border-t hover:border-[#1dbfc1] ease-in-out duration-300 py-2'>
                    <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm text-start'>06</h3>
                    <h2 span className=' font-semibold'>Commitment</h2>
                    <p className='text-slate-600 font-light leading-7'>Id leo massa lacinia morbi pulvinar venenatis, etiam amet purus in interdum proin nisl morbi eleifend.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
