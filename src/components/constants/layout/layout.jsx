import React from 'react'
import WebNav from '../navigation/webnav'
import Responsive from '../navigation/responsive'

export default function Layout({children}) {
  return (
    <>
    <header className=''>
        <WebNav/>
        <Responsive/>
    </header>

    <main className=''>
        {children}
    </main>

    <footer>
        
    </footer>
</>
  )
}
