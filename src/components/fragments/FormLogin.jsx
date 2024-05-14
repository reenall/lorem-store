import { useEffect, useRef, useState } from "react"
import Button from "../elements/button"
import InputForm from "../elements/input"
import { login } from "../../services/auth.service"

export default function FormLogin(){

   const [loginFailedMsg, setLoginFailedMsg] = useState('')

   function handleClick(event){
      event.preventDefault()                                            // mencegah perilaku default browser, in case: ngerefresh pas form disubmit

      const data = {
         username: event.target.username.value,
         password: event.target.password.value
      }
      
      login(data, (status, res) => {
         if(status){
            localStorage.setItem('token', res)
            localStorage.setItem('username', data.username)
            window.location.href = '/products'
         } else {
            setLoginFailedMsg(res.response.data)
         }
      })
   }

   const usernameRef = useRef(null)
   
   useEffect(() => {
      usernameRef.current.focus()
   }, [])

   return (
      <form action="" onSubmit={handleClick} className="mt-8">

         <InputForm 
            name='username' 
            type='text' 
            placeholder='username'
            ref={usernameRef}
         />
         <InputForm 
            name='password' 
            type='password' 
            placeholder='password' 
         />
         <p className="italic text-red-400">{loginFailedMsg}</p> 
         
         <Button type='submit' btnClass='w-full mb-5'>
            Log in
         </Button>         
      </form>
   )
}