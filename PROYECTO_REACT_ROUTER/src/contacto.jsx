import { useState, useEffect, useRef } from 'react'

/* ─────────────────────────────────────
   CONTACTO — Formulario
───────────────────────────────────── */
export default function Contacto() {

  const [form, setForm]     = useState({
    nombre: '', apellido: '', email: '',
    prefTel: '+57', telefono: '',
    prefWa: '+57',  whatsapp: '',
    servicio: '', mensaje: '',
  })
  const [errores, setErrores]   = useState({})
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado]   = useState(false)

  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])
  const ref = i => el => { refs.current[i] = el }

  const cambiar = e => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errores[name]) setErrores(p => ({ ...p, [name]: '' }))
  }

  const validar = () => {
    const e = {}
    if (!form.nombre.trim())  e.nombre  = 'Campo requerido'
    if (!form.apellido.trim())e.apellido = 'Campo requerido'
    if (!form.email.trim())   e.email   = 'Campo requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido'
    if (!form.servicio)       e.servicio = 'Selecciona un servicio'
    if (!form.mensaje.trim()) e.mensaje  = 'Campo requerido'
    return e
  }

  const enviar = e => {
    e.preventDefault()
    const e2 = validar()
    if (Object.keys(e2).length) { setErrores(e2); return }
    setEnviando(true)
    setTimeout(() => { setEnviando(false); setEnviado(true) }, 1400)
  }

  const prefijos = [
    { cod: '+57', bandera: '🇨🇴' }, { cod: '+1',  bandera: '🇺🇸' },
    { cod: '+52', bandera: '🇲🇽' }, { cod: '+54', bandera: '🇦🇷' },
    { cod: '+56', bandera: '🇨🇱' }, { cod: '+51', bandera: '🇵🇪' },
    { cod: '+34', bandera: '🇪🇸' },
  ]

  const servicios = [
    'Haute Cuisine Mortuoria',
    'Cena Privada en el Sótano',
    'Banquete de Despedida',
    'Catering Espectral',
    'Club de Degustación',
    'Maridaje de Almas',
    'Otro (consultar con el Chef)',
  ]

  const infoItems = [
    { icono: '📧', titulo: 'CORREO ESPECTRAL', valor: 'info@deadplate.com' },
    { icono: '☎',  titulo: 'LÍNEA DIRECTA',   valor: '+57 (1) 666 5678' },
    { icono: '💬', titulo: 'WHATSAPP',         valor: '+57 300 666 7777' },
    { icono: '📍', titulo: 'UBICACIÓN',        valor: 'Sótano #13, El Otro Lado' },
    { icono: '🕯', titulo: 'HORARIO',          valor: 'Martes a Domingo · 8PM – Hasta que se apaguen las velas' },
  ]

  return (
    <div className="contacto-page">

      {/* ══ PAGE HERO ══ */}
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="section-tag">CONTÁCTENOS</span>
          <h1>ENVÍA TU ÚLTIMA<br/>SOLICITUD</h1>
          <p>
            Escríbenos. Nuestro Chef R. revisa personalmente cada mensaje.
            Responde cuando está de humor, que no siempre es el caso.
          </p>
        </div>
      </div>

      {/* ══ FORMULARIO + INFO ══ */}
      <section className="contacto-seccion">
        <div className="contacto-grid">

          {/* ── Info ── */}
          <div className="contacto-info animate-up" ref={ref(0)}>
            <span className="section-tag">INFORMACIÓN DE CONTACTO</span>
            <h2>ESTAMOS EN<br/>LA OSCURIDAD</h2>
            <div className="section-linea" style={{ margin: '12px 0 20px' }} />
            <p>
              Si has llegado hasta aquí, significa que estás listo para la experiencia.
              Escríbenos y uno de nuestros sirvientes espectrales se pondrá en contacto contigo…
              pronto.
            </p>

            <div className="info-items">
              {infoItems.map((item, i) => (
                <div key={i} className="info-item">
                  <div className="info-icono">{item.icono}</div>
                  <div className="info-texto">
                    <strong>{item.titulo}</strong>
                    <span>{item.valor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Formulario ── */}
          <div className="animate-up" ref={ref(1)} style={{ transitionDelay: '0.15s' }}>

            {!enviado ? (
              <div className="form-wrap">
                <h3>🩸 COMPLETA TU PACTO</h3>
                <p>Los campos marcados con * son obligatorios</p>

                <form onSubmit={enviar} noValidate>

                  {/* Nombre + Apellido */}
                  <div className="form-fila">
                    <div className="form-grupo">
                      <label htmlFor="nombre">NOMBRE *</label>
                      <input id="nombre" name="nombre" type="text"
                        placeholder="Tu nombre" value={form.nombre} onChange={cambiar} />
                      {errores.nombre && <span className="input-nota" style={{ color: 'var(--rojo-vivo)' }}>⚠ {errores.nombre}</span>}
                    </div>
                    <div className="form-grupo">
                      <label htmlFor="apellido">APELLIDO *</label>
                      <input id="apellido" name="apellido" type="text"
                        placeholder="Tu apellido" value={form.apellido} onChange={cambiar} />
                      {errores.apellido && <span className="input-nota" style={{ color: 'var(--rojo-vivo)' }}>⚠ {errores.apellido}</span>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-grupo">
                    <label htmlFor="email">CORREO ELECTRÓNICO *</label>
                    <input id="email" name="email" type="email"
                      placeholder="tu@correo.com" value={form.email} onChange={cambiar} />
                    {errores.email && <span className="input-nota" style={{ color: 'var(--rojo-vivo)' }}>⚠ {errores.email}</span>}
                  </div>

                  {/* Teléfono */}
                  <div className="form-grupo">
                    <label htmlFor="telefono">TELÉFONO</label>
                    <div className="prefijo-tel">
                      <select name="prefTel" value={form.prefTel} onChange={cambiar}>
                        {prefijos.map(p => (
                          <option key={p.cod} value={p.cod}>{p.bandera} {p.cod}</option>
                        ))}
                      </select>
                      <input id="telefono" name="telefono" type="tel"
                        placeholder="300 123 4567" value={form.telefono} onChange={cambiar} />
                    </div>
                    <span className="input-nota">Opcional — para confirmación de reserva</span>
                  </div>

                  {/* WhatsApp */}
                  <div className="form-grupo">
                    <label htmlFor="whatsapp">WHATSAPP</label>
                    <div className="prefijo-tel">
                      <select name="prefWa" value={form.prefWa} onChange={cambiar}>
                        {prefijos.map(p => (
                          <option key={p.cod} value={p.cod}>{p.bandera} {p.cod}</option>
                        ))}
                      </select>
                      <input id="whatsapp" name="whatsapp" type="tel"
                        placeholder="300 123 4567" value={form.whatsapp} onChange={cambiar} />
                    </div>
                    <span className="input-nota">Opcional — número activo en WhatsApp</span>
                  </div>

                  {/* Servicio */}
                  <div className="form-grupo">
                    <label htmlFor="servicio">TIPO DE SERVICIO *</label>
                    <select id="servicio" name="servicio" value={form.servicio} onChange={cambiar}>
                      <option value="" disabled>Selecciona una experiencia...</option>
                      {servicios.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errores.servicio && <span className="input-nota" style={{ color: 'var(--rojo-vivo)' }}>⚠ {errores.servicio}</span>}
                  </div>

                  {/* Mensaje */}
                  <div className="form-grupo">
                    <label htmlFor="mensaje">MENSAJE / ÚLTIMAS PALABRAS *</label>
                    <textarea id="mensaje" name="mensaje"
                      placeholder="Cuéntanos qué buscas... o qué te trajo hasta aquí."
                      value={form.mensaje} onChange={cambiar} />
                    {errores.mensaje && <span className="input-nota" style={{ color: 'var(--rojo-vivo)' }}>⚠ {errores.mensaje}</span>}
                  </div>

                  <button type="submit" className="btn-enviar" disabled={enviando}>
                    {enviando ? '🕯 ENVIANDO TU PACTO...' : '🩸 FIRMAR Y ENVIAR'}
                  </button>

                </form>
              </div>
            ) : (
              /* ── Mensaje de éxito ── */
              <div className="form-wrap">
                <div className="form-exito">
                  <span className="exito-icono">🕯</span>
                  <h4>PACTO FIRMADO CON ÉXITO</h4>
                  <p>
                    Tu mensaje ha llegado al otro lado.<br />
                    El Chef R. lo ha recibido personalmente.<br />
                    Recibirás respuesta cuando las velas lo indiquen,<br />
                    generalmente en menos de 24 horas… mortales.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  )
}
