import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Banner from '@/components/views/company/banner'
import Glance from '@/components/views/company/glance'
import FactCounter from '@/components/views/company/factCounter'
import OurCompany from '@/components/views/company/ourCompany'

export default function company() {
  return (
    <div>
        <Layout>
            <Banner/>
            <Glance/>
            <FactCounter/>
            <OurCompany/>
        </Layout>
    </div>
  )
}
