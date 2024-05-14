import CardProduct from "../../fragments/CardProduct"

export default function LoremCollection({ products }){
   return (
      <div id="lorem-collections" className="py-52 bg-bgPrimary">
         <h2 className="section-title w-1/3 ml-10 mb-20 border-2">{`Lorem collection`}</h2>

         <div className="flex flex-wrap gap-14 pt-10 justify-center">
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