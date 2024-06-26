export default function Home(){
   return (
      <div id="home" className="h-screen bg-bgSecondary dark:bg-darkBgPrimary transition duration-1000
      pb-7
      md:pb-10
      ">
         <div className="grid h-full
            grid-cols-2 pt-[50px] grid-rows-2
            md:grid-cols-4 md:grid-rows-1
            md:pt-[55px]
            lg:pt-[65px]
            xl:pt-[70px]
         ">
            <img src="img/model1.jpg" alt="image 4" />
            <img src="img/model11.jpg" alt="image 2" />
            <img src="img/model3.jpg" alt="image 1" />
            <img src="img/model2.jpg" alt="image 3" />
         </div>
      </div>
   )
}