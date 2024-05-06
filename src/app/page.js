

import React from 'react'
import "./globals.css";
import Hero from "../component/Hero/Hero";
import Product from "../component/Products/Product";
import Search from '@/component/Search/Search.jsx';
import { SellHeading } from '@/component/Heading/heading';



 function Home() {
  

   

  return (
    <>

<Hero/>
<div className="bottom">
</div>
<Search/>
<SellHeading Heading={"Best Sellers"}/>

  <Product/>
  <SellHeading Heading={"Most Loved"}/>
  <Product/>
    </>
  );
}

export default Home