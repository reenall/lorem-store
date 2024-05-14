import { useLogin } from "../hooks/useLogin"

export const ProfilePage = () => {
   useLogin()

   return (
      <div>
         <h1>Profile Page</h1>
         <h2>Username : {useLogin()}</h2>
      </div>
   )
}