import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartQtyButton } from "../../../redux/slices/cartSlice"

export default function RightBar({ products }){
   const cartProducts = useSelector(state => state.cart.data)
   const [totalPrice, setTotalPrice] = useState(0)
   const dispatch = useDispatch()

   useEffect(() => {
      let prevPrice = 0

      if(cartProducts.length > 0){
         cartProducts.map(product => prevPrice += product.price * product.qty)
         setTotalPrice(prevPrice)
         localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
      }
   }, [cartProducts, products])


   // Ref = mostly DOM
   const totalPriceRef = useRef(null)
   useEffect(() => {
      if(cartProducts.length > 0){
         totalPriceRef.current.style.display = 'inline-block'
      } else {
         totalPriceRef.current.style.display = 'none'
      }
   }, [cartProducts])

   function handleQuantityButton(id, qtyButton){
      dispatch(cartQtyButton({id, qtyButton}))
   }

   return (
      <>
         {cartProducts.length < 1 
            ? 
            <h1 className="h-full w-full flex pt-60 justify-center 
            text-base
            md:text-lg">The cart is empty</h1>
            : 
            <div className="h-full overflow-auto flex flex-col gap-5 font-nunito
            p-3
            xl:p-5">
               {cartProducts.map(product => {
                  return (
                     <div key={product.id} className="w-full flex justify-between gap-2 
                     h-[130px]
                     xl:h-[150px]">
                        <div className="flex items-center justify-center p-4 
                        w-[125px]
                        xl:w-[200px]">
                           <img src={product.image} className="max-w-full
                           max-h-[75px]
                           xl:max-h-[100px]" />
                        </div>

                        <div className="flex flex-col gap-2 justify-center py-5 w-full 
                        text-[11px] px-3
                        xl:text-xs xl:px-5">
                           <a href={`/product/${product.id}`} target="_blank">
                              <h4 className="font-medium uppercase line-clamp-1 hover:text-secondary">{product.title}</h4>
                           </a>
                           <p className="text-slate-600">$ {Intl.NumberFormat('id-ID').format(product.price)}</p>
                           <p className="text-slate-600">Total = {Intl.NumberFormat('id-ID').format(product.price * product.qty)}</p>

                           <div className="flex items-center gap-5">
                              <div className="flex justify-between border
                              w-[105px] h-[30px]
                              xl:w-[115px] xl:h-[35px]">
                                 <button className="w-1/3" onClick={() => handleQuantityButton(product.id, 'decrease')}>-</button>
                                 <p className="self-center">{product.qty}</p>
                                 <button className="w-1/3" onClick={() => handleQuantityButton(product.id, 'increase')}>+</button>
                              </div>
                              
                              <button onClick={() => handleQuantityButton(product.id, 'remove')} className="border-b border-slate-700">Remove</button>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         }

         <div ref={totalPriceRef} className="border-t font-cormorant
         py-7 px-5
         xl:p-7">
            <p className="text-slate-600 pb-2
            text-xs
            md:text-sm">Taxes and shipping calculated at checkout</p>
            <div className="w-full flex items-center justify-center bg-black
            h-[40px]
            xl:h-[52px]">
               <h2 id="total-price" className="text-white
               text-base
               xl:text-xl">Amount • <span className="font-mono 
               text-sm 
               xl:text-base">${Intl.NumberFormat('id-ID').format(totalPrice)}</span></h2>
            </div>
         </div>
      </>
   )
}