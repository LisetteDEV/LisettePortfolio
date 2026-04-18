import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const NAV_LINKS = [
  { key: 'accueil', href: '#accueil', id: 'accueil' },
  { key: 'apropos', href: '#apropos', id: 'apropos' },
  { key: 'competences', href: '#competences', id: 'competences' },
  { key: 'services', href: '#services', id: 'services' },
  { key: 'projets', href: '#projets', id: 'projets' },
  { key: 'faq', href: '#faq', id: 'faq' },
  { key: 'contact', href: '#contact', id: 'contact' },
]

const LANGUAGES = [
  { code: 'fr', label: 'FR', flag: 'https://flagcdn.com/w20/fr.png' },
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w20/gb.png' },
]

function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean)
      const current = sections.findLast(section => section.getBoundingClientRect().top <= 120)
      if (current) setActiveSection(current.id)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

 const handleNavClick = (e, href) => {
  e.preventDefault()
  const id = href.replace('#', '')
  setMenuOpen(false)
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }, 300)
}
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')
  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]
  const otherLang = LANGUAGES.find((l) => l.code !== i18n.language)

  return (
    <motion.nav initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#5E0006]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#accueil" onClick={(e) => handleNavClick(e, '#accueil')} className="text-[#F5F5F5] font-bold text-lg tracking-tight">
          Lisette <span className="text-[#C0001A]">OBOGNON</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="relative text-sm transition-colors duration-200 py-1 block" style={{ color: activeSection === link.id ? '#C0001A' : 'rgba(245,245,245,0.7)' }}>
                {t(`nav.${link.key}`)}
                <motion.span className="absolute -bottom-1 left-0 h-px bg-[#C0001A]" animate={{ width: activeSection === link.id ? '100%' : '0%' }} transition={{ duration: 0.3, ease: 'easeInOut' }} />
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleLang} aria-label={`Passer en ${otherLang.label}`} className="flex items-center gap-2 text-sm text-[#F5F5F5] border border-[#5E0006]/50 hover:border-[#C0001A] px-3 py-1.5 rounded-md transition-all duration-200">
            <AnimatePresence mode="wait">
              <motion.span key={currentLang.code} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }} className="flex items-center gap-2">
                <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
                <span>{currentLang.label}</span>
              </motion.span>
            </AnimatePresence>
            <span className="text-[#F5F5F5]/40 text-xs">▾</span>
          </button>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleLang} aria-label="Changer la langue" className="flex items-center gap-2 text-sm border border-[#5E0006]/50 px-2.5 py-1.5 rounded-md text-[#F5F5F5]">
            <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
            <span className="text-xs">{currentLang.label}</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="flex flex-col gap-1.5 cursor-pointer p-1">
            <span className={`block w-6 h-0.5 bg-[#F5F5F5] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#F5F5F5] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#F5F5F5] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="md:hidden overflow-hidden bg-[#161616] border-t border-[#5E0006]">
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a key={link.key} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm transition-colors duration-200" style={{ color: activeSection === link.id ? '#C0001A' : 'rgba(245,245,245,0.7)' }}>
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
