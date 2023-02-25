import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import SiteContainer from "./components/layout/SiteContainer";
import NotFound from "./pages/_error/NotFound";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/users/User";
axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:4000"


// (APP) STATE MANAGEMENT
// App.js
{/* <StateContext.Provider value={state}>
<DispatchContext.Provider value={dispatch}>
 <BrowserRouter>
   <Routes>
    <Route path="/" element={<Component />} />
   </Routes>
 </BrowserRouter>
</DispatchContext.Provider>
</StateContext.Provider> */}



function App() {
  return (
    <BrowserRouter>
      <SiteContainer>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />

          <Route path="*" element={<NotFound />} /> {/* 404 */}
        </Routes>
      </SiteContainer>
    </BrowserRouter>
  )
}

export default App;

{/* TODO:  NAVIGATION */}