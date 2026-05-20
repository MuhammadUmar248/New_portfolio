"use client"
import React, { useState } from "react"
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi"
import emailjs from "emailjs-com"
import SlideUp from "./SlideUp"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

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
    setSubmitStatus(null)

    try {
      await emailjs.send(
        'service_4t1xlup',
        'template_8ykrhkh',
        {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.title || 'No title',
          message: formData.message,
        },
        'NO0p-J39zrybj0zJU'
      )

      setFormData({ name: "", email: "", message: "", title: "" })
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I&apos;ll respond within 24 hours.",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please email me directly at umar@example.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-slate-100 dark:bg-slate-950 py-20 text-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h1 className="mt-4 text-4xl font-bold">Ready to build your next SaaS?</h1>
          <hr className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-500 border-0" />
        </div>

        <SlideUp offset="-100px 0px -100px 0px">
          <div className="max-w-2xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xl shadow-slate-200/40 dark:shadow-black/20 transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-200 font-medium">Subject</label>
                <div className="flex items-center rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent">
                  <FiMessageSquare className="mr-3 text-cyan-600 dark:text-cyan-300" />
                  <input
                    type="text"
                    name="title"
                    placeholder="What&apos;s this about?"
                    className="w-full bg-transparent focus:outline-none text-slate-950 dark:text-slate-100 placeholder-slate-500"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-slate-700 dark:text-slate-200 font-medium">Name</label>
                  <div className="flex items-center rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent">
                    <FiUser className="mr-3 text-cyan-600 dark:text-cyan-300" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-transparent focus:outline-none text-slate-950 dark:text-slate-100 placeholder-slate-500"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700 dark:text-slate-200 font-medium">Email</label>
                  <div className="flex items-center rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent">
                    <FiMail className="mr-3 text-cyan-600 dark:text-cyan-300" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent focus:outline-none text-slate-950 dark:text-slate-100 placeholder-slate-500"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 dark:text-slate-200 font-medium">Message</label>
                <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent">
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full bg-transparent focus:outline-none text-slate-950 dark:text-slate-100 placeholder-slate-500 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-6 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-teal-500 to-blue-500
                  hover:from-teal-600 hover:to-blue-600
                  focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                  transition-all duration-300
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}
                  flex items-center justify-center
                `}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>

              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700' : 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-700'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default ContactSection