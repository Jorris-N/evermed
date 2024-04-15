import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Family from '../../../../public/images/family-hero-img.png'

export default function Banner() {
  return (
    <div className="w-full homeBanner2 bg-cover bg-center">
        <div>
                    <div className="lg:w-10/12 py-12 md:pt-52 pt-28 mx-auto px-6 justify-center w-full">
                      <div className='grid md:grid-cols-2 gap-6 justify-center'>
                          <div className='items-center md:pt-16'>
                            <div className='flex md:space-x-8'>
                              <div className='space-y-6'>
                                <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm'>welcome to evermed</h3>
                              <h2 className='lg:text-6xl text-3xl font-medium capitalize text-slate-700'>In pursuit of</h2>
                              <h2 className='lg:text-6xl text-3xl font-medium capitalize text-slate-700'>better health</h2>
                              <h2 className='lg:text-6xl text-3xl font-medium capitalize text-slate-700'>solution</h2>
                              <div className='space-y-4 text-neutral-600 leading-7'>
                              <p className='text-slate-600'>Sit nam enim luctus eget dui scelerisque condimentum a, nec volutpat feugiat blandit id vestibulum tempor, eget imperdiet tellus leo in tristique mauris bibendum.</p>
                              </div>
                              <div>
                              <button>
                                <Link href="/contact" className='bg-transparent flex items-center space-x-2 capitalize border-2 border-[#1dbfc1] rounded-full py-3 px-8 text-[#1dbfc1] hover:text-white font-semibold hover:bg-[#1dbfc1] hover:border-2 hover:border-[#1dbfc1] hover:text-[#1dbfc1] ease-in-out duration-300'>
                                  <span>learn more</span> <span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg></span>
                                </Link>
                              </button>
                              </div>
                              </div>
                            </div>
                          </div>

                          <div className='h-full w-full '>
                            <div className='flex-shrink-0 relative'>
                              <Image src={Family} alt='Evermed' className='object-cover' width={540} height={500}/>
                            </div>
                          </div>
                      </div>
                    </div>

                </div>
      
    </div>
  )
}
