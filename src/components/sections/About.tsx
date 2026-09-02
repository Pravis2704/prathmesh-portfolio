"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Building practical machine-learning models, intelligent systems and generative AI applications.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Creating responsive web applications using React, Next.js, Node.js, Express and MongoDB.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Working with datasets, preprocessing, model evaluation, SQL and data-driven problem solving.",
  },
];

const facts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech in Artificial Intelligence & Machine Learning",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
  },
  {
    icon: Sparkles,
    label: "Current Focus",
    value: "AI products, full-stack systems and data analytics",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">
            About me
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            I combine AI, data and development to build useful products.
          </h2>

          <p className="mt-7 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Prathmesh Salunke, a B.Tech student specializing in
            Artificial Intelligence and Machine Learning at Rajarambapu
            Institute of Technology. I enjoy solving practical problems through
            machine learning, data analytics and modern web development.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
            My work includes predictive systems, generative AI applications,
            full-stack platforms and data-driven projects. I focus on building
            solutions that are not only technically strong but also usable,
            scalable and meaningful.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_rgba(139,92,246,0)] transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/60 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(139,92,246,0.30)]"
              >
                {/* Inner gradient glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-400/10 to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top border highlight */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-all duration-500 group-hover:border-violet-300/50 group-hover:bg-violet-500/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.30)]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Facts container */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="group/facts relative mt-12 grid gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-5 shadow-[0_0_0_rgba(139,92,246,0)] transition-all duration-500 hover:border-violet-400/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.20)] sm:p-7 lg:grid-cols-3"
        >
          {/* Container glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover/facts:opacity-100" />

          {facts.map((fact, index) => {
            const Icon = fact.icon;

            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative z-10 flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 shadow-[0_0_0_rgba(34,211,238,0)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-black/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-cyan-300 transition-all duration-500 group-hover:border-cyan-300/30 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]">
                  <Icon size={20} />
                </div>

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-cyan-300">
                    {fact.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {fact.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}