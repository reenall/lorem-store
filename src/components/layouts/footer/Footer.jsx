export default function Footer(){
   return (
      <footer id="bantuan" className="pt-28 pb-16 bg-bgSecondary">
         <div className="px-20 font-raleway tracking-wider text-xs uppercase">
            <div className="flex flex-wrap gap-10 text-slate-600">
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