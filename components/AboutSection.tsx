import React from "react"
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa"

const skills = [
  { name: "Next.js 15+", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "OpenAI API", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "Vector DB", category: "ai" },
  { name: "RAG Pipelines", category: "ai" },
  { name: "API Design", category: "backend" },
  { name: "GitHub", category: "tools" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Full-Stack AI Engineer
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            I build end-to-end SaaS solutions that combine modern web architecture with cutting-edge AI. Whether you&apos;re a startup seeking an MVP or a business automating workflows, I deliver production-ready platforms that scale. From database schema design to AI model integration—I handle it all.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-2xl shadow-slate-200/40 dark:shadow-slate-950/30 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">What I do</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">
                I architect and build production-ready SaaS platforms from the ground up. My expertise spans end-to-end development: SEO-optimized frontends with Next.js, performant backends with Node.js and Express, AI integration with OpenAI and LangChain, and scalable databases. I deliver solutions that not only work but perform at scale.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-lg shadow-slate-200/40 dark:shadow-slate-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-300">
                  <FaCode size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">End-to-End Development</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">From database schema design to AI model fine-tuning, I handle every layer of your SaaS product with Next.js 15+, React, and TypeScript.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-lg shadow-slate-200/40 dark:shadow-slate-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-300">
                  <FaServer size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">Performance Focused</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">SEO-optimized Next.js apps with ultra-fast load times. Production-grade backends with Node.js and Express that scale efficiently.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-lg shadow-slate-200/40 dark:shadow-slate-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 dark:bg-teal-500/15 text-teal-600 dark:text-teal-300">
                  <FaDatabase size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">AI Integration</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">OpenAI (GPT-4o), LangChain, and Vector Databases (Supabase) for RAG pipelines and AI agents.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-lg shadow-slate-200/40 dark:shadow-slate-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300">
                  <FaTools size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">Product Partnership</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">I don't just code—I partner with you. From MVP strategy to production scaling, I ensure your SaaS succeeds.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-2xl shadow-slate-200/40 dark:shadow-slate-950/30 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Skills & technologies</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7">My SaaS tech stack: Next.js, React, Node.js, PostgreSQL, and AI tools like OpenAI, LangChain, and Vector Databases.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Frontend", items: skills.filter((skill) => skill.category === "frontend") },
                { title: "Backend", items: skills.filter((skill) => skill.category === "backend") },
                { title: "Database", items: skills.filter((skill) => skill.category === "database") },
                { title: "AI & ML", items: skills.filter((skill) => skill.category === "ai") },
                { title: "Tools", items: skills.filter((skill) => skill.category === "tools") },
              ].map((group, idx) => (
                <div key={idx} className="rounded-3xl bg-slate-100 dark:bg-slate-950/75 p-5">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 px-3 py-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
