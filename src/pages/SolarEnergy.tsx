import { Contact } from "../components/General/Contact";
import { Brands } from "../components/SolarComponents/Brands";
import { InvestSolarEnergy } from "../components/SolarComponents/InvestSolarEnergy";
import { Banner } from "../components/General/Banner";
import { WhyIsp } from "../components/SolarComponents/WhyIsp";
import { ProjectsGalery } from "../components/General/ProjectsGalery";


export function SolarEnergy() {
   
   function scrollTop() {
      window.scrollTo({
         top:0,
         behavior:"smooth"
      })
   }


   setTimeout(scrollTop,5)
   
   return (
    <div>
         <Banner 
            img="/src/assets/Banners/SolarBanner3.jpg"
            content="ESTEJA PRONTO PARA o futuro"
         />
         <InvestSolarEnergy />
         <WhyIsp />
         <Brands />
         <Contact /> 
      </div>
   )
}

<ProjectsGalery
            images={[
               '/src/assets/SolarProjects/UsinaARTSUL.png',
               '/src/assets/SolarProjects/UsinaJaperi.png',
               '/src/assets/SolarProjects/Usinaaviario.png',
               '/src/assets/SolarProjects/UsinaHakme.png',
               '/src/assets/SolarProjects/UsinaBelinati.png',
               '/src/assets/SolarProjects/UsinaFlorestopolis.png',
               '/src/assets/SolarProjects/UsinaSolo.png',
               '/src/assets/SolarProjects/UsinaKim.png',
               '/src/assets/SolarProjects/UsinaCasa.png'
            ]}
         />