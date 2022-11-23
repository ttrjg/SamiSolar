import { ChartBar, ChartLineUp, CircleWavyCheck, HouseLine, Money } from 'phosphor-react'
import './InvestSolarEnergy.css'

export function InvestSolarEnergy() {
   return(
      <section id="InvestSolarEnergy">
            <div id="title">
               <h1>Energia Solar</h1>
               <div className="divider"></div>
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
                  Diminuição de até 95% em sua fatura,podendo gerar creditos a serem abatidos em outras residencias de acordo com a usina instalada.
                  </p>
               </div>
               <div className="Card">
                  <ChartBar size={80} color="#0083ff"  />
                  <div>
                     <h3>Investimento Seguro</h3>
                     <div className="divider"></div>
                  </div>
                  <p>
                  Equipamentos com garantia de 25 anos, de baixa manutenção ,com retorno do investimento em até 5 anos.
                  </p>
               </div>
               <div className="Card">
                  <HouseLine size={80} color="#0083ff" />
                  <div>
                     <h3>Valorização do imóvel</h3>
                     <div className="divider"></div>
                  </div>
                  <p>
                  Valorização imediata do imovel de até 10%, além de colaborar com a sustentabilidade do planeta.
                  </p>
               </div>
               <div className="Card">
               <CircleWavyCheck size={80} color="#0083ff" />
                  <div>
                     <h3>Baixa Manutenção</h3>
                     <div className="divider"></div>
                  </div>
                  <p>
                  Sendo um sistema auto sustentavel, os geradores solares possuem módulos fotovoltaicos com baixicima manutenção , onde a própria chuva é a responsavel por sua limpeza
                  </p>
               </div>

            </div>
      </section>
   )
}