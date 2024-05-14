import Input from "./Input"
import { forwardRef } from "react"

export default forwardRef(function InputForm(props, ref){
   const {name, type, placeholder} = props

   return (
      <div className="mb-8">
         <Input name={name} id={name} type={type} placeholder={placeholder} ref={ref} />
      </div>
   )
})