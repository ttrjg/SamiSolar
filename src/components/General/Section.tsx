import "./Section.css"

interface getData {
   Title: string,
   Content: string,
   img: string
   Color?: "blue" | undefined;
}

export function Section(props:getData) {
   return(
      <section id="ExecutiveProjects" className={props.Color}>
         
         <div className="parts">
            <div>  
            <h2>{props.Title}</h2>             
               <p>
                  {props.Content}
               </p>
            </div>

            <img src={props.img} alt="" />
         </div>
         
      </section>
   )
}