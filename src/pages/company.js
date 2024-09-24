import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/company/banner'
import Glance from '@/components/views/company/glance'
import FactCounter from '@/components/views/company/factCounter'
import OurCompany from '@/components/views/company/ourCompany'
import Therapy from '@/components/views/company/therapy'
import Video from '@/components/views/company/video'
import Partnership from '@/components/views/home/partnership'

export default function company() {
  return (
    <div>
        <Layout>
            <Banner/>
            <Glance/>
            <FactCounter/>
            <OurCompany/>
            <Therapy/>
            <Video/>
            <Partnership/>
        </Layout>
    </div>
  )
}
