export default function Alert({ message }){
   return (
      <div id="alert" className="opacity-0 transition-all duration-1000 fixed z-[999] left-0 right-0 mx-auto w-max bg-primary shadow-xl font-cormorant
         bottom-16
         lg:bottom-20
      ">
         <p className="text-white font-medium py-3
            px-5 text-xs
            lg:px-7 lg:text-sm
            xl:px-10 xl:text-base
         ">{message}</p>
      </div>
   )
}