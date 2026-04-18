import { motion, useScroll, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollUI() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-[#C0001A] origin-left z-[100]" />
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -4, backgroundColor: '#FF1F3A' }}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-[#C0001A] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#C0001A]/20"
        aria-label="Retour en haut"
      >
        <FaArrowUp className="text-sm" />
      </motion.button>
    </>
  )
}

export default ScrollUI
