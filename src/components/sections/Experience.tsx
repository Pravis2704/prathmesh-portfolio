"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const experiences = [
  {
    title: "Graphic Design Head",
    organization: "Matrix Mind Club",
    period: "October 2025",
    location: "Rajarambapu Institute of Technology",
    type: "Leadership",
    icon: Sparkles,
    description:
      "Led the visual design work for the Matrix Mind Club and created promotional graphics, event materials and social-media content while maintaining a consistent visual identity.",
    points: [
      "Designed posters and digital promotional material.",
      "Maintained visual consistency across club activities.",
      "Collaborated with coordinators and student teams.",
    ],
  },
  {
    title: "Event Coordinator",
    organization: "Matrix Mind Club Inauguration",
    period: "2025",
    location: "Rajarambapu Institute of Technology",
    type: "Coordination",
    icon: Users,
    description:
      "Supported the planning and execution of the club inauguration by coordinating activities, managing responsibilities and helping ensure smooth event delivery.",
    points: [
      "Coordinated event activities and schedules.",
      "Worked with volunteers and organizing members.",
      "Supported planning, communication and execution.",
    ],
  },
  {
    title: "Volunteer",
    organization: "AI Fusion 1.0 & AI Fusion 2.0",
    period: "2024 – 2025",
    location: "Rajarambapu Institute of Technology",
    type: "Technical Event",
    icon: BriefcaseBusiness,
    description:
      "Contributed to the successful execution of AI-focused technical events by assisting participants, coordinating activities and supporting the organizing team.",
    points: [
      "Assisted participants during technical activities.",
      "Supported event coordination and logistics.",
      "Worked with faculty members and student organizers.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Rajarambapu Institute of Technology",
    period: "2023 – 2027",
    result: "CGPA: 8.36",
    location: "Maharashtra, India",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Class XII",
    period: "Completed in 2023",
    result: "75%",
    location: "Maharashtra, India",
  },
  {
    degree: "Secondary School Education",
    institution: "New English School",
    period: "Completed in 2021",
    result: "89.40%",
    location: "Maharashtra, India",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">
            Experience & education
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Learning through academics, leadership and practical work.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My experience includes technical projects, student leadership,
            event coordination and continuous learning in artificial
            intelligence, machine learning and full-stack development.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />

              <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
                Leadership & activities
              </p>
            </div>

            <div className="relative space-y-6">
              <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-white/10 sm:block" />

              {experiences.map((experience, index) => {
                const Icon = experience.icon;

                return (
                  <motion.article
                    key={`${experience.title}-${experience.organization}`}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.045] sm:ml-14 sm:p-7"
                  >
                    <div className="absolute -left-[57px] top-7 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#09090d] text-violet-300 sm:flex">
                      <Icon size={21} />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-cyan-300">
                          {experience.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-300">
                          {experience.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays size={15} />
                        {experience.period}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <MapPin size={15} />
                      {experience.location}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {experience.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
                Education
              </p>
            </div>

            <div className="space-y-5">
              {education.map((item, index) => (
                <motion.article
                  key={`${item.degree}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                      <GraduationCap size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm text-slate-300">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        Duration
                      </p>

                      <p className="mt-2 text-slate-200">{item.period}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        Result
                      </p>

                      <p className="mt-2 text-slate-200">{item.result}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={15} />
                    {item.location}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}