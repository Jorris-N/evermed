import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/constants/layout/layout";
import Banner from "@/components/views/home/banner";
import FactCounter from "@/components/views/home/factCounter";
import OurCompany from "@/components/views/home/ourCompany";
import Values from "@/components/views/home/values";
import Products from "@/components/views/home/products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner/>
        <FactCounter/>
        <OurCompany/>
        <Values/>
        <Products/>
      </Layout>
    </div>
  );
}
