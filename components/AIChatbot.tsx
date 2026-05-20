"use client"

import React, { useState, useRef, useEffect } from "react"
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa"

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I&aposm Umar&aposs AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Portfolio owner information
  const portfolioInfo = {
    name: "Umar",
    occupation: "Web Developer",
    experience: "2+ years",
    education: [
      "BS in Computer Science from Superior University (2021 - Present)",
      "Intermediate in Computer Science from Punjab College (2019 - 2021)"
    ],
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
      backend: ["Node.js", "Express", ],
      database: ["MongoDB", "Firebase"],
      tools: ["Git", "Vercel", ]
    },
    projects: [
      "E-commerce platform with React and Node.js",
      "Portfolio website with Next.js and Tailwind CSS",
      "Task management app with MERN stack"
    ],
    interests: ["Web Development", "Mobile App Development"]
  }
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }
    
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Process user query and generate appropriate response
    setTimeout(() => {
      const userQuery = inputValue.toLowerCase()
      let responseText = ""

      // Check for specific keywords to provide relevant information
      if (userQuery.includes("name") || userQuery.includes("who") || userQuery.includes("about")) {
        responseText = `My name is ${portfolioInfo.name} and I&apos;m a ${portfolioInfo.occupation} with ${portfolioInfo.experience} of experience in building web applications and software solutions.`
      } 
      else if (userQuery.includes("education") || userQuery.includes("study") || userQuery.includes("degree") || userQuery.includes("university")) {
        responseText = `Regarding education: ${portfolioInfo.education.join(". ")}. Currently focusing on modern web technologies.`
      }
      else if (userQuery.includes("skill") || userQuery.includes("technology") || userQuery.includes("tech stack")) {
        responseText = `My technical skills include:\n\nFrontend: ${portfolioInfo.skills.frontend.join(", ")}\nBackend: ${portfolioInfo.skills.backend.join(", ")}\nDatabases: ${portfolioInfo.skills.database.join(", ")}\nTools: ${portfolioInfo.skills.tools.join(", ")}`
      }
      else if (userQuery.includes("project") || userQuery.includes("work") || userQuery.includes("portfolio")) {
        responseText = `Some of my notable projects include: ${portfolioInfo.projects.join(", ")}. Each project demonstrates my ability to create scalable and user-friendly applications.`
      }
      else if (userQuery.includes("interest") || userQuery.includes("hobby") || userQuery.includes("passion")) {
        responseText = `My professional interests include: ${portfolioInfo.interests.join(", ")}. I&apos;m passionate about creating impactful digital solutions.`
      }
      else if (userQuery.includes("contact") || userQuery.includes("hire") || userQuery.includes("email")) {
        responseText = "You can contact me through the contact form on this website, or connect with me on LinkedIn or GitHub using the links in the footer section."
      }
      else if (userQuery.includes("hello") || userQuery.includes("hi") || userQuery.includes("hey")) {
        responseText = `Hello! I&apos;m ${portfolioInfo.name}&apos;s AI assistant. How can I help you learn more about ${portfolioInfo.name} and his work?`
      }
      else {
        responseText = `I&apos;m ${portfolioInfo.name}&apos;s AI assistant. I can tell you about his skills, education, projects, or interests. What would you like to know?`
      }
      
      const aiMessage: Message = {
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`
          ${isOpen ? 'hidden' : 'flex'}
          items-center justify-center
          w-14 h-14 rounded-full
          bg-gradient-to-r from-teal-500 to-blue-500
          text-white shadow-lg
          hover:shadow-xl transform hover:scale-105 transition-all duration-300
        `}
        aria-label="Open chat"
      >
        <FaRobot size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="
          w-80 sm:w-96 h-96
          bg-white dark:bg-stone-800
          rounded-lg shadow-2xl
          flex flex-col
          border border-gray-200 dark:border-stone-700
          overflow-hidden
        ">
          {/* Chat header */}
          <div className="
            bg-gradient-to-r from-teal-500 to-blue-500
            p-4 text-white
            flex justify-between items-center
          ">
            <div className="flex items-center">
              <FaRobot className="mr-2" />
              <h3 className="font-bold">Umar&apos;s AI Assistant</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    max-w-[80%] p-3 rounded-lg
                    ${message.isUser
                      ? 'bg-teal-500 text-white rounded-tr-none'
                      : 'bg-gray-100 dark:bg-stone-700 text-gray-800 dark:text-gray-200 rounded-tl-none'}
                  `}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-stone-700 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Umar..."
              className="
                flex-1 px-4 py-2 rounded-l-lg
                bg-gray-100 dark:bg-stone-700
                text-gray-800 dark:text-gray-200
                focus:outline-none
              "
            />
            <button
              type="submit"
              className="
                bg-gradient-to-r from-teal-500 to-blue-500
                text-white px-4 rounded-r-lg
                hover:opacity-90 transition-opacity
              "
              aria-label="Send message"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default AIChatbot