export default function HotProducts(){
   return(
      <div id="hot-products" className="py-52 bg-bgSecondary">
         <h2 className="section-title">Hot products</h2>

         <div className="grid grid-cols-2 w-full justify-center mt-20
         sm:flex sm:px-10 sm:mt-16
         md:mt-20 md:gap-2 
         lg:gap-3 
         xl:mt-24">
            <img src="img/model6.jpg" alt="Hot product 1"/>
            <img src="img/model5.jpg" alt="Hot product 2"/>
            <img src="img/model9.jpg" alt="Hot product 3"/>
            <img src="img/model7.jpg" alt="Hot product 4"/>
         </div>

         <p className="text-center pt-12 px-5 text-sm
         sm:px-16
         md:px-24 md:text-sm md:pt-16
         lg:px-36 lg:text-base
         xl:px-52 xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel qui eum modi nisi at id necessitatibus unde nihil, velit voluptatibus temporibus. Voluptates corrupti harum quo atque voluptate soluta facilis corporis! Mollitia tempore veritatis omnis, vitae tenetur sint est magnam quisquam saepe sequi eum iusto a debitis illum ratione inventore.
         </p>
      </div>
   )
}