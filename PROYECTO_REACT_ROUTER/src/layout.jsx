import { useState, useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

/* ─────────────────────────────────────
   LAYOUT — Navbar + Footer + Outlet
───────────────────────────────────── */
export default function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolled, setScrolled]       = useState(false)

  // Sombra extra en navbar al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <>
      {/* ══ NAVBAR ══ */}
      <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 30px rgba(139,0,0,0.6)' } : {}}>
        <div className="navbar-inner">

          {/* Logo */}
          <NavLink to="/" className="navbar-logo" onClick={cerrarMenu}>
            <span>🍽️</span> DEAD PLATE
          </NavLink>

          {/* Links escritorio */}
          <ul className={`navbar-links${menuAbierto ? ' abierto' : ''}`}>
            <li>
              <NavLink to="/"
                end
                className={({ isActive }) => isActive ? 'activo' : ''}
                onClick={cerrarMenu}
              >
                ☠ Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/SobreNosostros"
                className={({ isActive }) => isActive ? 'activo' : ''}
                onClick={cerrarMenu}
              >
                🩸 Sobre Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/clientes"
                className={({ isActive }) => isActive ? 'activo' : ''}
                onClick={cerrarMenu}
              >
                👁 Clientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto"
                className={({ isActive }) => isActive ? 'activo' : ''}
                onClick={cerrarMenu}
              >
                🕯 Contáctenos
              </NavLink>
            </li>
          </ul>

          {/* Toggle móvil */}
          <button
            className="navbar-toggle"
            aria-label="Abrir menú"
            onClick={() => setMenuAbierto(p => !p)}
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* ══ CONTENIDO DE CADA PÁGINA ══ */}
      <main>
        <Outlet />
      </main>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="footer-grid">

          <div className="footer-brand">
            <NavLink to="/" className="navbar-logo">
              <span>🍽️</span> DEAD PLATE
            </NavLink>
            <p>
              Un lugar donde la última cena se convierte en una experiencia
              que nunca olvidarás… si es que logras recordarla.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><NavLink to="/">☠ Inicio</NavLink></li>
              <li><NavLink to="/SobreNosostros">🩸 Sobre Nosotros</NavLink></li>
              <li><NavLink to="/clientes">👁 Clientes</NavLink></li>
              <li><NavLink to="/contacto">🕯 Contáctenos</NavLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:info@deadplate.com">📧 info@deadplate.com</a></li>
              <li><a href="tel:+573001234567">☎ +57 300 123 4567</a></li>
              <li><a href="#">📍 El Otro Lado</a></li>
            </ul>
          </div>

        </div>

        <div className="blood-drip" />

        <div className="footer-bottom">
          <p>© 2025 Dead Plate Restaurant · Todos los derechos (y almas) reservados</p>
        </div>
      </footer>
    </>
  )
}
