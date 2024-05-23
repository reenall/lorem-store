export default function Designer(){

   return (
      <div id="lorem-designer" className="bg-bgPrimary
         py-48 
         md:py-52
      ">
         <div className="md:flex">

            {/* designers */}
            <div className="h-max
               w-full px-5
               md:w-1/2 md:pr-0
               xl:pl-10
            ">
               
               <h2 id="aos-title" data-aos="fade-up" 
               className="flex
                  -ml-5 
                  sm:ml-0
               ">
                  <span className="stripe-title">
                     Lorem
                     <span className="block sm:inline"> Designers</span>
                  </span>
               </h2>

               <div id="aos-body" data-aos="fade-up"
               className="relative mt-28 mx-auto
                  max-w-[450px]
                  sm:min-h-[350px] sm:max-h-max sm:max-w-[550px]
                  lg:min-h-[400px] lg:max-w-max
                  xl:min-h-[520px]
               "> 
                  <img src="img/designer1.jpg" alt="designer 1" className="float-right shadow-xl max-h-full mb-14
                     ml-5 max-w-[175px] 
                     sm:ml-10 sm:max-w-[200px]
                     md:ml-3 md:mr-4
                     lg:mr-12 lg:max-w-[225px]
                     xl:mr-28 xl:max-w-[265px]
                  "/> 

                  <img src="img/model11.jpg" alt="designer 2" className="absolute shadow-xl
                     -right-5 top-32 max-w-[125px]
                     sm:-right-10 sm:bottom-0 sm:max-w-[150px] 
                     md:-right-4
                     lg:right-0 lg:max-w-[175px] 
                     xl:right-10 xl:top-44 xl:max-w-[200px]
                  "/> 
               
                  <p className="designer-text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga obcaecati animi cupiditate voluptate. Fuga dignissimos hic alias, commodi nesciunt veritatis earum reiciendis quam repudiandae.
                  </p>
                  <p className="designer-text mt-5">
                     Consectetur adipisicing elit. Quod sapiente sunt et amet quaerat adipisci nisi eos inventore nihil est assumenda dolor veritatis facere maxime vel, laborum accusamus perspiciatis error, ab doloribus voluptates dolorem delectus? Eum cumque reiciendis eaque quas error, facilis est non alias quam modi. Ducimus, nobis placeat.
                  </p>
               </div>
            </div>

            {/* About Us */}
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
                  <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-center"
                  className="section-title uppercase">About Us</h2>

                  <div id="aos-body" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
                  className="max-w-[450px]
                     pt-16 mx-auto
                     sm:pt-20 sm:max-w-[550px]
                     md:max-w-max xl:pt-24
                  ">
                     <img src="img/model3.jpg" alt="Lorem founder" className="float-left m-5 mr-7
                        max-w-[175px] 
                        sm:max-w-[200px]
                        md:m-0 md:mr-5 md:max-w-[175px]
                        xl:max-w-[215px]
                     "/> 
                     <p className="designer-text italic first-line:uppercase first-line:not-italic first-letter:ml-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, sapiente vero expedita fugiat molestias aut. Magni qui culpa alias nesciunt a, beatae rerum unde minus dolorem asperiores amet cumque inventore maxime molestias, debitis ut labore! Dolore praesentium voluptate tempora ab mollitia, cum ipsam minus distinctio fugiat.Soluta dolore facere asperiorespossimus adipisci quam. Repellendus obcaecati minus neque, placeat aliquid quibusdam deleniti dolores quidem voluptatem? Laudantium veniam labore aliquid ipsam natus esse amet animi repudiandae, beatae voluptate nesciunt unde, quia porro optio aliquam iste voluptas perferendis corrupti ipsa provident officiis eveniet sapiente recusandae. Eius eligendi facere vel repellat nisi? Odit, natus.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}