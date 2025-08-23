import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Rag } from "./pages/Rag"
import { Explore } from "./pages/Explore"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rag" element={<Rag/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </>
  )
}

export default App
