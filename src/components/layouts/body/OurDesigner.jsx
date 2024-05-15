export default function OurDesigner(){
   return (
      <div id="our-designer" className="py-52 bg-bgPrimary">
         <div className="flex">

            {/* designers */}
            <div className="w-1/2 h-max pl-3">
               <h2 className="section-title border-2">{`Our designers`}</h2>

               <div className="relative mt-24 xl:h-[580px] lg:h-[460px] md:h-[360px]">
                  <img src="img/model1.jpg" alt="designer 1" className="float-right max-h-full shadow-xl 
                  md:mr-20 md:max-w-[200px]
                  lg:mr-20 lg:max-w-[250px] 
                  xl:mr-40 xl:max-w-[350px]"/> 

                  <img src="img/model2.jpg" alt="designer 2" className="absolute bottom-0 shadow-xl
                  md:right-10 md:max-w-[150px]
                  lg:right-10 lg:max-w-[200px] 
                  xl:right-24 xl:max-w-[250px]"/> 
               
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
               <div className="flex flex-col justify-center 
               md:ml-20 md:mr-10
               lg:ml-20 lg:mr-10
               xl:ml-40 xl:mr-20"> 
                  <h2 className="section-title">About lorem</h2>

                  <div className="mt-20">
                     <img src="img/model9.jpg" alt="Lorem founder" className="float-left mr-5 
                     md:max-w-[200px]
                     lg:max-w-[225px]
                     xl:max-w-[250px]"/> 
                     <p className="designer-text text-justify italic first-line:not-italic first-letter:ml-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, sapiente vero expedita fugiat molestias aut. Magni qui culpa alias nesciunt a, beatae rerum unde minus dolorem asperiores amet cumque inventore maxime molestias, debitis ut labore! Dolore praesentium voluptate tempora ab mollitia, cum ipsam minus distinctio fugiat.Soluta dolore facere asperiorespossimus adipisci quam. Repellendus obcaecati minus neque, placeat aliquid quibusdam deleniti dolores quidem voluptatem? Laudantium veniam labore aliquid ipsam natus esse amet animi repudiandae, beatae voluptate nesciunt unde, quia porro optio aliquam iste voluptas perferendis corrupti ipsa provident officiis eveniet sapiente recusandae. Eius eligendi facere vel repellat nisi? Odit, natus.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}