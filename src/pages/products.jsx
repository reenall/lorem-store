import { useEffect, useState } from "react";
import NavBar from "../components/layouts/navbar/NavBar";
import getProducts from "../services/products.service";
import Home from "../components/layouts/body/Home";
import LoremCollection from "../components/layouts/body/LoremCollection";
import Footer from "../components/layouts/footer/Footer";
import AOS from 'aos';
import CelestialSeries from "../components/layouts/body/CelestialSeries";
import Designer from "../components/layouts/body/Designers";

AOS.init({
   once: true
});

export default function ProductPage(){
   const [products, setProducts] = useState([])   

   useEffect(() => {
      getProducts(data => {
         setProducts(data)
      })
   }, [])


   const aosTitle = document.querySelectorAll('#aos-title')
   const aosBody = document.querySelectorAll('#aos-body')

   aosTitle.forEach(title => {
      title.dataset.aosDuration = '1200'
      title.dataset.aosAnchorPlacement = 'bottom-bottom'
   })

   aosBody.forEach(body => {
      body.dataset.aosDuration = '1000'
      body.dataset.aosDelay = '300'
   })


   return(
      <div className="font-cormorant">
         <NavBar products={products}/>
         <Home/>
         <Designer/>
         <CelestialSeries/>
         <LoremCollection products={products}/>
         <Footer/>         
      </div>
   )
}
