import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-black/60 dark:via-black/40 dark:to-black" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4">
        <motion.h1
          className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Building World‑Class Software Experiences
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-gray-600 md:text-lg dark:text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          S V IT Hub is a partnership firm crafting scalable software, web, and mobile solutions for ambitious brands.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a
            href="#services"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            Our Services
          </a>
          <a
            href="#projects"
            className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:bg-white/10 dark:text-white"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
