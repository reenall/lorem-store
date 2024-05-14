
// DIPAKENYA DI FILE '24-use-reducer'

import { createContext, useReducer } from "react";

const TotalPriceContext = createContext()
const TotalPriceDispatchContext = createContext()


function totalPriceReducer(state, action) {
   if(action.type === 'UPDATE'){
      return {total: action.payload.total}
   } else {
      throw Error('Unknown action: ' + action.type)
   }
}

export function TotalPriceProvider({ children }){
   const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0})                                    // {total: 0} = initial state

   return (
      <TotalPriceContext.Provider value={totalPrice}> 
         <TotalPriceDispatchContext.Provider value={dispatch}>
            {children}
         </TotalPriceDispatchContext.Provider>
      </TotalPriceContext.Provider>
   )
}

