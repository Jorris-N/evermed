import React from 'react'
import Head from 'next/head'
import WebNav from '../navigation/webnav'
import Responsive from '../navigation/responsive'
import Footer from '../navigation/footer'

export default function Layout({children}) {
  return (
    <>
    <header className='ixed w-full top-0 z-40 drop-shadow-md'>
        <WebNav/>
        <Responsive/>
        <Head>
          <title>Evermed - Pharmaceutical Company</title>
          <link rel="icon" href="/images/evermed-logo.svg" />
        </Head>
    </header>

    <main className=''>
        {children}
    </main>

    <footer>
        <Footer/>
    </footer>
</>
  )
}
