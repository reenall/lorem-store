export default function HotProducts(){
   return(
      <div id="hot-products" className="py-52 bg-bgSecondary">
         <h2 className="section-title">Hot products</h2>

         <div className="mt-24 flex flex-wrap gap-5 justify-center w-full">
            <img src="img/model6.jpg" alt="Hot product 1"/>
            <img src="img/model5.jpg" alt="Hot product 2"/>
            <img src="img/model9.jpg" alt="Hot product 3"/>
            <img src="img/model7.jpg" alt="Hot product 4"/>
         </div>

         <p className="pt-16 text-center px-52 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel qui eum modi nisi at id necessitatibus unde nihil, velit voluptatibus temporibus. Voluptates corrupti harum quo atque voluptate soluta facilis corporis! Mollitia tempore veritatis omnis, vitae tenetur sint est magnam quisquam saepe sequi eum iusto a debitis illum ratione inventore.</p>
      </div>
   )
}