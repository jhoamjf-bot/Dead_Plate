import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────
   SOBRE NOSOTROS
───────────────────────────────────── */
export default function SobreNosotros() {

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

  const valores = [
    { num: '01', titulo: 'OSCURIDAD', desc: 'Operamos en las sombras donde nadie más se atreve a cocinar.' },
    { num: '02', titulo: 'MISTERIO',  desc: 'Cada ingrediente tiene un origen que es mejor no preguntar.' },
    { num: '03', titulo: 'LEALTAD',   desc: 'Una vez que pruebas nuestros platos, no querrás ir a ningún otro lugar.' },
    { num: '04', titulo: 'ETERNIDAD', desc: 'Nuestras recetas llevan siglos perfeccionándose. Literalmente.' },
  ]

  const servicios = [
    { num: '01', titulo: 'HAUTE CUISINE MORTUORIA',    desc: 'Creaciones culinarias de otro mundo, con ingredientes cosechados al filo de la medianoche.' },
    { num: '02', titulo: 'CENAS PRIVADAS EN EL SÓTANO', desc: 'Experiencias íntimas para grupos pequeños que buscan algo más que una simple cena.' },
    { num: '03', titulo: 'BANQUETES DE DESPEDIDA',     desc: 'Celebra el fin de una etapa como merece: con sangre, velas y un menú de temporada.' },
    { num: '04', titulo: 'CATERING ESPECTRAL',         desc: 'Llevamos nuestra propuesta gastronómica a tu evento. No aplica para bodas de día.' },
    { num: '05', titulo: 'CLUB DE DEGUSTACIÓN',        desc: 'Membresía mensual con acceso a platos exclusivos y acceso prioritario al sótano principal.' },
    { num: '06', titulo: 'MARIDAJE DE ALMAS',          desc: 'Nuestro sommelier espectral selecciona el vino perfecto para cada momento de tu despedida.' },
  ]

  return (
    <div className="nosotros-page">

      {/* ══ PAGE HERO ══ */}
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="section-tag">SOBRE NOSOTROS</span>
          <h1>QUIÉNES SOMOS<br/>Y QUÉ COCINAMOS</h1>
          <p>
            Dead Plate no es solo un restaurante. Es un pacto, una experiencia
            y, para algunos afortunados, una última voluntad hecha realidad.
          </p>
        </div>
      </div>

      {/* ══ HISTORIA ══ */}
      <section className="historia-section">
        <div className="historia-grid">

          {/* Imagen / ilustración pixel */}
          <div className="animate-up" ref={ref(0)}>
            <div className="historia-imagen">
                <img 
                  src="https://static.wikia.nocookie.net/deadplate/images/b/be/Officialvinceyart.webp/revision/latest/thumbnail/width/360/height/360?cb=20240205121150" alt="Dead Plate" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div className="historia-badge">
                <strong>XIII</strong>
                <span>SIGLOS SIRVIENDO</span>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="historia-texto">
            <span className="section-tag animate-up" ref={ref(1)}>NUESTRA HISTORIA</span>
            <h2 className="section-titulo animate-up" ref={ref(2)} style={{ textAlign: 'left', marginBottom: '16px' }}>
              FUNDADOS EN<br/>LA OSCURIDAD
            </h2>
            <div className="section-linea animate-up" ref={ref(3)} style={{ margin: '0 0 28px' }} />

            <div className="animate-up" ref={ref(4)}>
              <p>
                Dead Plate abrió sus puertas —o más bien su trampilla— en una noche
                sin luna de 1887. Nuestro fundador, el enigmático Chef R.,
                prometió crear un restaurante donde cada plato contara una historia…
                aunque esa historia nadie pudiera repetirla después.
              </p>
              <p>
                A lo largo de los siglos hemos perfeccionado el arte de la hospitalidad
                oscura. Cada rincón de nuestro establecimiento está impregnado de
                memorias, secretos y la esencia de quienes nos visitaron antes que tú.
              </p>
              <p>
                Hoy somos el destino gastronómico más perturbador de la región,
                con una lista de espera que, curiosamente, solo crece.
              </p>
            </div>

            <Link to="/contacto" className="btn btn-rojo animate-up" ref={ref(5)}
              style={{ marginTop: '20px' }}>
              🕯 HACER UNA RESERVA
            </Link>
          </div>

        </div>
      </section>

      {/* ══ VALORES ══ */}
      <section className="valores-section">
        <div className="section-header">
          <span className="section-tag">LO QUE NOS DEFINE</span>
          <h2 className="section-titulo animate-up" ref={ref(6)}>NUESTROS VALORES</h2>
          <div className="section-linea" />
        </div>

        <div className="valores-grid">
          {valores.map((v, i) => (
            <div key={i} className="valor-item animate-up" ref={ref(7 + i)}
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="valor-num">{v.num}</span>
              <h3>{v.titulo}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS ══ */}
      <section className="servicios-section">
        <div className="section-header">
          <span className="section-tag">LO QUE OFRECEMOS</span>
          <h2 className="section-titulo animate-up" ref={ref(11)}>NUESTROS SERVICIOS</h2>
          <div className="section-linea" />
        </div>

        <div className="servicios-list">
          {servicios.map((s, i) => (
            <div key={i} className="servicio-item animate-up" ref={ref(12 + i)}
              style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
              <span className="servicio-num">{s.num}</span>
              <div className="servicio-info">
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
