import { motion } from "motion/react"

/**
 * Floating Circles
 *
 * @param size - width and height
 * @param x - x position
 * @param y - y position
 * @param duration - duration
 * @returns
 */
const FloatingCircle = ({
  size,
  x,
  y,
  duration,
}: {
  size: number
  x: string
  y: string
  duration: number
}) => (
  <motion.div
    aria-hidden="true"
    className={`from-mk-gold/30 pointer-events-none absolute rounded-full bg-linear-to-b to-transparent blur`}
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      x: [0, 20, -10, 0],
      y: [0, -20, 15, 0],
      scale: [1, 1.1, 0.95, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export default FloatingCircle
