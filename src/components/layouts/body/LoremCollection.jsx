import CardProduct from "../../fragments/CardProduct"

export default function LoremCollection({ products }){
   return (
      <div id="lorem-collections" className="py-52 bg-bgPrimary">
         <h2 className="section-title border-2 w-max px-5 mx-auto
         sm:px-20 sm:w-max sm:ml-10">
            {`Lorem's collection`}
         </h2>

         <div className="grid grid-cols-2 gap-2 justify-center px-3 mt-24
         sm:flex sm:flex-wrap
         lg:gap-8 lg:mt-36
         xl:gap-14">
            {products.map((product, index) => {
               return (
                  <CardProduct key={product.id} >
                     <CardProduct.Image image={product.image} id={product.id} index={index+1}/>
                     <CardProduct.Body product={product}>
                     </CardProduct.Body>
                  </CardProduct>
               )
            })}
         </div>
      </div>
   )
}