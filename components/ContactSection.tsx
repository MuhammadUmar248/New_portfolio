"use client"

import React, { useCallback, useState } from "react"
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi"
import emailjs from "@emailjs/browser"
import SlideUp from "./SlideUp"
import ContactFormPopup, { ContactPopupStatus } from "./ContactFormPopup"

const SERVICE_ID = "service_4t1xlup"
const TEMPLATE_ID = "template_z6lenfr"
const PUBLIC_KEY = "NO0p-J39zrybj0zJU"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const fieldLabelClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"

const fieldWrapperClass =
  "flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 px-4 py-3 transition focus-within:border-cyan-500/50 focus-within:ring-2 focus-within:ring-cyan-500/20"

const fieldInputClass =
  "w-full bg-transparent text-slate-950 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none disabled:opacity-60"

const iconBoxClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"

async function sendEmail(formData: FormData) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    { publicKey: PUBLIC_KEY }
  )
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [popupStatus, setPopupStatus] = useState<ContactPopupStatus>("closed")
  const [popupMessage, setPopupMessage] = useState("")

  const closePopup = useCallback(() => {
    setPopupStatus("closed")
    setPopupMessage("")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setPopupStatus("loading")

    try {
      await sendEmail(formData)

      setFormData(initialFormData)
      setPopupMessage("Message sent successfully! I'll respond within 24 hours.")
      setPopupStatus("success")
    } catch {
      setPopupMessage("Failed to send message. Please try again or email me directly.")
      setPopupStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ContactFormPopup
        status={popupStatus}
        message={popupMessage}
        onClose={closePopup}
      />

      <section
        id="contact"
        className="relative overflow-hidden bg-slate-100 py-20 text-slate-950 dark:bg-slate-950 dark:text-slate-100"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.06),_transparent_40%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_40%)]" />

        <div className="site-container relative">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to build your next SaaS?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              Share your idea or project details — I typically respond within 24 hours. You can also
              view or download my CV from the navbar or About section.
            </p>
          </div>

          <SlideUp offset="-100px 0px -100px 0px">
            <div className="mt-14 w-full">
              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/30 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="subject" className={fieldLabelClass}>
                      Subject
                    </label>
                    <div className={fieldWrapperClass}>
                      <span className={iconBoxClass}>
                        <FiMessageSquare size={18} />
                      </span>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        className={fieldInputClass}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className={fieldLabelClass}>
                        Name
                      </label>
                      <div className={fieldWrapperClass}>
                        <span className={iconBoxClass}>
                          <FiUser size={18} />
                        </span>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className={fieldInputClass}
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className={fieldLabelClass}>
                        Email
                      </label>
                      <div className={fieldWrapperClass}>
                        <span className={iconBoxClass}>
                          <FiMail size={18} />
                        </span>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          className={fieldInputClass}
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className={fieldLabelClass}>
                      Message
                    </label>
                    <div className={`${fieldWrapperClass} items-start py-4`}>
                      <span className={`${iconBoxClass} mt-0.5`}>
                        <FiMessageSquare size={18} />
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, timeline, and goals..."
                        rows={5}
                        className={`${fieldInputClass} resize-none leading-relaxed`}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend
                          size={18}
                          className="transition group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>
    </>
  )
}

export default ContactSection
