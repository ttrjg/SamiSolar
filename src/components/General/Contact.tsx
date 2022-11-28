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
                  
                  <div className="phone"><EnvelopeSimple size={32} /><p>sami.solar@hotmail.com</p></div>
                  <a href="https://api.whatsapp.com/send?phone=554399963605" className="button" target="_blank">
                     <WhatsappLogo size={32} />
                     Entrar em contato
                  </a>
                  

               </div>

               {window.innerWidth > 768
            ? 
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117243.28316562435!2d-51.23597447013018!3d-23.32110626951117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435a57af586d%3A0x23ac11a5c614f971!2sLondrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1669291890256!5m2!1spt-BR!2sbr" width="650" height="450" loading="lazy"></iframe>
            : 
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117243.28316562435!2d-51.23597447013018!3d-23.32110626951117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435a57af586d%3A0x23ac11a5c614f971!2sLondrina%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1669291890256!5m2!1spt-BR!2sbr" width="375" height="375" loading="lazy"></iframe>
            }

            </div>
         </div>
         
      </section>
   )
}
