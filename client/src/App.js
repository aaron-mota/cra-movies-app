import SiteContainer from "./components/layout/SiteContainer";
import "./App.css"

import axios from 'axios'
import Users from "./components/layout/Users";
axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:4000"



function App() {
  return (
    <SiteContainer>
      Hello
      <Users />
    </SiteContainer>
  )
}

export default App;

