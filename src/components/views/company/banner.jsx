import React from 'react'

export default function Banner() {
  return (
    <>
        <div className="w-full companyBanner bg-cover bg-center">
            <div className="mx-auto px-6 lg:w-10/12 md:pt-52 pt-28">
                <div className="space-y-12">
                    <h1 className="text-3xl lg:text-6xl font-semibold capitalize text-slate-700">our company</h1>
                    <p className='max-w-md text-xl font-light'>Semper tellus, tellus at eu platea lorem est a amet tincidunt nulla orci vulputate tellus felis.</p>
                </div>
            </div>
        </div>
    </>
  )
}
