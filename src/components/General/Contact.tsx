import { WhatsappLogo, Phone, EnvelopeSimple, MapPinLine } from "phosphor-react"

import './Contact.css'

export function Contact(){
   return (
      <section id="contact">
         <div className="contact">
            <h2>Entre em contato</h2>

            <div className="content">

               <div className="contacts"> 
                  <p>
                     Entre em contato com a Sami Solar, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
                  </p>

                  
                  <div className="phone"><Phone size={32} /><p>43 9996-3605</p></div>
                  
                  <div className="phone"><EnvelopeSimple size={32} /><p>ispsucesso@gmail.com</p></div>
                  <div className="phone"><MapPinLine size={32} /><p>R. Tibagi, 170 - Vila Recreio, Londrina - PR, 86025-270</p>
                  </div>
                  
                  <a href="https://wa.me/qr/TSC5UPVO7DPZL1" className="button" target="_blank">
                     <WhatsappLogo size={32} />
                     Entrar em contato
                  </a>


               </div>

               {window.innerWidth > 768
            ? 
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1127.7873206198406!2d-51.163444399999996!3d-23.296388900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fd8ad3a73474811!2zMjPCsDE3JzQ3LjAiUyA1McKwMDknNDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1669149520276!5m2!1spt-BR!2sbr" width="650" height="450" loading="lazy"></iframe>
            : 
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1127.7873206198406!2d-51.163444399999996!3d-23.296388900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fd8ad3a73474811!2zMjPCsDE3JzQ3LjAiUyA1McKwMDknNDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1669149520276!5m2!1spt-BR!2sbr" width="375" height="375" loading="lazy"></iframe>
            }

            </div>
         </div>
         
      </section>
   )
}
