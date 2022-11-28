import { WhatsappLogo } from "phosphor-react"
import banner from "../../assets/Banners/SolarBanner.png"

import './Banner.css'

interface getData {
   
   content: string,
}

export function Banner(props: getData) {

   function zoom() {
      const img = document.querySelector("#banner")
      img?.classList.add("scale-150")
   }

   setTimeout(zoom, 5)

   return (

      <section id="home">

         <div className="img">           
            <img src={banner} alt="" id="banner" className="" />   
         </div>

         <div className="container">
            <div className="divider1"></div>
            <div className="BannerContent">

               <div className="adjust">
                  <h2>
                     {props.content}
                  </h2>
                  <div className="divider1"></div>
               </div>

               <a href="https://api.whatsapp.com/send?phone=554399963605" className="button" target="_blank">
                  <WhatsappLogo size={32} />
                  Peça seu orçamento
               </a>
            </div>
         </div>
        
      </section>
   )

}