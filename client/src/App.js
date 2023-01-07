import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import SiteContainer from "./components/layout/SiteContainer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Users from "./pages/Users";
axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:4000"



function App() {
  return (
    <BrowserRouter>
      <SiteContainer>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users />} />

          {/* 404 */}<Route path="*" element={<NotFound />} />
        </Routes>
      </SiteContainer>
    </BrowserRouter>
  )
}

export default App;

{/* TODO:  NAVIGATION */}