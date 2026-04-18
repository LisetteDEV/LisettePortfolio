import { motion, useAnimationFrame } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import AnimatedFrame from './AnimatedFrame'

const GITHUB_URL = 'https://github.com/LisetteDEV'

const floatingCards = [
  { label:'Clean code', position: 'top-[15%] right-[0%]', delay: 0 },
  { label: 'SEO', position: 'top-[50%] right-[-4%]', delay: 0.5 },
  { label: 'Design pro', position: 'bottom-[15%] right-[2%]', delay: 1 },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

function TypeWriter({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, 250)
    return () => clearTimeout(timer)
  }, [started, displayed, text])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="inline-block w-0.5 h-8 bg-[#C0001A] ml-1 animate-pulse" />
      )}
    </span>
  )
}

function DevAdvancedReveal({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started || !text) return
    
    const strText = String(text)
    const chars = '!<>-_\\/[]{}—=+*^?#________'
    let iteration = 0
    
    const interval = setInterval(() => {
      setDisplayed(() => 
        strText.split('').map((char, index) => {
          if (index < Math.floor(iteration)) return strText[index]
          if (index < Math.floor(iteration) + 4) {
            return char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
          }
          return ''
        }).join('')
      )
      
      if (iteration >= strText.length) {
        clearInterval(interval)
        setDisplayed(strText)
        setIsCompleted(true)
      }
      iteration += 0.8
    }, 30)

    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span className="relative block w-full">
      <span className="invisible opacity-0 pointer-events-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 w-full h-full">
        {displayed}
        {!isCompleted && started && (
           <span className="inline-block w-[3px] h-[0.9em] bg-[#C0001A] ml-1 align-baseline animate-pulse" />
        )}
      </span>
    </span>
  )
}

function RotatingBorder() {
  const ref = useRef(null)
  useAnimationFrame((t) => {
    if (ref.current) {
      ref.current.style.transform = `rotate(${t * 0.04}deg)`
    }
  })

  return (
    <div ref={ref} className="absolute inset-[-8px] rounded-2xl border-2 border-transparent" style={{
      background: 'linear-gradient(#0D0D0D, #0D0D0D) padding-box, conic-gradient(from 0deg, #C0001A, #5E0006, #0D0D0D, #C0001A) border-box',
      borderRadius: '18px',
    }} />
  )
}

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="accueil" className="relative min-h-screen bg-[#0D0D0D] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,0,6,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(94,0,6,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5E0006]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col gap-6">
          <motion.p {...fadeUp(0.1)} className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">
            {t('hero.greeting')}
          </motion.p>

          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }} className="text-5xl md:text-6xl font-bold text-[#F5F5F5] leading-tight">
            <TypeWriter text="Lisette " delay={0.3} />
            <span className="text-[#C0001A]">
              <TypeWriter text="OBOGNON" delay={2} />
            </span>
          </motion.h1>

          <motion.h2 {...fadeUp(0.3)} className="text-xl md:text-2xl text-[#F5F5F5]/60 font-light">
            <DevAdvancedReveal text={t('hero.title')} delay={2.5} />
          </motion.h2>

          <motion.p {...fadeUp(0.4)} className="text-[#F5F5F5]/50 text-base leading-relaxed max-w-md">
            <DevAdvancedReveal text={t('hero.description')} delay={3.5} />
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mt-2">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="bg-[#C0001A] hover:bg-[#FF1F3A] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
              {t('hero.cta_primary')}
            </a>
            <a href="#contact" className="border border-[#5E0006] hover:border-[#C0001A] text-[#F5F5F5] hover:text-[#C0001A] px-6 py-3 rounded-md font-medium transition-all duration-200">
              {t('hero.cta_secondary')}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-[500px]">
            <RotatingBorder />
            <AnimatedFrame borderRadius={16} />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161616] ring-2 ring-[#C0001A]/60">
              <img src="about.jpeg" alt="Lisette Obognon — Développeuse web fullstack" className="w-full h-full object-cover object-top" width="384" height="500" fetchpriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
            </div>
          </div>

          {floatingCards.map((card, i) => (
  <motion.div
    key={card.label}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
    className={`absolute ${card.position} bg-[#161616] border border-[#5E0006]/40 rounded-xl px-4 py-2.5 flex items-center gap-2`}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
      className="flex items-center gap-2"
    >
      <span className="w-2 h-2 rounded-full bg-[#C0001A]" />
      <span className="text-[#F5F5F5] text-sm font-medium">{card.label}</span>
    </motion.div>
  </motion.div>
))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
