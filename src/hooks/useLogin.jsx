import { useEffect, useState } from "react"

export const useLogin = () => {
   const [username, setUsername] = useState('Loras')
   
   // useEffect(() => {
   //    (!localStorage.getItem('token')) ? window.location.href = '/login' : setUsername(localStorage.getItem('username'))
   // }, [])

   return username
}