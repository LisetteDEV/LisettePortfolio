import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  { title: 'MonChoix', description: { fr: "Plateforme d'aide à la décision en matière de contraception, destinée aux jeunes filles du Bénin.", en: 'A decision-support platform for contraception, designed for young women in Benin.' }, techs: ['React', 'Tailwind CSS', 'HTML'], github: 'https://github.com/LisetteDEV/monchoix', demo: 'https://monchoix-benin.netlify.app/',image: 'monchoix.webp', available: true },
  { title: 'Sam Boutique', description: { fr: 'Site pour une boutique spécialisée dans la vente de téléphones portables et accessoires de qualité.', en: 'Website for a shop specialized in selling mobile phones and quality accessories.' }, techs: ['React', 'Tailwind CSS', 'HTML'], github: 'https://github.com/LisetteDEV/sam-gsm', demo: 'https://sam-boutique.netlify.app/', image: 'sam-boutique.webp', available: true },
  { title: 'Réservation Salle', description: { fr: "Site de réservation de salles pour l'organisation d'événements.", en: 'Room booking website for event organization.' }, techs: ['React', 'Tailwind CSS', 'HTML', 'PHP'], github: 'https://github.com/LisetteDEV/reservation-salle', demo: null, image: 'sallepro.webp', available: false },
]

function ProjectCard({ project, index }) {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} whileHover={{ y: -10, scale: 1.02 }} className="group relative bg-[#161616] border border-[#5E0006]/30 hover:border-[#C0001A]/60 rounded-2xl overflow-hidden transition-colors duration-300 cursor-default">
      <div className="relative h-48 bg-[#0D0D0D] overflow-hidden">
<motion.img whileHover={{ scale: 1.12 }} transition={{ duration: 0.5, ease: 'easeOut' }} src={project.image} alt={`${project.title} — projet de Lisette Obognon`} className="w-full h-full object-cover object-top" loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-[#C0001A]/10 flex items-center justify-center">
          
        </motion.div>
        {!project.available && (
          <div className="absolute top-3 right-3 bg-[#0D0D0D]/80 border border-[#5E0006]/40 text-[#F5F5F5]/50 text-xs px-3 py-1 rounded-full">
            {lang === 'fr' ? 'Démo indisponible' : 'Demo unavailable'}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-[#F5F5F5] font-bold text-xl">{project.title}</h3>
        <p className="text-[#F5F5F5]/50 text-sm leading-relaxed">{project.description[lang]}</p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span key={tech} className="text-xs text-[#C0001A] border border-[#5E0006]/40 px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-2 border-t border-[#5E0006]/20">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F5F5F5]/60 hover:text-[#F5F5F5] text-sm transition-colors duration-200">
            <FaGithub className="text-base" />
            <span>Code</span>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#F5F5F5]/60 hover:text-[#C0001A] text-sm transition-colors duration-200">
              <FaExternalLinkAlt className="text-sm" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="projets" className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#5E0006]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">{lang === 'fr' ? 'Mes projets' : 'My projects'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-3">{lang === 'fr' ? "Ce que j'ai réalisé" : 'What I have built'}</h2>
          <p className="text-[#F5F5F5]/50 text-sm mt-3 max-w-md mx-auto">{lang === 'fr' ? 'Une sélection de projets qui reflètent mes compétences et ma passion pour le développement web.' : 'A selection of projects that reflect my skills and passion for web development.'}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mt-12">
          <a href="https://github.com/LisetteDEV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#5E0006] hover:border-[#C0001A] text-[#F5F5F5]/70 hover:text-[#C0001A] px-6 py-3 rounded-md text-sm font-medium transition-all duration-200">
            <FaGithub className="text-base" />
            {lang === 'fr' ? 'Voir tous mes projets sur GitHub' : 'See all my projects on GitHub'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
