import { useEffect, useState, useContext } from "react"
import { useLogin } from "../../../hooks/useLogin"
import { useSelector } from "react-redux"
import { DarkMode } from "../../../context/DarkMode"
import SideBar from "./SideBar"
import RightBar from "./RightBar"
import LeftBar from "./LeftBar"
import CardUser from "./CardUser"

export default function NavBar({ products }) {
   const username = useLogin()
   const [totalCartItems, setTotalCartItems] = useState(0)
   const store = useSelector(state => state.cart.data)
   const {darkToggle} = useContext(DarkMode)

   useEffect(() => {
      setTotalCartItems(store.length)
   }, [store])

   function handleLogOut(){
      localStorage.removeItem('username')
      localStorage.removeItem('token')         
      window.location.href = '/login'
   }

   function handleCardUser(){
      document.getElementById('card-nav-user').classList.toggle('-translate-y-full')
   }

   function handleToggle(elementId, action1, action2){
      document.getElementById(elementId).classList.toggle(action1)
      document.getElementById(elementId).classList.toggle(action2)
   }

   return (
      <nav className="fixed z-50 w-full bg-bgPrimary dark:bg-darkBgPrimary transition-all duration-1000
         h-[50px] px-7
         sm:px-10
         md:h-[55px] md:px-12
         lg:h-[65px]
         xl:h-[70px]
      ">
         <div className="grid grid-cols-3 items-center h-full font-cormorant">
            {/* hamburger menu */}
            <button onClick={() => handleToggle('menu', '-translate-x-full', 'shadow-2xl')} className="flex flex-col w-max group 
               gap-[3px] 
               sm:gap-[5px] 
               md:gap-1
            ">
               <div className="hamburger-stripe"></div>
               <div className="hamburger-stripe"></div>
               <div className="hamburger-stripe"></div>
            </button>

            <SideBar name={'menu'} position={'-translate-x-full left-0'} onToggle={() => handleToggle('menu', '-translate-x-full', 'shadow-2xl')}>
               <LeftBar/>
            </SideBar>

            {/* Nav Brand */}
            <div className="text-center">
               <a href="#home" className="font-medium text-primary tracking-widest dark:text-darkPrimary
                  text-[20px]
                  sm:text-[25px]
                  lg:text-[30px]
                  xl:text-[35px]
               ">LOREM</a>
            </div>

            {/* Nav List */}
            <div className="flex justify-end items-center gap-5 text-xs">
               <ul className="flex items-center font-semibold
                  gap-4
                  sm:gap-5
               ">
                  {/* user */}
                  <li className="relative font-sans">
                     <button onClick={handleCardUser}>
                        <svg className="navlist-svg" 
                           aria-hidden="true" fill="none" focusable="false" viewBox="0 0 24 24">
                           <path d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                           <path d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
                        </svg>
                     </button>

                     <CardUser username={username} onLogOut={handleLogOut}/>
                  </li>

                  {/* cart */}
                  <li>
                     <div className="relative">
                        {totalCartItems > 0 &&
                           (<p className="absolute flex self-center text-center text-[10px] px-[5px] -right-2 -top-2 rounded-full bg-primary text-slate-100 dark:bg-slate-200 dark:text-darkSecondary transition-all duration-1000 font-sans">{totalCartItems}</p>)
                        }

                        <button onClick={() => handleToggle('cart', 'translate-x-full', 'shadow-2xl')}>
                           <svg className="navlist-svg"
                           aria-hidden="true" fill="none" focusable="false" viewBox="0 0 24 24"><path d="M2 10h20l-4 11H6L2 10Zm14-3a4 4 0 0 0-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </button>
                        <SideBar name={'cart'} position={'translate-x-full right-0 justify-between'} onToggle={() => handleToggle('cart', 'translate-x-full', 'shadow-2xl')}>
                           <RightBar products={products}/>
                        </SideBar>
                     </div>
                  </li>

                  {/* dark toggle */}
                  <li>
                     <button onClick={darkToggle}>
                        <svg className="navlist-svg" 
                           viewBox="0 1.5 22 21" fill="none" ><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M3 13.4597C3 17.6241 6.4742 21 10.7598 21C14.0591 21 16.8774 18.9993 18 16.1783C17.1109 16.5841 16.1181 16.8109 15.0709 16.8109C11.2614 16.8109 8.17323 13.8101 8.17323 10.1084C8.17323 8.56025 8.71338 7.13471 9.62054 6C5.87502 6.5355 3 9.67132 3 13.4597Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                        </svg>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}