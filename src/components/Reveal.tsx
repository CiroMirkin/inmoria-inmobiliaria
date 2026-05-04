import { useReducedMotion, motion } from 'motion/react';

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      variants={variants}
      initial={shouldReduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}