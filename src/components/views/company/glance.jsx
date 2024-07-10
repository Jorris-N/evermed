import React from 'react'

export default function Glance() {
  return (
    <div className='mx-auto px-6 lg:w-10/12 py-16 -mt-52 md:-mt-36 lg:-mt-0'>
        <div className='grid lg:grid-cols-3 gap-6'>
            <div>
                <h3 className='uppercase text-[#1dbfc1] font-semibold text-sm'>at a glance</h3>
            </div>
            <div className='col-span-2 leading-10'>
                <p className='font-medium text-xl'>Tristique donec id velit imperdiet tellus tempus nisi elit, orci at eu, urna, hendrerit neque, vivamus id varius tincidunt varius tempor etiam id bibendum ac faucibus vitae magna in senectus suscipit morbi.</p>
                <div className='grid md:grid-cols-2 gap-12 py-12'>
                    <div className='font-light text-lg leading-8'>
                        <p>Dolor pretium vel orci dignissim faucibus lobortis placerat et cursus non at ipsum neque et laoreet vel lorem interdum sed feugiat nunc vel ut viverra venenatis cras viverra purus scelerisque pharetra, quis ut proin pellentesque viverra non ultrices eget.</p>
                    </div>
                    <div className='font-light text-lg leading-8'>
                        <p>At semper ultricies vestibulum donec elementum, auctor mattis tellus sed fermentum amet eget elementum lorem blandit enim, turpis amet habitant massa ultricies urna, nunc ante vulputate leo in eget sem auctor ornare ac vulputate libero egestas aliquam dignissim non</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
