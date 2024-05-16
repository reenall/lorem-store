export default function OurDesigner(){
   return (
      <div id="our-designer" className="bg-bgPrimary
         py-48 
         md:py-52
      ">
         <div className="md:flex">

            {/* designers */}
            <div className="w-full h-max px-5
            md:w-1/2 md:pl-3">
               <h2 className="section-title border-2 w-max px-10 mx-auto
               sm:px-20
               md:w-full md:px-0">Our designers</h2>

               <div className="relative mt-24 mx-auto overflow-y-clip
                  h-[380px] max-w-[450px]
                  sm:h-[350px] sm:max-w-[550px] sm:overflow-y-visible
                  md:max-w-max
                  lg:h-[460px]
                  xl:h-[580px]
               "> 
                  <img src="img/model15.jpg" alt="designer 1" className="float-right shadow-xl max-h-full mb-14
                     ml-5 max-w-[175px] 
                     sm:ml-10 sm:max-w-[200px]
                     md:ml-3 md:mr-4
                     lg:ml-3 lg:mr-10 lg:max-w-[225px]
                     xl:mr-32 xl:max-w-[300px]
                  "/> 

                  <img src="img/model13.jpg" alt="designer 2" className="absolute 
                     -right-5 bottom-[70px] shadow-xl max-w-[125px]
                     sm:-right-10 sm:bottom-0 sm:max-w-[150px] 
                     md:-right-4 md:bottom-2
                     lg:-right-3 lg:bottom-16 lg:max-w-[175px] 
                     xl:right-14 xl:bottom-20 xl:max-w-[225px]
                  "/> 
               
                  <p className="designer-text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga obcaecati animi cupiditate voluptate. Fuga dignissimos hic alias, commodi nesciunt veritatis earum reiciendis quam repudiandae.
                  </p>
                  <p className="designer-text mt-5">
                     Consectetur adipisicing elit. Quod sapiente sunt et amet quaerat adipisci nisi eos inventore nihil est assumenda dolor veritatis facere maxime vel, laborum accusamus perspiciatis error, ab doloribus voluptates dolorem delectus? Eum cumque reiciendis eaque quas error, facilis est non alias quam modi. Ducimus, nobis placeat.
                  </p>
               </div>
            </div>

            {/* About lorem */}
            <div className="w-full h-max px-5
               mt-36
               sm:mt-28
               md:w-1/2
            ">
               <div className="flex flex-col justify-center
                  mx-auto 
                  md:ml-10 md:mr-5
                  lg:ml-20 lg:mr-10
                  xl:ml-36 xl:mr-20
               "> 
                  <h2 className="section-title">About lorem</h2>

                  <div className="max-w-[450px] 
                     mt-16 mx-auto
                     sm:mt-20 sm:max-w-[550px]
                     md:max-w-max
                  ">
                     <img src="img/model9.jpg" alt="Lorem founder" className="float-left m-5 mr-7
                        max-w-[175px] 
                        sm:max-w-[200px]
                        md:m-0 md:mr-5
                        xl:max-w-[250px]
                     "/> 
                     <p className="designer-text text-justify italic first-line:not-italic first-letter:ml-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, sapiente vero expedita fugiat molestias aut. Magni qui culpa alias nesciunt a, beatae rerum unde minus dolorem asperiores amet cumque inventore maxime molestias, debitis ut labore! Dolore praesentium voluptate tempora ab mollitia, cum ipsam minus distinctio fugiat.Soluta dolore facere asperiorespossimus adipisci quam. Repellendus obcaecati minus neque, placeat aliquid quibusdam deleniti dolores quidem voluptatem? Laudantium veniam labore aliquid ipsam natus esse amet animi repudiandae, beatae voluptate nesciunt unde, quia porro optio aliquam iste voluptas perferendis corrupti ipsa provident officiis eveniet sapiente recusandae. Eius eligendi facere vel repellat nisi? Odit, natus.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}