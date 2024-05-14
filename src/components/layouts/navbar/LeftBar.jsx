export default function LeftBar(){
   return (
      <ul className="p-10 flex flex-col gap-3 text-lg">
         <li><a href="/products#hero" className="leftBar-list">Hero</a></li>
         <li><a href="/products#our-designer" className="leftBar-list">Our Designers</a></li>
         <li><a href="/products#hot-products" className="leftBar-list">Hot Products</a></li>
         <li><a href="/products#lorem-collections" className="leftBar-list">Lorem Collections</a></li>
         <li><a href="/products#bantuan" className="leftBar-list">Bantuan</a></li>
      </ul>
   )
}