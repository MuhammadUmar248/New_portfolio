"use client"

import React, { useState, useRef, useEffect } from "react"
import { FiX, FiSend, FiMessageCircle } from "react-icons/fi"
import { RiSparkling2Line } from "react-icons/ri"
import { getChatbotResponse } from "@/lib/chatbotResponses"
import { portfolioProfile } from "@/data/portfolio"

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

const GREETING = `Hi! I'm ${portfolioProfile.fullName}'s portfolio assistant (answers based on this site only). Ask about projects, skills, certifications, or how to hire Umar.`

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: GREETING,
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isTyping])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const userText = inputValue.trim()
    const userMessage: Message = {
      text: userText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const aiMessage: Message = {
        text: getChatbotResponse(userText),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 800)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-20 pointer-events-none">
      {!isOpen && (
        <button
          type="button"
          onClick={toggleChat}
          className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-white text-cyan-600 shadow-2xl shadow-cyan-500/15 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-500/25 dark:bg-slate-900/95 dark:text-cyan-400"
          aria-label="Open AI assistant"
        >
          <span className="absolute inset-0 rounded-full bg-cyan-500/10 opacity-0 transition group-hover:opacity-100" />
          <FiMessageCircle size={26} className="relative" />
          <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500" />
          </span>
        </button>
      )}

      {isOpen && (
        <div className="pointer-events-auto flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 shadow-2xl shadow-slate-300/50 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-slate-950/50 sm:w-96">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <RiSparkling2Line size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  AI Assistant
                </p>
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                  {portfolioProfile.name}
                </h3>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Close chat"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="flex-1 space-y-1 overflow-y-auto bg-slate-50/80 p-4 dark:bg-slate-950/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? "rounded-tr-md bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "rounded-tl-md border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.text}
                  </p>
                  <p
                    className={`mt-1.5 text-[10px] uppercase tracking-wider ${
                      message.isUser
                        ? "text-slate-800/70"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="mb-3 flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-500" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-cyan-500/50 focus-within:ring-2 focus-within:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-950/80">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`Ask about ${portfolioProfile.name}...`}
                className="flex-1 bg-transparent px-1 py-2 text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <FiSend size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default AIChatbot
