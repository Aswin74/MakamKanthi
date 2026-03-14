import { motion } from "motion/react"
import {
  Award1,
  Award2,
  Award4,
  Award5,
  Award6,
  AwardCertificate,
  AwardMain,
  MK_Poster,
} from "../../assets"
import Header from "../../components/Header"
import MarqueeRow from "./MarqueeRow"

// image url rows
const ROW_1: string[] = [AwardMain, AwardCertificate, Award1, Award4]
const ROW_2: string[] = [Award2, Award5, MK_Poster, Award6]

const About = () => {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="mk-section overflow-hidden"
    >
      {/* dark bg panel  */}
      <div
        aria-hidden="true"
        className="bg-mk-black absolute inset-0 z-0 h-[55%] w-screen lg:h-full lg:w-[50%]"
      />

      {/* Heading */}
      <Header text="About Us" className="relative z-20" />

      {/* Body */}
      <div className="relative z-10 mt-6 grid gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-0">
        {/* Left image slide */}
        <div className="flex min-w-0 flex-col justify-center gap-4 rounded-md">
          {/* Row 1 - left to right */}
          <MarqueeRow images={ROW_1} reverse={false} label="Awards row 1" />
          {/* Row 2 - right to left */}
          <MarqueeRow images={ROW_2} reverse={true} label="Awards row 2" />
        </div>

        {/* Rigt text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="bg-mk-white flex min-w-0 flex-col rounded-2xl p-2 md:p-4 lg:place-self-center lg:bg-transparent lg:p-4"
        >
          {/* Gold text above */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-mk-gold mb-2 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Est. 2003 · 23+ Years of Excellence
          </motion.p>
          <h3 className="font-tangerine text-mk-primary">
            The Vision Behind the Glow
          </h3>
          <p className="text-mk-text max-w-md">
            For over 23 years,{" "}
            <strong className="text-mk-secondary">Anitha Bose</strong> has
            believed that beauty is more than a service—it’s a transformation of
            confidence. Since founding{" "}
            <strong className="text-mk-secondary">Makam Kanthi</strong> in 2003,
            she has led a journey of excellence, blending traditional care with
            modern artistry.
            <br />
            <br />
            What started as a passion for aesthetics has grown into a legacy of
            trust. The milestones you see reflected here aren't just awards;
            they are a testament to two decades of listening to our clients and
            perfecting our craft. At Makam Kanthi, you aren't just a guest; you
            are part of a 23-year tradition of elegance.
          </p>

          {/* gold line */}
          <motion.div
            aria-hidden="true"
            className="bg-mk-gold mt-6 h-px w-16 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 220 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-5 flex gap-8"
          >
            {[
              { value: "23+", label: "Years" },
              { value: "5+", label: "Awards" },
              { value: "10k+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-mk-primary text-xl font-extrabold">
                  {stat.value}
                </span>
                <span className="text-mk-text text-xs tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
