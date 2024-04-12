import React from 'react'
import WebNav from '../navigation/webnav'
import Responsive from '../navigation/responsive'

export default function Layout({children}) {
  return (
    <>
    <header className='ixed w-full top-0 z-40 drop-shadow-md'>
        <WebNav/>
        <Responsive/>
    </header>

    <main className='a'>
        {children}
    </main>

    <footer>
        
    </footer>
</>
  )
}
