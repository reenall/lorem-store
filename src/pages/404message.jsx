import { useRouteError } from "react-router-dom"

export default function ErrorMessage() {
   let error = useRouteError()
   return(
      <div className="flex flex-col justify-center items-center gap-5 min-h-screen p-5">
         <h1 className="text-5xl font-bold text-blue-600">Oops!</h1>
         <p className="text-slate-500 font-medium">Error message: {error.statusText || error.message}</p>
         <p className="text-sm font-semibold text-blue-400">Dang!</p>
         {/* <p></p> */}
      </div>
   )
}