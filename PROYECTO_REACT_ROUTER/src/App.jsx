import { Routes, Route } from 'react-router-dom'
import  Layout   from './layout'
import Inicio   from './inicio'
import SobreNosotros from './sobreNosotros'
import Clientes from './clientes'
import Contacto from './contacto'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Layout envuelve todas las páginas (navbar + footer) */}
          <Route path="/" element={<Layout />}>
          <Route index           element={<Inicio />} />
          <Route path="SobreNosostros" element={<SobreNosotros />} />
          <Route path="clientes"  element={<Clientes />} />
          <Route path="contacto"  element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
