import { ChartBar, ChartLineUp, CircleWavyCheck, HouseLine, Money } from 'phosphor-react'
import './InvestSolarEnergy.css'

export function InvestSolarEnergy() {
   return(
      <section id="InvestSolarEnergy">
            <div id="title">
               <h1>Energia Solar</h1>
               
            </div>
            
            <h2>Porque Investir em Energia Solar?</h2>

            <div className="CardWrapper">               
               <div className="Card">
               <Money size={80} color="#0083ff" />
                  <div>
                     <h3>Economia de energia</h3>
                     <div className="divider"></div> 
                  </div>
                  <p>
                  Com até 95% de redução em sua conta, não se preocupe com aumentos nas tarifas energéticas e viabilize seus planos reduzindo os seus gastos.
                  </p>
               </div>
               <div className="Card">
                  <ChartBar size={80} color="#0083ff"  />
                  <div>
                     <h3>Investimento Seguro</h3>
                     <div className="divider"></div>
                  </div>
                  <p>
                  Geração garantida por 25 anos e com baixo custo de manutenção, se torna um dos insvestimentos mais seguros.
                  </p>
               </div>
               <div className="Card">
                  <HouseLine size={80} color="#0083ff" />
                  <div>
                     <h3>Valorização do imóvel</h3>
                     <div className="divider"></div>
                  </div>
                  <p>
                  A instalação do sistema gera imediata valorização do imóvel, em média de 10%, de acordo com a capacidade instalada.
                  </p>
               </div>
               <div className="Card">
               <CircleWavyCheck size={80} color="#0083ff" />
                  <div>
                     <h3>Baixa Manutenção</h3>
                     <div className="divider"></div>
                  </div>
                  <p>
                  Utilizamos equipamentos da melhor qualidade, assim garantindo a confiabilidade de seu sistema, sem manutenções exaustivas, apenas uma limpeza periódica!
                  </p>
               </div>

            </div>
      </section>
   )
}