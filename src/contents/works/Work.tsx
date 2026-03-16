import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Header from "../../components/Header"

import { motion } from "motion/react"
import { useState } from "react"
import { RECENT_WORKS } from "../../constants"

const Work = () => {
  const [index, setIndex] = useState<number>(-1)

  return (
    <section
      aria-labelledby="works-heading"
      id="works"
      className="mk-section bg-mk-gray"
    >
      <Header text="Recent Works" />

      {/* Thumbnail grid */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {RECENT_WORKS.map((item, i) => (
          <motion.button
            type="button"
            key={`work-${i}`}
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="border-mk-gold/20 hover:border-mk-gold/60 group cursor-pointer overflow-hidden rounded-xl border transition-colors duration-200"
            aria-label={`View work ${i + 1}`}
          >
            <img
              src={item.src}
              alt={`Makamkanthi work ${i + 1}`}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-64"
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={RECENT_WORKS}
      />
    </section>
  )
}

export default Work
