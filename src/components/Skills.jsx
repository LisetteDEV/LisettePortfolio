import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaFigma, FaCode } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiPostgresql, SiFirebase, SiCanva } from 'react-icons/si'

const categories = [
  {
    key: 'frontend',
    label: { fr: 'Frontend', en: 'Frontend' },
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    key: 'backend',
    label: { fr: 'Backend', en: 'Backend' },
    skills: [
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
    ],
  },
  {
    key: 'database',
    label: { fr: 'Bases de données', en: 'Databases' },
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    key: 'tools',
    label: { fr: 'Outils', en: 'Tools' },
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#F5F5F5' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'VS Code', icon: FaCode, color: '#007ACC' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, delay: i * 0.07, ease: 'easeOut' } }),
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon
  return (
    <motion.div variants={cardVariants} whileHover={{ y: -6, scale: 1.05 }} className="flex flex-col items-center gap-3 bg-[#161616] border border-[#5E0006]/30 hover:border-[#C0001A]/70 rounded-xl px-4 py-5 cursor-default transition-colors duration-200 group overflow-hidden relative">
      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6, ease: 'easeInOut' }} className="relative">
        <Icon style={{ color: skill.color }} className="text-4xl" />
        <motion.div whileHover={{ scale: 2.5, opacity: 0 }} initial={{ scale: 1, opacity: 0.15 }} className="absolute inset-0 rounded-full" style={{ backgroundColor: skill.color }} />
      </motion.div>
      <span className="text-[#F5F5F5]/70 text-xs font-medium text-center">{skill.name}</span>
    </motion.div>
  )
}

function Skills() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const [active, setActive] = useState('frontend')
  const current = categories.find((c) => c.key === active)

  return (
    <section id="competences" className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[350px] h-[350px] bg-[#5E0006]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">
            {lang === 'fr' ? 'Mes compétences' : 'My skills'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-3">
            {lang === 'fr' ? 'Technologies & Outils' : 'Technologies & Tools'}
          </h2>
          <p className="text-[#F5F5F5]/50 text-sm mt-3 max-w-md mx-auto">
            {lang === 'fr' ? "Les technologies que j'utilise pour créer des expériences web modernes." : 'The technologies I use to build modern web experiences.'}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button key={cat.key} onClick={() => setActive(cat.key)} className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === cat.key ? 'text-white' : 'text-[#F5F5F5]/50 hover:text-[#F5F5F5] border border-[#5E0006]/40 hover:border-[#C0001A]/60'}`}>
              {active === cat.key && (
                <motion.span layoutId="activeTab" className="absolute inset-0 bg-[#C0001A] rounded-full" style={{ zIndex: -1 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
              {cat.label[lang]}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {current.skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
