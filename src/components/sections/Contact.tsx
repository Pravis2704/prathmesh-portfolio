"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa6";

import { portfolioData } from "@/data/portfolio";

type FormStatus = "idle" | "submitting" | "success";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      return;
    }

    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    form.reset();

    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-violet-300">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m open to internships, entry-level opportunities, technical
            collaborations and projects involving AI, machine learning, data
            analytics or full-stack development.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Mail size={23} />
              </div>

              <p className="mt-6 text-sm text-slate-500">Send me an email</p>

              <a
                href={`mailto:${portfolioData.email}`}
                className="mt-2 inline-flex items-center gap-2 break-all text-lg font-medium text-white transition hover:text-violet-300"
              >
                {portfolioData.email}
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                <MapPin size={23} />
              </div>

              <p className="mt-6 text-sm text-slate-500">Based in</p>

              <p className="mt-2 text-lg font-medium text-white">
                {portfolioData.location}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Open to remote opportunities and roles across India.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <p className="text-sm text-slate-500">Connect with me</p>

              <div className="mt-5 flex gap-3">
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
                >
                  <FaLinkedinIn size={19} />
                </a>
                <a
                  href={portfolioData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
                >
                  <FaInstagram size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div>
              <p className="text-sm font-medium text-violet-300">
                Send a message
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Tell me about your opportunity or idea.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.035]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.035]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Internship, project or collaboration"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.035]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about the role, project or idea..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:bg-white/[0.035]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 size={17} />
                  Message submitted successfully.
                </div>
              )}
            </form>

            <p className="mt-5 text-xs leading-6 text-slate-600">
              This form currently demonstrates the frontend interaction. We
              will connect it to a secure backend email service in the next
              step.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}