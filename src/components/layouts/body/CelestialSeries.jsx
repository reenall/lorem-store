
export default function CelestialSeries(){

   return(
      <div id="celestial-series" className="bg-bgSecondary
         py-48 
         md:py-52
      ">
         <h2 id="aos-title" data-aos="fade-up"
         className="flex sm:justify-center sm:-ml-[115px]">
            <span className="stripe-title uppercase">
               Celestial
               <span className="block sm:inline"> Series</span>
            </span>
         </h2>

         <div id="aos-body" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
         className="grid grid-cols-2 w-full justify-center mt-20
            sm:flex sm:px-10 sm:mt-16
            md:mt-20 md:gap-2 7
            lg:gap-3 
            xl:mt-24
         ">
            <img src="img/model17.jpg" alt="Serie 1"/>
            <img src="img/model18.jpg" alt="Serie 2"/>
            <img src="img/model2.jpg" alt="Serie 3"/>
            <img src="img/model6.jpg" alt="Serie 4"/>
         </div>

         <p data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom"
         className="text-center pt-12 px-8 text-sm
         sm:px-16
         md:px-24 md:text-sm md:mt-16
         lg:px-36 lg:text-base
         xl:px-52 xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel qui eum modi nisi at id necessitatibus unde nihil, velit voluptatibus temporibus. Voluptates corrupti harum quo atque voluptate soluta facilis corporis! Mollitia tempore veritatis omnis, vitae tenetur sint est magnam quisquam saepe sequi eum iusto a debitis illum ratione inventore.
         </p>
      </div>
   )
}