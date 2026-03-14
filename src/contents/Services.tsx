import Lottie from "lottie-react"
import { motion } from "motion/react"
import { GirlEyes } from "../assets/lottie"
import { SERVICES } from "../constants"

const Services = () => {
  return (
    <section
      role="region"
      aria-labelledby="services-heading"
      id="services"
      className="mk-section bg-mk-rose/30 relative flex min-h-screen scroll-mt-12 flex-col overflow-hidden md:scroll-mt-14 lg:scroll-mt-16"
    >
      {/* background decoration */}
      <div
        aria-hidden="true"
        className="bg-mk-secondary/20 pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl"
      />

      {/* Heading */}
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
          className="text-mk-secondary font-tangerine mx-3"
        >
          Our&nbsp;Services
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

      {/* Body */}
      <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="lg:border-r-mk-gold/30 flex flex-col justify-center p-2 md:p-4 lg:border-r"
        >
          <h3 className="font-tangerine text-mk-primary-dark">
            Curated Care for Every You
          </h3>
          <p className="text-mk-text max-w-md">
            Trends come and go, but true style is timeless. Our menu is designed
            to celebrate your individuality, offering bespoke beauty solutions
            that make you feel as incredible as you look. Step in, relax, and
            let our legacy of care work for you.
          </p>

          <motion.div
            aria-hidden="true"
            className="bg-mk-gold mt-6 h-px w-16 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 300 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <Lottie
            className="h-80 self-center md:h-96 md:self-start"
            animationData={GirlEyes}
          />
        </motion.div>

        {/* Right Services Grid */}
        <div
          role="list"
          aria-label="Available services"
          className="grid grid-cols-3 place-items-center"
        >
          {SERVICES.map((item, i) => (
            <motion.div
              role="listitem"
              key={`service-${i}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              {/* Image */}
              <motion.div
                className="border-mk-white group-hover:border-mk-secondary/60 relative rounded-full border-2 p-1 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glow on hover */}
                <div
                  aria-hidden="true"
                  className="bg-mk-secondary/50 absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                />
                <img
                  src={item.imgURL}
                  alt={`${item.name} service at Makamkanthi`}
                  className="pointer-events-none relative h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
                />
              </motion.div>

              {/* Label */}
              <motion.p
                className="text-mk-black group-hover:text-mk-primary max-w-28 text-center text-xs font-semibold tracking-wide italic transition-colors duration-200 md:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.08 + 0.2 }}
                viewport={{ once: true }}
              >
                {item.name}
              </motion.p>

              {/* Under dot */}
              <motion.span
                aria-hidden="true"
                className="bg-mk-gold h-1 w-1 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
