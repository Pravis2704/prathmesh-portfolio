"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Droplets,
  Focus,
  HeartPulse,
  ShoppingCart,
  Sprout,
  Waves,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "SmartMart AI",
    category: "Full-Stack AI Commerce",
    status: "In Progress",
    description:
      "An intelligent e-commerce platform with authentication, product catalog, shopping cart, wishlist and profile management. The platform is being extended with an AI shopping assistant, product recommendations, order management and payment integration.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
    ],
    icon: ShoppingCart,
    github: "https://github.com/your-username",
    live: "#",
    featured: true,
  },
  {
    title: "Hybrid Abyssal Fauna Detection Model",
    category: "Computer Vision & Deep Learning",
    status: "Completed",
    description:
      "A hybrid deep-learning model designed to detect and classify abyssal marine fauna from underwater images. The system applies image preprocessing, feature extraction and CNN-based classification to improve recognition in low-light and visually complex deep-sea environments.",
    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
    ],
    icon: Waves,
    github: "https://github.com/your-username",
    live: "#",
    featured: true,
  },
  {
    title: "ECG Arrhythmia Detection System",
    category: "Healthcare AI",
    status: "Completed",
    description:
      "A machine-learning system that analyzes ECG signals and classifies abnormal heart rhythms. The project includes signal preprocessing, feature extraction, model training and evaluation to support the early identification of possible cardiac irregularities.",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Signal Processing",
    ],
    icon: HeartPulse,
    github: "https://github.com/your-username",
    live: "#",
    featured: true,
  },
  {
    title: "Study Assistant Bot",
    category: "Generative AI",
    status: "Completed",
    description:
      "An AI-powered learning assistant that helps students understand academic content, generate explanations and interact with study material through a conversational interface.",
    technologies: [
      "Python",
      "LLM",
      "RAG",
      "FAISS",
      "Flask",
      "Generative AI",
    ],
    icon: BrainCircuit,
    github: "https://github.com/your-username",
    live: "#",
    featured: false,
  },
  {
    title: "Focus Guard AI",
    category: "Productivity AI",
    status: "Ongoing",
    description:
      "An intelligent productivity application designed to reduce distractions, monitor focus patterns and help users maintain consistent study and work sessions.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "JavaScript",
      "Productivity Analytics",
    ],
    icon: Focus,
    github: "https://github.com/your-username",
    live: "#",
    featured: false,
  },
  {
    title: "Water Quality Prediction",
    category: "Machine Learning",
    status: "Completed",
    description:
      "A machine-learning web application that analyzes water-quality parameters and predicts whether the water is suitable using a trained classification model.",
    technologies: [
      "Python",
      "Random Forest",
      "Scikit-learn",
      "Flask",
      "SQLite",
    ],
    icon: Droplets,
    github: "https://github.com/your-username",
    live: "#",
    featured: false,
  },
  {
    title: "Sugarcane Recovery Prediction",
    category: "Agricultural Machine Learning",
    status: "Completed",
    description:
      "A predictive system that classifies sugarcane recovery levels using agricultural, soil, climate and harvesting-related features.",
    technologies: [
      "Python",
      "Random Forest",
      "SVM",
      "Pandas",
      "Scikit-learn",
    ],
    icon: Sprout,
    github: "https://github.com/your-username",
    live: "#",
    featured: false,
  },
];

function getStatusStyles(status: string) {
  if (status === "Completed") {
    return "border-emerald-400/20 bg-emerald-400/5 text-emerald-300";
  }

  if (status === "In Progress") {
    return "border-amber-400/20 bg-amber-400/5 text-amber-300";
  }

  return "border-cyan-400/20 bg-cyan-400/5 text-cyan-300";
}

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">
              Selected projects
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Building intelligent systems for real-world problems.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              My work combines artificial intelligence, machine learning,
              computer vision, healthcare analytics and full-stack development
              to create practical digital products.
            </p>
          </div>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
          >
            <FaGithub size={17} />
            View GitHub
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-violet-400" />

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
              Featured work
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.05] sm:p-7"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

                  <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
                        <Icon size={25} />
                      </div>

                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${getStatusStyles(
                          project.status,
                        )}`}
                      >
                        {project.status === "Completed" && (
                          <CheckCircle2 size={13} />
                        )}

                        {project.status}
                      </span>
                    </div>

                    <div className="mt-8">
                      <p className="text-sm font-medium text-cyan-300">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-8">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:border-violet-400/30 hover:bg-violet-500/10"
                      >
                        <FaGithub size={16} />
                        Source code
                      </a>

                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
                        >
                          Live demo
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
              More projects
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045] sm:p-7"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition duration-300 group-hover:bg-cyan-500/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                        <Icon size={22} />
                      </div>

                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${getStatusStyles(
                          project.status,
                        )}`}
                      >
                        {project.status === "Completed" && (
                          <CheckCircle2 size={13} />
                        )}

                        {project.status}
                      </span>
                    </div>

                    <p className="mt-7 text-sm text-violet-300">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                      >
                        <FaGithub size={16} />
                        Source code
                      </a>

                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
                        >
                          Live demo
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 via-white/[0.025] to-cyan-500/10 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                <Code2 size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Interested in building something together?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                  I am interested in AI, machine-learning, data analytics and
                  full-stack projects that solve meaningful real-world
                  problems.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
            >
              Discuss a project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}