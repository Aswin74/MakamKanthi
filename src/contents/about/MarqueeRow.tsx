import { motion } from "motion/react"

/**
 * Marquee images component
 *
 * @param images - array of images, then doubles for long strip
 * @param reverse - to make the direction left to right
 * @param label - for aria label
 * @returns
 */
const MarqueeRow = ({
  images,
  reverse = false,
  label,
}: {
  images: string[]
  reverse?: boolean
  label: string
}) => {
  // double images array for loop
  const doubled = [...images, ...images]

  return (
    <div className="overflow-hidden" role="list" aria-label={label}>
      <motion.div
        className="flex gap-3"
        animate={{ x: reverse ? ["0%", "50%", "0%"] : ["0%", "-50%", "0%"] }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((imgURL, i) => (
          <div
            role="listitem"
            key={`${label}-${i}`}
            className={`border-mk-gold/50 bg-mk-black/20 h-44 w-36 shrink-0 ${reverse && "-translate-x-200"} overflow-hidden rounded-xl border md:h-52 md:w-44 lg:h-60 lg:w-48`}
          >
            <img
              src={imgURL}
              alt={`Makamkanthi award ${i}`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeRow
