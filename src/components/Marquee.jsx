import { motion } from 'framer-motion'

const items = [
  'React', 'Tailwind CSS', 'Laravel', 'PHP',
  'MySQL', 'Firebase', 'GitHub', 'Fullstack',
  'SEO', 'PostgreSQL', 'REST API', 'Responsive',
]

const doubled = [...items, ...items]

function MarqueeItem({ text }) {
  return (
    <div className="flex items-center gap-6 mx-4 group cursor-default">
      <span className="text-[#F5F5F5]/30 group-hover:text-[#C0001A] font-medium text-xs tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap">
        {text}
      </span>
      <span className="w-1 h-1 rounded-full bg-[#5E0006] group-hover:bg-[#C0001A] transition-colors duration-300" />
    </div>
  )
}

function Marquee() {
  return (
    <div className="relative py-4 bg-[#0D0D0D] overflow-hidden border-y border-[#5E0006]/20">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #0D0D0D, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg, #0D0D0D, transparent)' }} />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex items-center w-max"
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
