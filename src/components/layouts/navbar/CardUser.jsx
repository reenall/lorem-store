export default function CardUser({ username, onLogOut }){
   return (
      <div className="absolute overflow-hidden -translate-x-[54px]
         w-[125px] h-[175px]
         xl:w-[150px] xl:h-[200px] xl:-translate-x-[62px]
      ">
         <div id="card-nav-user" className="h-full bg-bgPrimary dark:text-darkSecondary transition-all duration-1000 -translate-y-full">
            <h4 className="border-y uppercase py-5 text-center
               text-[11px]
               xl:text-xs">Account</h4>
            <p className="text-center font-normal
               pt-7
               xl:pt-10">Hi, {username}</p>

            <button onClick={onLogOut} className="absolute bottom-0 w-full flex items-center justify-center bg-primary hover:opacity-75
               h-[30px]
               xl:h-[35px]">
               <p className="text-slate-200
                  text-[11px]
                  xl:text-xs">Sign Out</p>
            </button>
         </div>
      </div>
   )
}