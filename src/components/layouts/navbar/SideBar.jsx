
export default function SideBar(props){
   const { children, onToggle, name, position } = props
   
   return (
      <div id={name} className={`fixed ${position} top-0 z-[999] flex flex-col h-screen bg-bgSecondary transition duration-1000 
      w-[350px]
      xl:w-[450px]`}>
         {/* --------------- Header --------------- */}
         <div className="flex justify-between items-center border-b
         py-5 px-6
         xl:py-6 xl:px-10">
            <h2 className="font-cormorant font-bold uppercase tracking-widest
            text-lg
            xl:text-2xl">{name}</h2>
            <button onClick={onToggle}>
               <svg className="w-[17px] text-secondary hover:text-primary transition-all duration-300"
                  transform={name === 'cart' ? "matrix(1, 0, 0, 1, 0, 0)" : "matrix(-1, 0, 0, 1, 0, 0)"} 
                  viewBox="-19.04 0 75.804 75.804" fill="currentColor"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <g transform="translate(-831.568 -384.448)"> <path d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="currentColor"></path> </g> </g>
               </svg>
            </button>
         </div>

         {/* --------------- SideBar Content --------------- */}
         {children}

      </div>
   )
}