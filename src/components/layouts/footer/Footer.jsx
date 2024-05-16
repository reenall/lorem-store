export default function Footer(){
   return (
      <footer id="bantuan" className="pt-28 pb-16 bg-bgSecondary">
         <div className="font-raleway tracking-wider uppercase text-[10px] 
            px-10
            md:px-14
            lg:text-[11px] lg:px-20
            xl:text-xs
         ">
            <div className="text-secondary
               flex flex-wrap gap-x-5
               sm:gap-7 sm:flex-nowrap sm:justify-normal
               lg:gap-10
            ">
               <ul className="footer-col">
                  <h4 className="footer-title">Bantuan</h4>
                  <li>Pengiriman</li>
                  <li>Pembayaran dan Faktur</li>
                  <li>Pembelian Saya</li>
                  <li>Penukaran, dan Pengembalian Dana</li>
               </ul>
               <ul className="footer-col">
                  <h4 className="footer-title">Kontak</h4>
                  <li>Whatsapp</li>
                  <li>E-Mail</li>
                  <li className="font-nunito">(+62) 899 7271 977</li>
               </ul>
               <ul className="footer-col">
                  <h4 className="footer-title">ikuti Kami</h4>
                  <li>Instagram</li>
                  <li>TikTok</li>
                  <li>Youtube</li>
               </ul>
               <ul className="footer-col">
                  <h4 className="footer-title">Kebijakan</h4>
                  <li>Syarat penukaran barang</li>
               </ul>
            </div>
            <div className="pt-20 flex justify-between items-center h-full tracking-normal">
               <p className="text-secondary">Kota Bekasi, Jawa Barat</p>
               <p className="text-secondary">© ALL RIGHTS RESERVED</p>
            </div>
         </div>
      </footer>
   )
}