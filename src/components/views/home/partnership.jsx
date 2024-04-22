import React from 'react'
import Link from 'next/link'

export default function Partnership() {
  return (
    <div className='w-full bg-gradient-to-r from-[#1dbfc1] to-[#1dbfc1] md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16'>
      <div className="lg:w-10/12 mx-auto px-6">
        <div>
            <div className='w-full flex justify-center py-16 grid lg:grid-cols-3'>
                <div className="md: w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4 col-span-2">
                    <div className='space-y-8'>
                    <h3 className='uppercase text-white font-semibold text-sm'>Partnership</h3>
                        <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-bold leading-6 lg:leading-10 md:text-left text-center">Quis volutpat scelerisque quis massa in dolor nunc lectus cursus.</h1>
                        <p className='text-white font-light'>Varius nec, elit turpis amet, proin ut sed nec donec auctor dolor arcu, sollicitudin.</p>
                    </div>
                    <Link href={'/contact'}><button role="button" aria-label="Contact Us" className="mt-5 lg:mt-8 py-2 lg:py-2 px-4 lg:px-8 bg-white font-bold text-[#1dbfc1] rounded-full text-sm lg:text-lg xl:text-xl hover:bg-transparent border-2 hover:border-2 hover:border-white hover:text-white ease-in-out duration-300 focus:ring-2 focus:ring-offset-2 capitalize focus:ring-white focus:outline-none">contact us </button></Link>
                </div>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  )
}
