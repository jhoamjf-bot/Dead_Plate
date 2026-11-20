import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────
   INICIO — Página principal
───────────────────────────────────── */
export default function Inicio() {

  // Scroll reveal
  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const ref = (i) => (el) => { refs.current[i] = el }

  // Animación de contadores
  useEffect(() => {
    const contadores = document.querySelectorAll('.stat-num[data-target]')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el     = e.target
        const target = parseInt(el.dataset.target)
        const suffix = el.dataset.suffix || ''
        const dur    = 1600
        const step   = target / (dur / 16)
        let cur      = 0
        const tick   = () => {
          cur = Math.min(cur + step, target)
          el.textContent = Math.floor(cur).toLocaleString() + suffix
          if (cur < target) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })
    contadores.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  const servicios = [
    { icono: '🍷', titulo: 'GASTRONOMÍA\nDEL ABISMO', desc: 'Menús diseñados con ingredientes que solo existen en el umbral entre la vida y la muerte.' },
    { icono: '🕯', titulo: 'AMBIENTE\nENCANTADO', desc: 'Una atmósfera cuidadosamente curada para que cada visita sea tu última experiencia memorable.' },
    { icono: '🩸', titulo: 'SERVICIO\nINOLVIDABLE', desc: 'Nuestro equipo de camareros espectrales te atenderá hasta el último aliento de la velada.' },
  ]

  return (
    <div className="inicio-page">

      {/* ══ HERO ══ */}
      <section className="hero">
        {/* Píxeles decorativos */}
        {['🕯','🔪','🩸','💀','🍽'].map((e, i) => (
          <span key={i} className="hero-pixel-deco">{e}</span>
        ))}

        <div className="hero-content">
          <div className="hero-subtitulo">
            RESTAURANTE MALDITO
          </div>

          <h1
            className="hero-titulo"
            data-text="DEAD PLATE"
          >
            DEAD PLATE
          </h1>

          <p className="hero-subtitulo-2">— DONDE CADA PLATO ES UNA DESPEDIDA —</p>

          <p className="hero-desc">
            Bienvenido al establecimiento más oscuro de la ciudad.
            Aquí no solo se sirve comida… se sirven secretos,
            promesas rotas y algo que preferiría no nombrar.
          </p>

          <div className="hero-botones">
            <Link to="/SobreNosostros" className="btn btn-rojo">
              ☠ VER EL MENÚ
            </Link>
            <Link to="/contacto" className="btn btn-oscuro">
              🕯 HACER RESERVA
            </Link>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div className="stats-bar">
        <div className="stats-grid">
          {[
            { num: 666,  suffix: '+', label: 'Almas servidas'    },
            { num: 13,   suffix: '',  label: 'Años en el abismo' },
            { num: 99,   suffix: '%', label: 'Sin escapatoria'   },
            { num: 0,    suffix: '',  label: 'Supervivientes'    },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-num" data-target={s.num} data-suffix={s.suffix}>
                0{s.suffix}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SERVICIOS PREVIEW ══ */}
      <section className="menu-section">
        <div className="section-header">
          <span className="section-tag" ref={ref(0)}>LO QUE OFRECEMOS</span>
          <h2 className="section-titulo animate-up" ref={ref(1)}>NUESTROS PLACERES OSCUROS</h2>
          <div className="section-linea" />
        </div>

        <div className="menu-grid">
          {servicios.map((s, i) => (
            <div key={i} className="menu-card animate-up" ref={ref(i + 2)}
              style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="card-icono">{s.icono}</span>
              <h3 className="card-titulo">{s.titulo}</h3>
              <p className="card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="cta-section">
        <h2 className="cta-titulo animate-up" ref={ref(5)}>
          ¿ESTÁS LISTO PARA TU<br/>ÚLTIMA CENA?
        </h2>
        <p className="cta-subtexto animate-up" ref={ref(6)}>
          La reserva es gratuita. La salida... no tanto.
        </p>
        <Link to="/contacto" className="btn btn-rojo animate-up" ref={ref(7)}>
          🩸 RESERVAR AHORA
        </Link>
      </section>

    </div>
  )
}
