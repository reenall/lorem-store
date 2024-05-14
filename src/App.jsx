import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ForgetPasswordPage from "./pages/forgetPassword"
export default function App() {

  return (
    <div className="flex gap-x-3 items-center min-h-screen p-5">
      {/* <LoginPage /> */}
      <RegisterPage/>
      {/* <ForgetPasswordPage/> */}
    </div>
  )
}



// ----- Cara-cara membuat Component (Function, Component, Arrow Function) -----

// function ButtonRed(){
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-red-200 text-white" type="submit">
//       Buy now
//     </button>
//   )
// }

// class ButtonBlue extends React.Component{
//   render(){
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-blue-200 text-white" type="submit">
//         Buy now
//       </button>
//     )
//   }
// }

// const ButtonViolet = () => {
//   return(
//     <button className="h-10 px-6 font-semibold rounded-md bg-violet-200 text-white" type="submit">
//       Buy now
//     </button>
//   )
// }
