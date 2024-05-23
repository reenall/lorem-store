import Alert from "../../elements/Alert"
import CardProduct from "../../fragments/CardProduct"

export default function LoremCollection({ products }){
   return (
      <div id="lorem-collection" className="bg-bgPrimary
         py-48 
         md:py-52
      ">
         <h2 id="aos-title" data-aos="fade-up" className="flex">
            <span className="stripe-title sm:ml-10">
               {`Lorem's`}<span className="block sm:inline"> Collection</span>
            </span>
         </h2>

         <div id="aos-body" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
         className="grid grid-cols-2 gap-2 justify-center px-3 mt-24
         sm:flex sm:flex-wrap
         lg:gap-8 lg:mt-36
         xl:gap-14">
            {products.map((product, index) => {
               return (
                  <CardProduct key={product.id} >
                     <CardProduct.Image image={product.image} id={product.id} index={index+1}/>
                     <CardProduct.Body product={product} />
                  </CardProduct>
               )
            })}
         </div>

         <Alert message={'Added To Cart'}/>
      </div>
   )
}