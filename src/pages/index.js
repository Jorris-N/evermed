import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/constants/layout/layout";
import Banner from "@/components/views/home/banner";
import FactCounter from "@/components/views/home/factCounter";
import OurCompany from "@/components/views/home/ourCompany";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner/>
        <FactCounter/>
        <OurCompany/>
      </Layout>
    </div>
  );
}
