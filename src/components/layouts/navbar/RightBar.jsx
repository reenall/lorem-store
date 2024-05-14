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
            <h1 className="h-full w-full flex pt-60 justify-center text-lg">The cart is empty</h1>
            : 
            <div className="p-7 h-full overflow-auto flex flex-col gap-5 font-nunito">
               {cartProducts.map(product => {
                  return (
                     <div key={product.id} className="w-full flex justify-between gap-2 h-[150px]">
                        <div className="flex items-center justify-center p-4 w-[200px]">
                           <img src={product.image} className="max-w-full max-h-[100px]" />
                        </div>

                        <div className="text-xs px-5 flex flex-col gap-2 justify-between py-5 w-full">
                           <h4 className="font-medium uppercase">{product.title.substring(0, 25) + '...'}</h4>
                           <p className="text-slate-600">$ {Intl.NumberFormat('id-ID').format(product.price)}</p>
                           <p className="text-slate-600">Total = {Intl.NumberFormat('id-ID').format(product.price * product.qty)}</p>

                           <div className="flex gap-3 items-center">
                              <div className="w-[115px] h-[35px] flex justify-between border">
                                 <button className="w-1/3" onClick={() => handleQuantityButton(product.id, 'decrease')}>-</button>
                                 <p className="self-center">{product.qty}</p>
                                 <button className="w-1/3" onClick={() => handleQuantityButton(product.id, 'increase')}>+</button>
                              </div>
                              
                              <button onClick={() => handleQuantityButton(product.id, 'remove')} className="underline underline-offset-4">Remove</button>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         }

         <div ref={totalPriceRef} className="p-7 border-t font-cormorant">
            <p className="text-sm text-slate-600 pb-2">Taxes and shipping calculated at checkout</p>
            <div className="w-full h-[52px] flex items-center justify-center bg-black">
               <h2 className="text-xl text-white">Amount • <span className="font-mono text-base">${Intl.NumberFormat('id-ID').format(totalPrice)}</span></h2>
            </div>
         </div>
      </>
   )
}