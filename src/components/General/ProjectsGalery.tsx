import "./ProjectsGalery.css"

interface getImages{
   images: string[]
}

export function ProjectsGalery(props: getImages) {


   return(
      <section id="ProjectsGalery">
         
         <div className="projectsHeader">

            <h2>Alguns de nossos projetos</h2>
         
         </div>

         <div className="projectsWrap">
            {props.images.map((image) =>(
               <img src={image}  />
            ))}
         </div>

      </section>
   )
}