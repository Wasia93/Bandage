
import React from 'react'
// import TopHeader from "@/components/topheader";
// import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
// import Footer from "@/components/footer";
import Editors from "@/components/editors";
import Products from "@/components/product-card";
import Greendiv from "@/components/greendiv";
import Whitediv from "@/components/white-dic";
import Link from 'next/link';
import Blog from '@/components/blog';

export default function page(){
  return(
    <div>
      {/* <TopHeader/>
      <Navbar/> */}
      <HeroSection/>
      <Editors/>
      <Products/>
      <Greendiv/>
      <Whitediv/>
      <Blog/>
      {/* <Footer/> */}
    
    </div>
  )
}
