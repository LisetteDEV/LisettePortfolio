import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const socials = [
  { icon: FaGithub, href: 'https://github.com/LisetteDEV', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/lisette-obognon-04a468332', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/gwladys.akpo.18', label: 'Facebook' },
  { icon: FaWhatsapp, href: 'https://wa.me/2290154306699', label: 'WhatsApp' },
]

const NAV_LINKS = [
  { key: 'accueil', href: '#accueil', id: 'accueil' },
  { key: 'apropos', href: '#apropos', id: 'apropos' },
  { key: 'competences', href: '#competences', id: 'competences' },
  { key: 'services', href: '#services', id: 'services' },
  { key: 'projets', href: '#projets', id: 'projets' },
  { key: 'faq', href: '#faq', id: 'faq' },
  { key: 'contact', href: '#contact', id: 'contact' },
]
function Footer() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
<motion.footer
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
  className="relative bg-[#080808] border-t border-[#5E0006]/20 pt-16 pb-8 overflow-hidden"
>      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-[#5E0006]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="flex flex-col gap-4">
            <a href="#accueil" className="text-[#F5F5F5] font-bold text-xl tracking-tight">
              Lisette <span className="text-[#C0001A]">OBOGNON</span>
            </a>
            <p className="text-[#F5F5F5]/40 text-sm leading-relaxed max-w-xs">
              {lang === 'fr' ? 'Développeuse web fullstack passionnée, basée à Parakou, Bénin.' : 'Passionate fullstack web developer based in Parakou, Benin.'}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} whileHover={{ y: -3, color: '#C0001A' }} className="w-9 h-9 rounded-lg bg-[#161616] border border-[#5E0006]/30 hover:border-[#C0001A]/50 flex items-center justify-center text-[#F5F5F5]/60 hover:text-[#C0001A] transition-colors duration-200">
                    <Icon className="text-sm" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#F5F5F5] font-semibold text-sm uppercase tracking-wider">
              {lang === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-[#F5F5F5]/40 hover:text-[#C0001A] text-sm transition-colors duration-200">
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#F5F5F5] font-semibold text-sm uppercase tracking-wider">
              {lang === 'fr' ? 'Contact rapide' : 'Quick contact'}
            </h4>
            <div className="flex flex-col gap-3">
              <p className="text-[#F5F5F5]/40 text-sm">
                {lang === 'fr' ? 'Un projet ? Une question ?' : 'A project? A question?'}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#C0001A] hover:bg-[#FF1F3A] text-white text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 font-medium w-fit">
                {lang === 'fr' ? 'Me contacter' : 'Contact me'}
              </a>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-[#C0001A] animate-pulse" />
                <span className="text-[#F5F5F5]/40 text-xs">
                  {lang === 'fr' ? 'Disponible à tout moment' : 'Available anytime'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5E0006]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F5F5]/30 text-xs">
            © {new Date().getFullYear()} Lisette Obognon. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
          <p className="text-[#F5F5F5]/30 text-xs">
            {lang === 'fr' ? 'Conçu & développé ' : 'Designed & built '}{' '}
            {lang === 'fr' ? 'par Lisette Obognon' : 'by Lisette Obognon'}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
