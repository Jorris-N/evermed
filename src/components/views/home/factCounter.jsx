import  React, {useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'




export default function FactCounter(){
    const [counterOn, setCounterOn] = useState(false)
     
    return(
        <>
        {/* <section className='w-full  bg-center flex items-center justify-center'> */}
            <div className='lg:w-10/12 px-6 py-16 mx-auto'>
                
                    <ScrollTrigger className='lg:py-10 mt-52 md:mt-0 grid lg:grid-cols-4 grid-cols-2 gap-8' onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
                        <div>
                            {counterOn && (
                                <div className='flex flex-col items-center justify-center'>
                                    <div><CountUp className='text-[50px] font-medium text-slate-700' end={320} separator={','} duration={5}/></div>
                                    <h2 className='text-sm uppercase font- text-[#1dbfc1]'>Products</h2>
                                </div>
                            )}
                          
                        </div>
                        <div>
                            {counterOn && (
                                <div className='flex flex-col items-center justify-center'>
                                    <div><CountUp className='text-[50px] font-medium text-slate-700' end={120} separator={','} duration={5}/></div>
                                    <h2 className='text-sm uppercase font- text-[#1dbfc1]'>Patents</h2>
                                </div>
                            )}
                          
                        </div>
                        <div>
                            {counterOn && (
                                <div className='flex flex-col items-center justify-center'>
                                    <div><CountUp className='text-[50px] font-medium text-slate-700' end={12000} separator={','} duration={5}/></div>
                                    <h2 className='text-sm uppercase font- text-[#1dbfc1]'>employees</h2>
                                </div>
                            )}
                          
                        </div>
                        <div>
                            {counterOn && (
                                <div className='flex flex-col items-center justify-center'>
                                    <div><CountUp className='text-[50px] font-medium text-slate-700' end={24} separator={','} duration={5}/></div>
                                    <h2 className='text-sm uppercase font- text-[#1dbfc1]'>countries</h2>
                                </div>
                            )}
                          
                        </div>
    
                        
                    </ScrollTrigger>

                
                
            </div>
        {/* </section> */}
        </>
    )
}