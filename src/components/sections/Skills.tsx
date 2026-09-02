"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  ServerCog,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    description: "Core languages used for problem solving and application development.",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Technologies used to build intelligent and data-driven systems.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Generative AI",
      "RAG",
      "LLMs",
      "NLP",
    ],
  },
  {
    icon: Layers3,
    title: "Frontend",
    description: "Modern technologies for responsive and interactive interfaces.",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    description: "Backend frameworks and tools for scalable application logic.",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT"],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Databases used for structured and application data.",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools & Libraries",
    description: "Development, machine-learning and collaboration tools.",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Git",
      "GitHub",
      "Postman",
      "Ollama",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">
            Technical skills
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Technologies I use to build complete digital products.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My skill set covers programming, artificial intelligence,
            full-stack development, databases and modern development tools.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.045]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-white/[0.025] to-cyan-500/10 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-violet-300">
                Current learning focus
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Building production-ready AI applications
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                I am currently strengthening my knowledge of large language
                models, retrieval-augmented generation, model deployment and
                scalable full-stack architecture.
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
            >
              View projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}