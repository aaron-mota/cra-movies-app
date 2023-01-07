import SiteContainer from "./SiteContainer";
import "./App.css"

import axios from 'axios'
axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:4000"



function App() {


  return (
    <SiteContainer>
      Hello

      


    </SiteContainer>
  )
}

export default App;

