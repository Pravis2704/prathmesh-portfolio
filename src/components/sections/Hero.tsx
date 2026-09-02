"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiTensorflow,
} from "react-icons/si";

import { portfolioData } from "@/data/portfolio";

const floatingBadges = [
  {
    name: "Python",
    icon: FaPython,
    position: "-left-3 top-[12%] sm:-left-10",
    iconClass: "text-blue-300",
    borderClass: "hover:border-blue-400/40",
    duration: 4,
    delay: 0,
    movement: -10,
  },
  {
    name: "React",
    icon: FaReact,
    position: "-right-3 top-[24%] sm:-right-10",
    iconClass: "text-cyan-300",
    borderClass: "hover:border-cyan-400/40",
    duration: 4.6,
    delay: 0.4,
    movement: 9,
  },
  {
    name: "Machine Learning",
    icon: BrainCircuit,
    position: "-left-2 bottom-[29%] sm:-left-14",
    iconClass: "text-violet-300",
    borderClass: "hover:border-violet-400/40",
    duration: 5.2,
    delay: 0.8,
    movement: -8,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    position: "-right-3 bottom-[17%] sm:-right-12",
    iconClass: "text-orange-300",
    borderClass: "hover:border-orange-400/40",
    duration: 4.3,
    delay: 0.2,
    movement: 10,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    position: "left-[12%] -bottom-5",
    iconClass: "text-emerald-300",
    borderClass: "hover:border-emerald-400/40",
    duration: 5,
    delay: 1,
    movement: -8,
  },
  {
    name: "Generative AI",
    icon: Sparkles,
    position: "right-[7%] -top-5",
    iconClass: "text-fuchsia-300",
    borderClass: "hover:border-fuchsia-400/40",
    duration: 4.8,
    delay: 0.6,
    movement: 8,
  },
];

const stats = [
  {
    value: "7+",
    label: "Projects",
  },
  {
    value: "8.36",
    label: "CGPA",
  },
  {
    value: "2027",
    label: "Graduation",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pb-20 pt-28 sm:pb-24 sm:pt-32"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-10 h-[460px] w-[460px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-sm text-emerald-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              Open to internships and opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 font-mono text-sm uppercase tracking-[0.22em] text-violet-300"
            >
              AI/ML Engineer · Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]"
            >
              Building intelligent products that solve{" "}
              <span className="bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
                real-world problems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              I&apos;m {portfolioData.name}, a B.Tech Artificial Intelligence
              and Machine Learning student building practical solutions using
              machine learning, generative AI, computer vision and modern
              full-stack technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-6 flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin size={16} className="text-cyan-300" />
              {portfolioData.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-slate-200"
              >
                View my projects
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition hover:border-violet-400/30 hover:bg-violet-500/10"
              >
                <Download size={17} />
                Download resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>

              <span className="ml-2 h-px w-12 bg-white/10" />

              <p className="text-sm text-slate-500">
                Available for remote opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.66 }}
              className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.025] px-3 py-5 backdrop-blur-xl"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 text-center sm:px-5">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 36 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[460px] lg:col-span-5"
          >
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-12 rounded-full bg-gradient-to-br from-violet-500/50 to-cyan-500/40 blur-3xl"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-violet-300/50 bg-gradient-to-b from-white/[0.08] to-white/[0.025] px-5 pt-6 shadow-[0_0_45px_rgba(139,92,246,0.30)] backdrop-blur-xl transition duration-300 hover:border-cyan-300/70 hover:shadow-[0_0_65px_rgba(34,211,238,0.35)] sm:px-8 sm:pt-8"> 
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

                <motion.div
                  animate={{
                    x: ["-150%", "180%"],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 z-20 w-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
                />

                <Image
                  src="/images/Profile1.png"
                  alt={`${portfolioData.name} professional portrait`}
                  width={520}
                  height={650}
                  priority
                  className="relative z-10 mx-auto h-auto max-h-[570px] w-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#09090d] via-[#09090d]/50 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 z-30 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl sm:left-7 sm:right-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">
                        {portfolioData.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                        AI/ML Engineer & Full-Stack Developer
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                      <BrainCircuit size={19} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating technology badges */}
            {floatingBadges.map((badge) => {
              const Icon = badge.icon;

              return (
                <motion.div
                  key={badge.name}
                  animate={{
                    y: [0, badge.movement, 0],
                    rotate: [-1.5, 1.5, -1.5],
                  }}
                  transition={{
                    duration: badge.duration,
                    delay: badge.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  className={`absolute z-40 hidden cursor-default items-center gap-2 rounded-xl border border-white/10 bg-[#0b0b11]/80 px-3 py-2 text-xs font-medium text-slate-200 shadow-xl shadow-black/30 backdrop-blur-xl transition sm:flex ${badge.position} ${badge.borderClass}`}
                >
                  <Icon size={17} className={badge.iconClass} />
                  {badge.name}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-600 transition hover:text-slate-300 lg:flex"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={17} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}