import { Phone } from "lucide-react"
import { motion } from "motion/react"
import { ScrollParallax } from "react-just-parallax"
import { AwardMain, MK_Logo } from "../../assets"
import Header from "../../components/Header"
import {
  CONTACT_NUMBERS,
  shopDescription,
  shopName,
  SOCIALS,
} from "../../constants"
import FloatingCircle from "./FloatingCircle"

const Contact = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="mk-section bg-mk-primary-dark relative overflow-hidden"
    >
      {/*  Flaoting Circles */}
      <ScrollParallax isAbsolutelyPositioned>
        <FloatingCircle size={320} x="-5%" y="-10%" duration={7} />
        <FloatingCircle size={200} x="60%" y="5%" duration={9} />
        <FloatingCircle size={150} x="30%" y="60%" duration={6} />
        <FloatingCircle size={100} x="85%" y="70%" duration={8} />
      </ScrollParallax>

      {/* Heading */}
      <Header text="Contact Us" />

      {/* Body */}
      <div className="relative z-10 mt-6 grid gap-12 lg:mt-2 lg:grid-cols-2 lg:gap-8">
        {/* Left - Logo + Socials + Phone */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6"
        >
          {/* Logo */}
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              aria-hidden="true"
              className="bg-mk-secondary/40 absolute inset-0 rounded-full blur-2xl"
            />
            <img
              src={MK_Logo}
              alt="Makamkanthi logo"
              className="relative h-30 w-30 rounded-full object-cover md:h-40 md:w-40"
            />
          </motion.div>

          {/* Shop name */}
          <div className="text-center">
            <p className="text-mk-white text-lg font-semibold tracking-widest uppercase">
              {shopName.split(" ")[0]}&nbsp;
              <span className="text-mk-secondary-light">
                {shopName.split(" ")[1]}
              </span>
            </p>
            <p className="text-mk-muted mt-1 text-xs tracking-[0.2em] uppercase">
              {shopDescription}
            </p>
          </div>

          {/* Social icons */}
          <div>
            <p className="text-mk-muted mb-3 text-center text-[10px] tracking-[0.2em] uppercase">
              Find us on
            </p>
            <ul
              className="flex flex-wrap justify-center gap-3"
              aria-label="Social media links"
            >
              {SOCIALS.map((app, i) => (
                <motion.li
                  key={`social-${app.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={app.socialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${app.name}`}
                    className="border-mk-white/10 bg-mk-white/5 hover:border-mk-secondary/50 hover:bg-mk-secondary/10 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-1"
                  >
                    <img
                      src={app.iconURL}
                      alt={app.name}
                      width={22}
                      height={22}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Phone numbers */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-mk-muted text-[10px] tracking-[0.2em] uppercase">
              Call us
            </p>
            {CONTACT_NUMBERS.map((contact) => (
              <a
                key={contact.phoneTo}
                href={contact.phoneTo}
                className="text-mk-white/80 hover:text-mk-gold text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {contact.text}
              </a>
            ))}
          </div>
        </motion.div>

        {/* owner image + info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-0"
        >
          {/* image  */}
          <div className="border-mk-gold/40 bg-mk-black/30 relative w-full max-w-sm overflow-hidden rounded-2xl rounded-b-none border border-b-0">
            {/* corner frames */}
            <div
              aria-hidden="true"
              className="border-mk-gold absolute top-3 left-3 h-6 w-6 rounded-tl-lg border-t-4 border-l-4"
            />
            <div
              aria-hidden="true"
              className="border-mk-gold absolute top-3 right-3 h-6 w-6 rounded-tr-lg border-t-4 border-r-4"
            />

            <img
              src={AwardMain}
              alt="Anitha Bose, founder of Makamkanthi"
              className="pointer-events-none h-72 w-full object-cover object-top md:h-80"
            />
          </div>

          {/* info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-mk-gold w-full max-w-sm rounded-b-2xl px-6 py-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-mk-black text-lg font-bold tracking-wide">
                  Anitha Bose
                </h4>
                <p className="text-mk-black/60 text-xs font-medium tracking-[0.15em] uppercase">
                  Founder &amp; Owner
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="bg-mk-black/20 my-3 h-px w-full"
            />

            {/* Contacts */}
            <div className="flex flex-col gap-1">
              {CONTACT_NUMBERS.map((contact) => (
                <a
                  key={contact.phoneTo}
                  href={contact.phoneTo}
                  className="text-mk-black/80 hover:text-mk-black flex text-sm font-medium transition-colors"
                >
                  <Phone size={18} className="text-mk-primary mr-2" />
                  {contact.text}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
