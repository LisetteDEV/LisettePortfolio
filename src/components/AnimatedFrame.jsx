import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

function AnimatedFrame({ borderRadius = 16 }) {
  const beam1Ref = useRef(null)
  const beam2Ref = useRef(null)

  useAnimationFrame((t) => {
    if (beam1Ref.current) {
      const offset = -(t * 0.08) % 2000
      beam1Ref.current.style.strokeDashoffset = offset
    }
    if (beam2Ref.current) {
      const offset = (t * 0.04) % 2000
      beam2Ref.current.style.strokeDashoffset = offset
    }
  })

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none', borderRadius: `${borderRadius}px`, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: `${borderRadius}px`,
        border: '1.5px solid rgba(192,0,26,0.25)',
      }} />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none">
        <rect
          ref={beam1Ref}
          x="2" y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx={borderRadius}
          fill="none"
          stroke="#C0001A"
          strokeWidth="2.5"
          strokeDasharray="180 1820"
          strokeDashoffset="0"
          strokeLinecap="round"
        />
        <rect
          ref={beam2Ref}
          x="2" y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx={borderRadius}
          fill="none"
          stroke="#FF1F3A"
          strokeWidth="1.5"
          strokeDasharray="80 1920"
          strokeDashoffset="0"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}

export default AnimatedFrame
