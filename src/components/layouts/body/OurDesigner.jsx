export default function OurDesigner(){
   return (
      <div id="our-designer" className="py-52 bg-bgPrimary">
         <div className="flex">

            {/* designers */}
            <div className="w-1/2 h-max pl-3">
               <h2 className="section-title border-2">{`Our designers`}</h2>

               <div className="relative h-[580px] mt-24">
                  <img src="/img/model1.jpg" alt="designer 1" className="float-right mr-56 max-w-[350px] max-h-full shadow-xl"/>

                  <img src="/img/model2.jpg" alt="designer 2" className="absolute bottom-0 right-40 max-w-[250px] shadow-xl"/>
               
                  <p className="designer-text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga obcaecati animi cupiditate voluptate. Fuga dignissimos hic alias, commodi nesciunt veritatis earum reiciendis quam repudiandae.
                  </p>
                  <p className="designer-text mt-5">
                     Consectetur adipisicing elit. Quod sapiente sunt et amet quaerat adipisci nisi eos inventore nihil est assumenda dolor veritatis facere maxime vel, laborum accusamus perspiciatis error, ab doloribus voluptates dolorem delectus? Eum cumque reiciendis eaque quas error, facilis est non alias quam modi. Ducimus, nobis placeat.
                  </p>
               </div>
            </div>

            {/* About lorem */}
            <div className="pt-28 w-1/2">
               <div className="flex flex-col justify-center ml-40 mr-20">
                  <h2 className="section-title">About lorem</h2>

                  <div className="mt-20">
                     <img src="/img/model9.jpg" alt="Lorem founder" className="max-w-[250px] h-max float-left mr-5 "/>
                     <p className="text-justify italic font-medium text-slate-800 first-letter:text-5xl first-line:uppercase first-line:not-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, sapiente vero expedita fugiat molestias aut. Magni qui culpa alias nesciunt a, beatae rerum unde minus dolorem asperiores amet cumque inventore maxime molestias, debitis ut labore! Dolore praesentium voluptate tempora ab mollitia, cum ipsam minus distinctio fugiat.Soluta dolore facere asperiorespossimus adipisci quam. Repellendus obcaecati minus neque, placeat aliquid quibusdam deleniti dolores quidem voluptatem? Laudantium veniam labore aliquid ipsam natus esse amet animi repudiandae, beatae voluptate nesciunt unde, quia porro optio aliquam iste voluptas perferendis corrupti ipsa provident officiis eveniet sapiente recusandae. Eius eligendi facere vel repellat nisi? Odit, natus.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}