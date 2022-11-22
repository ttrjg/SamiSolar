import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import {Header} from "./components/header/Header"
import { Router } from './Router'


function App() {

  return (
    <div className="w-full h-full flex flex-col">
        <BrowserRouter>
          <Header />
          <Router/>
          <Footer />
        </BrowserRouter>       
    </div>
  )
}

export default App
