import { Link } from "react-router-dom"

export default function AuthLayouts(props){
   const {children, title, type, goTo} = props

   return (
    <div className={`flex justify-center gap-x-3 min-h-screen items-center py-20`}>
      <div className="w-full max-w-[500px] text-sm">

        <h1 className="text-7xl font-cormorant uppercase tracking-widest">{title}</h1>
        <p className="pb-10 text-slate-500 font-raleway font-medium">Welcome, please enter your details</p>

        {children}
        
        <Link to={`/${goTo}`} className="pt-10 italic text-slate-500 hover:underline">
          {type === 'login' ? "don't have an account? create here" : "already have an account? login here"}
        </Link>
         {/* Link to = methodnya library react-router-dom, pengganti <a href, tapi versi ga perlu reload halaman */}
      </div>
    </div>
   )
}