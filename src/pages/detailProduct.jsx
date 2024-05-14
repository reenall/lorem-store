import NavBar from "../components/layouts/navbar/NavBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDetailProduct } from "../services/products.service"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"

export const DetailProduct = () => {
   // const {id} = useParams()
   const id = useParams().id
   const [product, setProduct] = useState({})
   const dispatch = useDispatch()
   
   useEffect(() => {
      getDetailProduct(id, (data) => {
         setProduct(data)
      })
   }, [id])

   return (
      <>
         <NavBar/>

         {Object.keys(product).length > 0 && 
            <div className="h-screen w-full mx-auto flex items-center justify-center pt-[75px]">
               <div className="flex font-nunito py-20">
                  <div className="flex items-center justify-center w-1/2 px-10">
                     <img src={product.image} className="max-w-[500px] max-h-[500px] p-5" />
                  </div>

                  <div className="p-6 h-max max-w-[450px]">
                        {/* Title */}
                        <div className="flex flex-col">
                           <h1 className="text-sm uppercase text-pretty font-medium text-slate-900">{product.title}</h1>

                           <p className="mt-5 text-xs">Price: {product.price}</p>
                           <div className="w-full flex text-xs text-slate-700">
                              <svg className="w-[15px]" 
                                 fill="#000000" viewBox="0 0 32 32"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path></g>
                              </svg>
                              {product.rating.rate} ({product.rating.count} reviews)
                           </div>
                        </div>

                        
                        {/* Description */}
                        <div className="my-10 py-5 border-y border-gray-300 font-nunito">
                           <h3 className="uppercase text-sm">Description</h3>
                           <p className="text-xs text-slate-600">{product.description}</p>
                        </div>

                        {/* Button */}
                        <div className="flex space-x-4 pt-5 text-sm font-medium">
                           <div className="flex-auto flex space-x-4">
                              <button onClick={() => dispatch(addToCart({id: product.id, qty: 1, title: product.title, price: product.price, image: product.image}))}
                              className="h-10 w-full font-semibold border border-gray-300 uppercase hover:bg-black hover:text-white transition-all duration-300" type="submit"> 
                                 Add To Cart
                              </button>
                           </div>
                        </div>
                  </div>
               </div>
            </div> 
         }
      </>
   )
}