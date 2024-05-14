import NavBar from "../components/layouts/navbar/NavBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDetailProduct } from "../services/products.service"

export const DetailProduct = () => {
   // const {id} = useParams()
   const id = useParams().id
   const [product, setProduct] = useState({})
   
   useEffect(() => {
      getDetailProduct(id, (data) => {
         setProduct(data)
      })
   }, [id])

   return (
      <>
         <NavBar/>

         {Object.keys(product).length > 0 && 
            <div className="h-screen w-full mx-auto flex items-center justify-center">
               <div className="flex font-nunito text-lg">
                  <div className="flex items-center justify-end w-1/2 pr-10">
                     <img src={product.image} className="max-w-[500px] max-h-[500px] p-5" />
                  </div>

                  <form className="flex-auto p-6 h-max max-w-[450px] border border-black">
                        {/* Header */}
                        <div className="flex flex-col">
                           <h1 className="text-xl uppercase text-pretty flex-auto font-semibold text-slate-900">{product.title}</h1>
                           <p className="font-semibold text-sm mt-5">${product.price}</p>

                           <div className="w-full flex text-sm font-sans font-medium text-slate-700">
                              <svg className="w-[17px]" 
                                 fill="#000000" viewBox="0 0 32 32"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path></g>
                              </svg>
                              {product.rating.rate} ({product.rating.count} reviews)
                           </div>
                        </div>

                        
                        {/* Body */}
                        <div className="my-10">
                           <p className="font-mono text-slate-600">{product.description}</p>
                        </div>

                        {/* Footer */}
                        <div className="flex space-x-4 pt-5 text-sm font-medium">
                           <div className="flex-auto flex space-x-4">
                              <button className="h-10 w-full font-semibold bg-black text-white uppercase" type="submit">
                                 Add To Cart
                              </button>
                           </div>
                        </div>
                  </form>
               </div>
            </div> 
         }
      </>
   )
}