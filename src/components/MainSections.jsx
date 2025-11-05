import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Boxes, Briefcase, Star } from 'lucide-react';
import { useState } from 'react';

const partners = [
  {
    name: 'Sachin Verma',
    role: 'Managing Partner',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop',
    bio: 'Drives strategy, partnerships, and enterprise delivery with a focus on long‑term value.'
  },
  {
    name: 'Vaishnavi Rao',
    role: 'Head of Engineering',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    bio: 'Leads engineering excellence across web, mobile, and platform initiatives.'
  },
  {
    name: 'Ishaan Gupta',
    role: 'Product & UX Lead',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    bio: 'Shapes delightful product experiences with a data‑informed design process.'
  }
];

const services = [
  {
    icon: Code,
    title: 'Software Development',
    desc: 'Robust, scalable systems tailored for your business operations.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross‑platform apps engineered for performance.'
  },
  {
    icon: Globe,
    title: 'Web App Development',
    desc: 'Modern, secure web platforms that accelerate growth.'
  },
  {
    icon: Boxes,
    title: 'Custom ERP Solutions',
    desc: 'Integrated ERP to streamline processes and decision‑making.'
  },
  {
    icon: Briefcase,
    title: 'IT Consulting',
    desc: 'Architecture, cloud, and security guidance for scale.'
  }
];

const projects = [
  {
    name: 'ERP Windows System',
    tech: ['.NET', 'SQL Server', 'WPF'],
    desc: 'Desktop ERP for inventory, finance, and operations.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'Attendance Management App',
    tech: ['Flutter', 'Firebase'],
    desc: 'Mobile HRM app for attendance and leave management.',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'B2B Web Portal',
    tech: ['React', 'Node', 'MongoDB'],
    desc: 'Procurement & vendor collaboration platform.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  }
];

const products = [
  {
    name: 'SV ERP Suite',
    features: ['Finance & Accounting', 'Inventory', 'Purchasing', 'Dashboards'],
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop'
  },
  {
    name: 'SV Attendance',
    features: ['Geo‑fenced Check‑ins', 'Leave Management', 'Reports'],
    img: 'https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1400&auto=format&fit=crop'
  }
];

const testimonials = [
  {
    name: 'Ananya Sharma',
    company: 'Nexora Foods',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    text: 'SVIT Hub delivered ahead of schedule with impeccable quality. Our operations improved dramatically.'
  },
  {
    name: 'Rahul Mehta',
    company: 'FinCore Capital',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    text: 'A professional, detail‑oriented team. The product UX and performance are top‑notch.'
  },
  {
    name: 'Priya Desai',
    company: 'ClariTech Health',
    img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop',
    text: 'From concept to launch, they were incredible partners. Highly recommended.'
  }
];

export default function MainSections() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      {/* About */}
      <section id="about" className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              S V IT Hub is a partnership firm on a mission to craft meaningful, scalable software products. We combine
              engineering rigor with product thinking to help brands ship faster and smarter.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition dark:border-white/10 dark:bg-zinc-900"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
                  <p className="text-sm text-rose-600 dark:text-rose-400">{p.role}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['Innovation', 'Quality', 'Client Trust'].map((v) => (
              <div key={v} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{v}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">We obsess over {v.toLowerCase()} in every engagement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-black dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What We Do</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Full‑stack expertise across web, mobile, and enterprise.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Recent work across platforms and industries.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, idx) => (
              <motion.button
                type="button"
                key={proj.name}
                onClick={() => setActiveProject(idx)}
                whileHover={{ y: -6 }}
                className="group text-left rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md focus:outline-none dark:border-white/10 dark:bg-zinc-900"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-xl">
                  <img src={proj.img} alt={proj.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{proj.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{proj.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {activeProject !== null && (
            <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setActiveProject(null)}>
              <div className="max-w-2xl rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{projects[activeProject].name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{projects[activeProject].desc}</p>
                <div className="mt-4">
                  <img src={projects[activeProject].img} alt="preview" className="h-64 w-full rounded-xl object-cover" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => setActiveProject(null)} className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white dark:bg-white dark:text-black">Close</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Products</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Battle‑tested solutions ready to deploy.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">
                <div className="h-56 w-full overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200">{f}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <button className="rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-rose-500">View Demo</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Client Feedback</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">What our partners say about working with us.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div key={t.name} whileHover={{ y: -6 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">“{t.text}”</p>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-black dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Let’s talk about your next project.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! We\'ll get back to you soon.');
                e.currentTarget.reset();
              }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-gray-700 dark:text-gray-300">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-rose-500/20 focus:ring dark:border-white/10 dark:bg-black/40 dark:text-white" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-rose-500/20 focus:ring dark:border-white/10 dark:bg-black/40 dark:text-white" />
                </div>
                <div>
                  <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
                  <textarea required rows={5} className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-rose-500/20 focus:ring dark:border-white/10 dark:bg-black/40 dark:text-white" />
                </div>
                <button type="submit" className="mt-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
                  Send Message
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                <p>Email: contact@svithub.com</p>
                <p>Phone: +91 98765 43210</p>
                <div className="mt-2 flex gap-4">
                  <a href="#" className="hover:text-rose-600">LinkedIn</a>
                  <a href="#" className="hover:text-rose-600">Twitter</a>
                  <a href="#" className="hover:text-rose-600">GitHub</a>
                </div>
              </div>
            </form>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-white/10">
              <iframe
                title="S V IT Hub Location"
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4474342716127!2d78.486671!3d17.437462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c3e21e4f0f%3A0x8a9f2e6d8c3cd12!2sHyderabad!5e0!3m2!1sen!2sin!4v1688472343242"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 dark:border-white/10 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-block h-7 w-7 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400" />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">S V IT Hub</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Code. Create. Connect.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <a href="#home" className="hover:text-rose-600">Home</a>
              <a href="#about" className="hover:text-rose-600">About</a>
              <a href="#services" className="hover:text-rose-600">Services</a>
              <a href="#projects" className="hover:text-rose-600">Projects</a>
              <a href="#contact" className="hover:text-rose-600">Contact</a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} S V IT Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
