import { Brain, Handshake, SketchLogo } from "phosphor-react"
import "./WhyIsp.css"

export function WhyIsp() {
   return (
      <div className="background" >
         <section id="SamiSolar">
            <div className="title">
               <h2>Porque a Sami Solar?</h2>
               <div className="divider"></div>
            </div>
            

            <div className="CardWrapper">               
               <div className="Card">
                  <Brain size={80} color="#F3d944" weight="duotone" />
                  <div>
                     <h3>Conhecimento</h3>
                     
                  </div>
                  <p>
                  Investir em energia solar através de uma escolha imparcial e segura, vamos compartilhar nosso conhecimento, você poderá tomar a melhor decisão.
                  </p>
               </div>
               <div className="Card"> 
                  <SketchLogo size={80} color="#F3d944" weight="duotone" />
                  <div>
                     <h3>Qualidade</h3>
                     
                  </div>               
                  <p>
                  Dimencionamento de acordo com a nessecidade de cada cliente visando economia e comodidade. Projetos elaborados por uma equipe com 5 anos de atuação no mercado,seguindo todas as normas da concessionaria
                  </p>
               </div>
               <div className="Card">
                  <Handshake size={80} color="#F3d944" weight="duotone" />
                  <div>
                     <h3>Tranquilidade</h3>
                     
                  </div>
                  <p>
                  Com sua fatura de energia podemos iniciar estudo de viabilidade técnica e financeira. Dimensionamos seu sistema de acordo com sua necessidade. Ofereceremos a melhor solução com total tranquilidade e comodidade.
                  </p>
               </div>
            </div>
      </section>
      </div>
      
   )
}