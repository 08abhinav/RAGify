import { Route, Routes } from "react-router-dom"
import { Rag } from "./pages/Rag"
import { Explore } from "./pages/Explore"
import Index from "./pages/Index"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/rag" element={<Rag/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </>
  )
}
export default App