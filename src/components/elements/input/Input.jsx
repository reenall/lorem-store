import { forwardRef } from "react";

export default forwardRef(function Input(props, ref){
   const {name, type, placeholder} = props

   return (
      <input 
         name={name}
         id={name}
         type={type} 
         placeholder={placeholder}
         className="w-full border-b-2 py-2 text-xs placeholder:text-slate-400 uppercase tracking-wider focus:outline-none" 
         ref={ref}
      />
   )
})