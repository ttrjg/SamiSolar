import { Route, Routes } from "react-router-dom";
import { SolarEnergy } from "./pages/SolarEnergy";


export function Router() {

   return (
      
      <Routes>
         <Route path="/" element={<SolarEnergy/>}/>
      </Routes>
   )
}