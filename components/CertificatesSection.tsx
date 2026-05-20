"use client"

import Image from "next/image"

const certificates = [
  {
    title: "Full Stack Web Development Certification",
    description: "Validates my full-stack development skills across front-end, back-end, and databases, enabling me to build scalable and production-ready web applications.",
    image: "/certificate-1.png",
  },
  {
    title: "Introduction to SQL",
    description: "Demonstrates basic SQL and database skills for efficient data handling and building data-driven applications.",
    image: "/certificate-2.png",
  },
]

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-300">Certifications</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Professional Credentials
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Recognized certifications that validate my skills and commitment to continuous learning.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/75 p-6 shadow-xl shadow-slate-200/40 dark:shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{cert.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
