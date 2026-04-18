import { motion } from 'framer-motion'

function Divider() {
  return (
    <div className="relative flex items-center justify-center py-2 overflow-hidden px-6">
      <div className="relative w-full max-w-6xl mx-auto h-px">

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 origin-left"
          style={{ background: 'linear-gradient(90deg, transparent, #C0001A, #5E0006, transparent)' }}
        />

        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '200%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 w-1/3"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,31,58,0.8), transparent)' }}
        />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C0001A]"
          style={{ boxShadow: '0 0 8px #C0001A' }}
        />
      </div>
    </div>
  )
}

export default Divider
