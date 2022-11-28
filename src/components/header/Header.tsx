
import { List, X } from "phosphor-react"
import { useState } from "react"

import logo from "../../assets/logo2.png"

import "./header.css"

export function Header(){  

   function activeSectionByScroll() {
      const sections = document.querySelectorAll("section")

      sections.forEach((element) =>{
         let links = document.querySelectorAll("header a")

         if (((window.scrollY+1) >= element.offsetTop) && (window.scrollY < (element.offsetTop + element.offsetHeight))) {
            links.forEach((link) => {link.classList.remove("active")
            let id:any = link.getAttribute("href")?.toString()
            
               if ((id.replace("/#","")) === element.getAttribute('id')){
                  link.classList.add("active")
               }
            })            
         }
      })      
      
   }

   document.addEventListener("scroll", activeSectionByScroll) 

   const [modalActive, setModalActive] = useState(false)

   function toggleStatus(){
      setModalActive(!modalActive)
      console.log(modalActive)
      const open:any = document.querySelector(".Open")
      const close:any = document.querySelector(".Close")
      const modal:any = document.querySelector(".Modal")
      modalActive ? (   
         open.classList.remove("hidden"),
         close.classList.add("hidden"),
         modal.classList.add("hidden")
      ) :
      (
         open.classList.add("hidden"),
         close.classList.remove("hidden"),
         modal.classList.remove("hidden")
      )
   }

   return(
      
      <header>
         <div className="content">
            <a href="/#" className="logo"><img src={logo} alt="" /></a>                 

            {window.innerWidth > 768
            ? 
               <nav>
               <ul>
                  <li>
                     <a href="/#home" > Home</a>  
                  </li>
                  <li>
                     <a href="/#InvestSolarEnergy" > Energia Solar</a>         
                  </li>
                  <li>
                     <a href="/#SamiSolar" > Sami Solar</a>  
                  </li>
                  <li>
                     <a href="/#Brands" > Marcas</a>  
                  </li>
                  <li>
                     <a href="/#contact" > Contato</a>  
                  </li>
               </ul>
               </nav>
            : 
               <div className="ModalMenu">
                  <List size={34} className="Open" onClick={toggleStatus} color="White"/>
                  <X size={34} className="Close hidden" onClick={toggleStatus} color="White"/>
                     <div className="Modal hidden">
                        <ul>
                              <li>
                                 <a href="/#" onClick={toggleStatus}> Home</a>  
                              </li>
                              <li>
                                 <a href="/#InvestSolarEnergy" onClick={toggleStatus}> Energia Solar</a>         
                              </li>
                              <li>
                                 <a href="/#SamiSolar" onClick={toggleStatus}> Sami Solar</a>  
                              </li>
                              <li>
                                 <a href="/#Brands" onClick={toggleStatus}> Marcas</a>  
                              </li>
                              <li>
                                 <a href="/#contact" onClick={toggleStatus}> Contato</a>  
                              </li>
                        </ul>
                     </div>
               </div>
            }

         </div>       
      </header>

      
   )
}
   
   