import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { IoSchool } from 'react-icons/io5'
import AnimatedFrame from './AnimatedFrame'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.1, 1] } 
  }
}

const stats = [
  { target: 2, suffix: '+', label: { fr: "Ans d'expérience", en: 'Years of experience' } },
  { target: 10, suffix: '+', label: { fr: 'Projets réalisés', en: 'Projects completed' } },
  { target: 100, suffix: '%', label: { fr: 'Passion & rigueur', en: 'Passion & rigor' } },
]

function Counter({ target, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: 'easeOut' })
    }
  }, [inView, count, target])

  return (
    <span ref={ref} className="text-3xl font-bold text-[#C0001A]">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="apropos" className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#5E0006]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
              initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.1, 1] }}
              className="relative flex justify-center pt-8 order-2 md:order-1"
           >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-80 h-96 md:w-96 md:h-[480px]"
            >
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-[#C0001A]/20" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#5E0006]/20" />
              <AnimatedFrame borderRadius={16} />
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161616] border border-[#5E0006]/30 ring-2 ring-[#C0001A]/60">
                <img src="PROFIL.jpeg" alt="Lisette Obognon développeuse web fullstack Parakou Bénin" className="w-full h-full object-cover object-top" width="384" height="500"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#161616] border border-[#5E0006]/40 rounded-xl px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#C0001A] animate-pulse" />
                <span className="text-[#F5F5F5] text-xs font-medium">{t('about.disponible')}</span>
              </div>
            </motion.div>
          </motion.div>

            <motion.div 
              className="flex flex-col gap-5 order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <motion.span variants={itemVariants} className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">
              {t('about.tag')}
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-[#F5F5F5] leading-tight">
              {t('about.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-[#F5F5F5]/60 leading-relaxed text-sm">
              {t('about.p1')}
            </motion.p>
            <motion.p variants={itemVariants} className="text-[#F5F5F5]/60 leading-relaxed text-sm">
              {t('about.p2')}
            </motion.p>
            <motion.p variants={itemVariants} className="text-[#F5F5F5]/60 leading-relaxed text-sm">
              {t('about.p3')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-[#C0001A] text-lg shrink-0" />
                <span className="text-[#F5F5F5]/70 text-sm">{t('about.location')}</span>
              </div>
              <div className="flex items-center gap-3">
                <IoSchool className="text-[#C0001A] text-lg shrink-0" />
                <span className="text-[#F5F5F5]/70 text-sm">{t('about.status')}</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-5 border-y border-[#5E0006]/20">
              {stats.map((stat) => (
                <div key={stat.suffix + stat.target} className="flex flex-col gap-1">
                  <Counter target={stat.target} suffix={stat.suffix} />
                  <span className="text-[#F5F5F5]/50 text-xs leading-tight">{stat.label[lang] || stat.label.fr}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="cv.pdf" download className="inline-flex items-center gap-2 bg-[#C0001A] hover:bg-[#FF1F3A] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
                {t('about.cta')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
