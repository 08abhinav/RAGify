import { Route, Routes } from "react-router-dom"
import { Rag } from "./pages/Rag"
import { Explore } from "./pages/Explore"
import Index from "./pages/Index"
import { Docs } from "./pages/Docs"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/rag" element={<Rag/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/docs" element={<Docs/>}/>
      </Routes>
    </>
  )
}
export default App