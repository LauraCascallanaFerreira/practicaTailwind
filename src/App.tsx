
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ejer01 from './pages/Ejer01'
import Ejer02 from './pages/Ejer02'
import Layout from './pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="E1" element={<Ejer01/>}/>
          <Route path="E2" element={<Ejer02/>}/>
          <Route path="*" element={<Ejer02/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
