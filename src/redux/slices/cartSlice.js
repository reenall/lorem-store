import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      data: JSON.parse(localStorage.getItem('cartProducts')) || []
   },
   reducers: {
      addToCart: (state, action) => {
         const itemInCart = state.data.find(item => item.id === action.payload.id)
         itemInCart ? itemInCart.qty++ : state.data.push(action.payload)         
      },
      
      cartQtyButton: (state, action) => {
         const itemInCart = state.data.find(item => item.id === action.payload.id)

         if(itemInCart && action.payload.qtyButton === 'increase'){
            itemInCart.qty++
         } else if(itemInCart && action.payload.qtyButton === 'decrease'){
            if(itemInCart.qty > 0) itemInCart.qty--
         } else if(itemInCart && action.payload.qtyButton === 'remove'){
            if(state.data.length > 1){
               return {...state, data: state.data.filter(item => item.id !== action.payload.id)}
            } else {
               state.data = []
               localStorage.removeItem('cartProducts')
            }
         }
      }
   }
})

export const { addToCart, cartQtyButton } = cartSlice.actions
export default cartSlice.reducer
