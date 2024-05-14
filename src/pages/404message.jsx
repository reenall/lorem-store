import { useRouteError } from "react-router-dom"

export default function ErrorMessage() {
   let error = useRouteError()
   return(
      <div className="flex flex-col justify-center items-center gap-5 min-h-screen p-5 font-cormorant">
         <h1 className="text-5xl font-bold">Sorry!</h1>
         <p className="text-slate-500 font-medium">Error message: {error.statusText || error.message}</p>
         <a href="/" className="text-sm font-semibold underline underline-offset-4 hover:text-secondary">Back to home</a>
      </div>
   )
}