import { Routes, Route } from "react-router-dom"


//Routing

import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {

  return (

    <Routes  >

      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />

    </Routes>


  )
}

export default App
