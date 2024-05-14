import { useEffect, useState } from "react";
import NavBar from "../components/layouts/navbar/NavBar";
import getProducts from "../services/products.service";
import Hero from "../components/layouts/body/Hero";
import OurDesigner from "../components/layouts/body/OurDesigner";
import HotProducts from "../components/layouts/body/HotProducts";
import LoremCollection from "../components/layouts/body/LoremCollection";
import Footer from "../components/layouts/footer/Footer";

export default function ProductPage(){
   const [products, setProducts] = useState([])   

   useEffect(() => {
      getProducts(data => {
         setProducts(data)
      })
   }, [])

   return(
      <div className="font-cormorant">
         <NavBar products={products}/>
         <Hero/>
         <OurDesigner/>
         <HotProducts/>
         <LoremCollection products={products}/>
         <Footer/>
      </div>
   )
}
