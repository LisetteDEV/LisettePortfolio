import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCode, FaRocket, FaCogs, FaSearch } from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: { fr: 'Développement de sites web', en: 'Website development' },
    description: { fr: 'Conception et développement de sites web modernes, responsives et performants, adaptés à vos besoins et à votre image.', en: 'Design and development of modern, responsive and performant websites, tailored to your needs and brand.' },
  },
  {
    icon: FaCogs,
    title: { fr: "Développement d'applications web", en: 'Web application development' },
    description: { fr: "Création d'applications web complètes et robustes, de la conception de l'interface jusqu'au développement backend.", en: 'Building complete and robust web applications, from interface design to backend development.' },
  },
  {
    icon: FaRocket,
    title: { fr: 'Déploiement & configuration', en: 'Deployment & configuration' },
    description: { fr: 'Mise en ligne et configuration de vos projets web sur les meilleures plateformes : Vercel, Netlify, GitHub Pages.', en: 'Deployment and configuration of your web projects on the best platforms: Vercel, Netlify, GitHub Pages.' },
  },
  {
    icon: FaSearch,
    title: { fr: 'SEO & optimisation', en: 'SEO & optimization' },
    description: { fr: "Optimisation de votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne et attirer plus de visiteurs.", en: 'Optimizing your website for search engines to improve your online visibility and attract more visitors.' },
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

function Services() {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section id="services" className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[300px] bg-[#5E0006]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">
            {lang === 'fr' ? 'Ce que je fais' : 'What I do'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-3">
            {lang === 'fr' ? 'Mes services' : 'My services'}
          </h2>
          <p className="text-[#F5F5F5]/50 text-sm mt-3 max-w-md mx-auto">
            {lang === 'fr' ? 'Des solutions web complètes pour donner vie à vos projets digitaux.' : 'Complete web solutions to bring your digital projects to life.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {services.map((service, i) => {
  const Icon = service.icon
  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8, borderColor: 'rgba(192,0,26,0.6)' }}
      className="group relative bg-[#161616] border border-[#5E0006]/30 rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C0001A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }} className="w-12 h-12 rounded-xl bg-[#5E0006]/20 group-hover:bg-[#C0001A]/20 flex items-center justify-center transition-colors duration-300">
        <Icon className="text-[#C0001A] text-xl" />
      </motion.div>
      <h3 className="text-[#F5F5F5] font-semibold text-base leading-tight">
        {service.title[lang]}
      </h3>
      <p className="text-[#F5F5F5]/50 text-sm leading-relaxed">
        {service.description[lang]}
      </p>
    </motion.div>
  )
})}
        </div>
      </div>
    </section>
  )
}

export default Services
