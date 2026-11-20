import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────
   CLIENTES — Testimonios
───────────────────────────────────── */
export default function Clientes() {

  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])
  const ref = i => el => { refs.current[i] = el }

  const testimonios = [
    {
      iniciales: 'LP',
      nombre: 'Luka P.',
      cargo: 'Músico desaparecido',
      estrellas: '★★★★★',
      texto: 'Vine a cenar el martes. El menú era… peculiar. El Chef R. se acercó a mi mesa y me susurró algo al oído. No recuerdo qué dijo, pero desde entonces no he vuelto a sentir frío. Muy recomendable.',
    },
    {
      iniciales: 'MK',
      nombre: 'Marie K.',
      cargo: 'Última ubicación conocida: Dead Plate',
      estrellas: '★★★★★',
      texto: 'Pedí el plato especial de temporada. Llegó cubierto con una campana de plata que el camarero nunca levantó. Simplemente dijo "ya lo sabrás cuando llegue el momento". Fue la mejor cena de mi vida.',
    },
    {
      iniciales: '??',
      nombre: 'Cliente anónimo',
      cargo: 'Reseña encontrada en la pared del sótano',
      estrellas: '★★★★★',
      texto: 'No sé cómo llegué aquí. No sé cómo salí. Pero sé que la crema de calabaza tenía un sabor que no puedo describir con palabras humanas. Cinco estrellas sin dudar.',
    },
    {
      iniciales: 'RV',
      nombre: 'Renée V.',
      cargo: 'Crítica gastronómica (retirada)',
      estrellas: '★★★★★',
      texto: 'Llevo 20 años reseñando restaurantes. Nunca había llorado durante una cena hasta que probé el postre del Chef R. Lágrimas de qué, exactamente, prefiero no especificarlo.',
    },
    {
      iniciales: 'TC',
      nombre: 'Thomas C.',
      cargo: 'Detective privado',
      estrellas: '★★★★★',
      texto: 'Entré a investigar el lugar. Salí tres horas después con el mejor filete que he comido en mi vida y muchas preguntas sin respuesta. Volveré, aunque no debería.',
    },
    {
      iniciales: 'NR',
      nombre: 'Nora R.',
      cargo: 'Escritora de terror',
      estrellas: '★★★★★',
      texto: 'Vengo cada mes por inspiración. Los muros de Dead Plate me han dado más material que diez años de investigación. El vino de la casa sabe a tinta y despedidas. Lo recomiendo.',
    },
  ]

  const logos = ['THE VOID TIMES', 'SPECTRAL DAILY', 'ABISMO GOURMET', 'LA ÚLTIMA CENA', 'PIXEL HORROR', 'DARK DIGEST']

  return (
    <div className="clientes-page">

      {/* ══ PAGE HERO ══ */}
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="section-tag">NUESTROS CLIENTES</span>
          <h1>VOCES DESDE<br/>EL OTRO LADO</h1>
          <p>
            Algunos volvieron para contarlo. Otros nos dejaron su reseña
            en circunstancias que preferiríamos no detallar.
          </p>
        </div>
      </div>

      {/* ══ TESTIMONIOS ══ */}
      <section style={{ padding: '80px 24px', background: 'var(--negro)' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-tag">TESTIMONIOS</span>
            <h2 className="section-titulo animate-up" ref={ref(0)}>HISTORIAS DE NUESTROS COMENSALES</h2>
            <div className="section-linea" />
          </div>

          <div className="testimonios-grid">
            {testimonios.map((t, i) => (
              <div key={i} className="testimonio-card animate-up" ref={ref(1 + i)}
                style={{ transitionDelay: `${(i % 3) * 0.12}s` }}>
                <span className="estrellas">{t.estrellas}</span>
                <span className="comilla">"</span>
                <p className="testimonio-texto">{t.texto}</p>
                <div className="autor">
                  <div className="autor-avatar">{t.iniciales}</div>
                  <div className="autor-info">
                    <strong>{t.nombre}</strong>
                    <span>{t.cargo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOGOS / MEDIOS ══ */}
      <div className="clientes-logos">
        <span className="logos-etiqueta">Mencionados en medios de dudosa reputación</span>
        <div className="logos-row">
          {logos.map((l, i) => (
            <span key={i} className="logo-cliente">{l}</span>
          ))}
        </div>
      </div>

      {/* ══ CTA ══ */}
      <section className="cta-section">
        <h2 className="cta-titulo animate-up" ref={ref(7)}>
          ¿QUIERES SER PARTE<br/>DE NUESTRA HISTORIA?
        </h2>
        <p className="cta-subtexto animate-up" ref={ref(8)}>
          Reserva tu lugar antes de que ya no sea necesario.
        </p>
        <Link to="/contacto" className="btn btn-rojo animate-up" ref={ref(9)}>
          🩸 UNIRTE A LOS ELEGIDOS
        </Link>
      </section>

    </div>
  )
}
