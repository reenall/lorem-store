import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

export default function CardProduct({children}){
   return(
      <div className="flex flex-col w-[300px]">
         {children}
      </div>
   )
}

function CardImage({image, id, index}){
   return (
      <div>
         <a href={`/product/${id}`} target="_blank" className="relative h-[400px] flex items-center justify-center">

            {/* backdrop */}
            <div className="absolute flex items-center justify-center w-full h-full group">
               <div className="absolute w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 border-y-[20px] border-black/70"></div>

               <div className="flex items-center justify-center h-[100px] overflow-hidden">
                  <svg className="translate-y-[100px] group-hover:translate-y-0 text-slate-300 transition duration-500"  
                     width={50} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M28.591 27.273l-7.263-7.264c1.46-1.756 2.339-4.010 2.339-6.471 0-5.595-4.535-10.129-10.129-10.129-5.594 0-10.129 4.535-10.129 10.129 0 5.594 4.536 10.129 10.129 10.129 2.462 0 4.716-0.879 6.471-2.339l7.263 7.264 1.319-1.319zM4.475 13.538c0-4.997 4.065-9.063 9.063-9.063 4.997 0 9.063 4.066 9.063 9.063s-4.066 9.063-9.063 9.063c-4.998 0-9.063-4.066-9.063-9.063z" fill="currentColor"> </path> </g>
                  </svg>
               </div>
            </div>
            
            <img src={`img/model${index}.jpg`} alt={`product ${index}`} className="h-full w-full object-cover"/>
         </a>
      </div>
   )
}

function CardBody(props){
   // const {id, title, price, children} = props
   const {product} = props
   const priceToStr = product.price.toString()
   const cardPrice = priceToStr.substring(0, priceToStr.length - 3)
   const dispatch = useDispatch()

   return (
      <div className="font-sans mt-2 flex justify-between h-full">
         <div className="">
            <a href={`/product/${product.id}`} target="_blank">
               <h3 className="text-xs text-slate-600 uppercase hover:text-black">{product.title.substring(0, 30) + '...'}</h3>
            </a>

            <p className="text-xs text-slate-600">{cardPrice} USD</p>
         </div>

         <button onClick={() => dispatch(addToCart({id: product.id, qty: 1, title: product.title, price: product.price, image: product.image}))} 
         className="h-full hover:text-slate-600">
            <svg className="h-[22px]" 
               viewBox="0 -1 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g></svg>
         </button>
      </div>
   )
}

// buat Nested Components
CardProduct.Image = CardImage
CardProduct.Body = CardBody