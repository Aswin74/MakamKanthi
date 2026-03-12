import { Menu, X } from "lucide-react"
import { MK_Logo } from "../assets"
import { shopDescription, shopName } from "../constants"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "#services" },
  { label: "About", to: "#about" },
  //   { label: "Contact", to: "#contact" },
]

const Navbar = () => {
  // helper States
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [activeLink, setActiveLink] = useState<string>(
    window.location.hash || "/",
  )

  // for handle scroll based bgChang
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    // clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // for catching activeLink location
  useEffect(() => {
    const handleHashChange = () => setActiveLink(window.location.hash || "/")
    window.addEventListener("hashchange", handleHashChange)

    // cleanup
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    // clean up the event listener
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-4 transition-all duration-500 lg:px-8 ${
          scrolled
            ? "bg-mk-black/90 shadow-mk-primary/10 border-mk-primary/20 border-b py-2 shadow-lg backdrop-blur-md"
            : "bg-transparent py-3 lg:py-2"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="relative">
            <motion.div
              className="bg-mk-secondary/30 absolute inset-0 rounded-full blur-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src={MK_Logo}
              className={`relative h-9 w-9 rounded-full object-cover md:h-11 md:w-11 lg:h-12 lg:w-12`}
              alt="Makamkanthi Logo"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <p className="text-sm font-semibold tracking-widest uppercase md:text-base lg:text-lg">
              <span className="text-mk-secondary-light">
                {shopName.split(" ")[0]}
              </span>
              <span className="text-mk-gold mx-1">·</span>
              <span className="text-mk-white">{shopName.split(" ")[1]}</span>
            </p>
            <span className="text-mk-muted text-[0.4em] tracking-[0.2em] uppercase md:text-[9px]">
              {shopDescription}
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((navLink, i) => (
            <motion.a
              key={i}
              href={navLink.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i + 0.3, duration: 0.4 }}
              className={`group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                activeLink === navLink.to
                  ? "text-mk-secondary-light"
                  : "text-mk-white/80 hover:text-mk-white"
              }`}
              aria-label={`Navigate to ${navLink.label}`}
            >
              {navLink.label}
              {/* Animated underline */}
              <motion.span
                className="bg-mk-gold absolute bottom-0 left-1/2 h-[1.5px] -translate-x-1/2 rounded-full"
                animate={{ width: activeLink === navLink.to ? "60%" : "0%" }}
                transition={{ duration: 0.25 }}
              />
            </motion.a>
          ))}

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary"
            aria-label="Contact us"
          >
            Contact Us Now
          </motion.a>
        </div>

        {/* Hamburger */}
        <motion.button
          role="button"
          aria-label="Toggle Navigation"
          className="border-mk-secondary/30 bg-mk-primary/30 text-mk-gold flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ backgroundColor: "rgba(45,106,47,0.5)" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-mk-black/50 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-mk-black border-mk-primary/30 fixed top-0 right-0 z-50 flex h-full w-72 flex-col border-l shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="border-mk-primary/20 flex items-center justify-between border-b px-6 py-4">
                <p className="text-mk-secondary-light text-sm font-semibold tracking-widest uppercase">
                  Menu
                </p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="border-mk-primary/30 text-mk-gold flex h-8 w-8 items-center justify-center rounded-full border"
                  role="button"
                  aria-label="close menu"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 px-4 py-6">
                {navLinks.map((navLink, i) => (
                  <motion.a
                    key={i}
                    href={navLink.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1, duration: 0.35 }}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${
                      activeLink === navLink.to
                        ? "bg-mk-primary/30 text-mk-secondary-light border-mk-primary/40 border"
                        : "text-mk-white/70 hover:bg-mk-primary/20 hover:text-mk-white"
                    }`}
                    aria-label={`Navigate to ${navLink.label}`}
                  >
                    <span className="bg-mk-gold h-1 w-1 rounded-full opacity-60 transition-opacity group-hover:opacity-100" />
                    {navLink.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                className="border-mk-primary/20 mt-auto border-t px-6 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-mk-primary text-mk-white shadow-mk-primary/30 border-mk-secondary/20 hover:bg-mk-primary-light block w-full rounded-full border py-3 text-center text-sm font-semibold shadow-lg transition-colors"
                >
                  Contact Us Now
                </a>
                <p className="text-mk-muted mt-3 text-center text-[10px] tracking-widest uppercase">
                  Beauty &amp; Wellness
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
