import { Girl, MK_Logo } from "../assets"
import { shopName } from "../constants"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      role="landingPage"
      id="hero"
      className="bg-gradient relative flex h-screen items-center overflow-hidden"
    >
      {/* dotted circle top right */}
      <img
        src={MK_Logo}
        className="absolute top-2 right-2 h-42 w-42 opacity-5 lg:opacity-3"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="border-mk-secondary/60 absolute -top-16 -right-16 h-72 w-72 rounded-full border-2 border-dotted"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="border-mk-gold/20 absolute -top-8 -right-8 h-56 w-56 rounded-full border-2 border-dotted"
      />
      {/* Text  */}
      <div className="relative z-10 px-6 lg:max-w-[55%] lg:pl-14">
        {/* label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 flex items-center gap-2"
        >
          {/* Animated line */}
          <motion.span
            className="bg-mk-gold h-px"
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          {/* <span className="bg-mk-gold h-px w-8" /> */}
          <span className="text-mk-gold text-xs font-medium tracking-[0.25em] uppercase">
            Where Expertise Meets Beauty
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-tangerine text-mk-white z-10 text-[min(14vw,6.2rem)] leading-none font-bold tracking-wide capitalize"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>{shopName.split(" ")[0]}</span>
          <motion.span
            className="text-mk-gold mx-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            ·
          </motion.span>
          <span>{shopName.split(" ")[1]}</span>
        </motion.h1>

        {/* Since */}
        <motion.div
          className="mb-5 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Animated line */}
          <motion.span
            className="bg-mk-secondary-light h-px"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          />
          <p className="text-mk-gold text-[0.6rem] tracking-widest uppercase md:text-xs">
            Since 2003
          </p>
          <motion.span
            className="bg-mk-secondary-light/50 h-px"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-mk-muted mb-8 max-w-sm text-sm leading-relaxed tracking-wide lg:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          Two decades of expertise, a lifetime of confidence. Defining beauty
          since 2003.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-gold"
          >
            Explore Services
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-white"
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>

      {/* Girl image */}
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 z-0 hidden h-[95%] lg:block"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* bg glow */}
        {/* <motion.div
          animate={{ scale: [1, 0.8, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-mk-primary-light/50 absolute inset-x-0 bottom-0 h-2/5 rounded-full blur-3xl"
        /> */}
        <img
          src={Girl}
          className="h-full w-auto object-contain object-bottom opacity-80"
          alt="Beauty model"
        />
      </motion.div>

      {/* Bottom gradient */}
      <div className="from-mk-black/40 absolute right-0 bottom-0 left-0 h-24 bg-linear-to-t to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-mk-white/40 text-[9px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          className="bg-mk-white/30 h-6 w-px"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
