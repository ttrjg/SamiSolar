import { InstagramLogo } from 'phosphor-react'

import logoWhite from "../../assets/logo.png"

import './Footer.css'

export function Footer() {
   return (
      <div className="footer">

         <div className="logo">
            <img src={logoWhite} />
            <p>©2022 SAMI SOLAR.</p>
            <p>Todos os direitos reservados.</p>
         </div>

         <div className="Socials">
            <h2>Siga Nosso Instagram</h2>
            <div className="Social">
               <a href="https://www.instagram.com/samisolar98/" target="_blank">
                  <InstagramLogo size={40} color="white" />
               </a>

            </div>
         </div>

      </div>
   )
}