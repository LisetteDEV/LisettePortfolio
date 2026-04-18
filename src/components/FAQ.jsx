import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  { q: { fr: 'Êtes-vous disponible pour des projets freelance ?', en: 'Are you available for freelance projects?' }, a: { fr: "Oui, je suis disponible pour des projets freelance, des collaborations et des stages. N'hésitez pas à me contacter pour discuter de votre projet.", en: 'Yes, I am available for freelance projects, collaborations and internships. Feel free to contact me to discuss your project.' } },
  { q: { fr: 'Quels types de projets réalisez-vous ?', en: 'What types of projects do you work on?' }, a: { fr: "Je réalise des sites vitrines, des applications web, des plateformes e-commerce et des APIs. Du frontend au backend, je prends en charge l'ensemble du développement.", en: 'I build showcase websites, web applications, e-commerce platforms and APIs. From frontend to backend, I handle the entire development process.' } },
  { q: { fr: 'Combien de temps faut-il pour développer un site web ?', en: 'How long does it take to develop a website?' }, a: { fr: "Cela dépend de la complexité du projet. Un site vitrine simple prend généralement 1 à 2 semaines, tandis qu'une application web complète peut nécessiter 4 à 8 semaines.", en: 'It depends on the complexity of the project. A simple showcase site generally takes 1 to 2 weeks, while a full web application may require 4 to 8 weeks.' } },
  { q: { fr: 'Travaillez-vous avec des clients hors du Bénin ?', en: 'Do you work with clients outside Benin?' }, a: { fr: 'Absolument ! Je travaille à distance avec des clients partout en Afrique et dans le monde entier. La communication se fait par email, WhatsApp ou visioconférence.', en: 'Absolutely! I work remotely with clients across Africa and worldwide. Communication is done via email, WhatsApp or video call.' } },
  { q: { fr: 'Livrez-vous le code source de vos projets ?', en: 'Do you deliver the source code of your projects?' }, a: { fr: "Oui, chaque projet est livré avec son code source complet, hébergé sur GitHub, ainsi qu'une documentation claire pour faciliter la prise en main.", en: 'Yes, every project is delivered with its complete source code, hosted on GitHub, along with clear documentation for easy onboarding.' } },
  { q: { fr: 'Proposez-vous une maintenance après la livraison ?', en: 'Do you offer maintenance after delivery?' }, a: { fr: 'Oui, je propose un suivi et une maintenance après livraison pour corriger les bugs, mettre à jour le contenu et faire évoluer le projet selon vos besoins.', en: 'Yes, I offer follow-up and maintenance after delivery to fix bugs, update content and evolve the project according to your needs.' } },
  { q: { fr: 'Quels sont vos tarifs ?', en: 'What are your rates?' }, a: { fr: 'Mes tarifs varient selon la complexité et la durée du projet. Contactez-moi directement pour obtenir un devis personnalisé et gratuit adapté à vos besoins et à votre budget.', en: 'My rates vary depending on the complexity and duration of the project. Contact me directly for a free personalized quote tailored to your needs and budget.' } },
]

function FAQItem({ faq, index, lang, activeIndex, setActiveIndex }) {
  const isOpen = activeIndex === index
  const isInactive = activeIndex !== null && activeIndex !== index

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      animate={{ opacity: isInactive ? 0.3 : 1, scale: isInactive ? 0.98 : 1 }}
      className={`relative border rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${isOpen ? 'border-[#C0001A]/60 bg-[#161616]' : 'border-[#5E0006]/20 bg-[#161616]/50 hover:border-[#5E0006]/50'}`}
      onClick={() => setActiveIndex(isOpen ? null : index)}
    >
      {isOpen && (
        <motion.div
          layoutId="spotlight"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(192,0,26,0.08) 0%, transparent 70%)' }}
          transition={{ duration: 0.4 }}
        />
      )}

      <div className="flex items-center gap-5 px-6 py-5">
        <motion.span
          animate={{ color: isOpen ? '#C0001A' : 'rgba(245,245,245,0.2)', scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="font-bold text-2xl tabular-nums shrink-0 w-8 text-right"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        <div className="w-px h-8 bg-[#5E0006]/30 shrink-0" />

        <span className={`flex-1 font-medium text-sm md:text-base transition-colors duration-300 ${isOpen ? 'text-[#F5F5F5]' : 'text-[#F5F5F5]/60'}`}>
          {faq.q[lang]}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? '#C0001A' : 'rgba(245,245,245,0.3)' }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <FaChevronDown className="text-sm" />
        </motion.span>
      </div>

      {isOpen && (
        <motion.div layoutId={`progress-${index}`} className="h-px mx-6 bg-[#5E0006]/30" />
      )}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 flex gap-5">
              <div className="w-8 shrink-0" />
              <div className="w-px shrink-0 bg-[#C0001A]/20" />
              <p className="text-[#F5F5F5]/60 text-sm leading-relaxed">{faq.a[lang]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0001A] to-transparent origin-left"
        />
      )}
    </motion.div>
  )
}

function FAQ() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="relative bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[350px] h-[350px] bg-[#5E0006]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-[#C0001A] text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mt-3">
            {lang === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
          </h2>
          <p className="text-[#F5F5F5]/50 text-sm mt-3">
            {lang === 'fr' ? 'Tout ce que vous avez besoin de savoir avant de me contacter.' : 'Everything you need to know before reaching out.'}
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} lang={lang} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
