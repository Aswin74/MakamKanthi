import { motion } from "motion/react"
import React from "react"
import { cn } from "../lib/utils"

interface HeaderProps {
  text: string
  className?: string
}
/**
 *
 * @param text - text to be displayed
 * @param className - extra styles if any
 */
const Header: React.FC<HeaderProps> = ({ text, className }) => {
  return (
    <header className="relative flex items-center self-start">
      <motion.span
        aria-hidden="true"
        className="bg-mk-gold block h-px rounded-full md:h-0.5"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={cn("font-tangerine text-mk-secondary mx-3", className)}
      >
        {text}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        className="bg-mk-gold block h-px rounded-full md:h-0.5"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </header>
  )
}

export default Header
