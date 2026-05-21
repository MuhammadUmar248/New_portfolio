import {
  portfolioProfile,
  portfolioSkills,
  portfolioProjects,
  portfolioCertificates,
} from "@/data/portfolio"

function formatSkillGroups(): string {
  return [
    `Frontend: ${portfolioSkills.frontend.join(", ")}`,
    `Backend: ${portfolioSkills.backend.join(", ")}`,
    `Database: ${portfolioSkills.database.join(", ")}`,
    `AI & ML: ${portfolioSkills.ai.join(", ")}`,
    `Tools: ${portfolioSkills.tools.join(", ")}`,
  ].join("\n")
}

function formatProjects(short = false): string {
  return portfolioProjects
    .map((p, i) => {
      if (short) return `${i + 1}. ${p.name}`
      return `${p.name}: ${p.description}\nImpact: ${p.impact}\nLive demo: ${p.link}\nCode: ${p.githubUrl}`
    })
    .join("\n\n")
}

function findProjectByQuery(query: string) {
  const normalized = query.toLowerCase()
  return portfolioProjects.find(
    (p) =>
      p.name.toLowerCase().includes(normalized) ||
      normalized.includes(p.name.toLowerCase()) ||
      p.tags.some((tag) => normalized.includes(tag.toLowerCase())) ||
      (normalized.includes("recruitment") && p.name.includes("Recruitment")) ||
      (normalized.includes("gps") && p.name.includes("GPS")) ||
      (normalized.includes("tracker") && p.name.includes("GPS")) ||
      (normalized.includes("draft") && p.name.includes("Daily Drafts")) ||
      (normalized.includes("automind") && p.name.includes("AutoMind"))
  )
}

export function getChatbotResponse(query: string): string {
  const q = query.toLowerCase().trim()
  const p = portfolioProfile

  if (!q) {
    return `Ask me about ${p.fullName}'s skills, projects, certifications, CV, or how to contact him.`
  }

  const projectMatch = findProjectByQuery(q)
  if (projectMatch) {
    return `${projectMatch.name}\n\n${projectMatch.description}\n\nImpact: ${projectMatch.impact}\nTech: ${projectMatch.tags.join(", ")}\nLive demo: ${projectMatch.link}\nCode: ${projectMatch.githubUrl}`
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("good morning") ||
    q.includes("good evening")
  ) {
    return `Hello! I'm ${p.fullName}'s AI assistant. I can share details about his SaaS and AI engineering work, projects, skills, and certifications. What would you like to know?`
  }

  if (
    q.includes("name") ||
    q.includes("who are you") ||
    q.includes("who is umar") ||
    q.includes("who is he") ||
    q.match(/\bwho\b/)
  ) {
    return `${p.fullName} is a ${p.title}. ${p.summary}`
  }

  if (q.includes("cv") || q.includes("resume")) {
    return `View Umar's CV in the browser (${p.cvUrl}) or download it from the navbar, hero, or About section.`
  }

  if (
    q.includes("about") ||
    q.includes("summary") ||
    q.includes("introduce") ||
    q.includes("background") ||
    q.includes("tell me about")
  ) {
    return `${p.aboutTitle}\n\n${p.aboutSummary}\n\n${p.whatIDo}`
  }

  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("tech stack") ||
    q.includes("stack") ||
    q.includes("tools") ||
    q.includes("expertise")
  ) {
    return `Here is ${p.name}'s current tech stack from his portfolio:\n\n${formatSkillGroups()}`
  }

  if (
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("work") ||
    q.includes("built") ||
    q.includes("app") ||
    q.includes("saas")
  ) {
    if (q.includes("how many") || q.includes("count") || q.includes("number")) {
      return `${p.name} has ${p.projectCount} featured projects on this portfolio — ${p.projectCountNote}.`
    }
    return `Here are ${p.name}'s featured projects:\n\n${formatProjects()}`
  }

  if (
    q.includes("certificate") ||
    q.includes("certification") ||
    q.includes("credential") ||
    q.includes("cert")
  ) {
    return portfolioCertificates
      .map((c) => `${c.title}: ${c.description}`)
      .join("\n\n")
  }

  if (
    q.includes("education") ||
    q.includes("study") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("college") ||
    q.includes("school")
  ) {
    return `${p.fullName}'s portfolio highlights professional certifications rather than a formal education section:\n\n${portfolioCertificates.map((c) => `• ${c.title}: ${c.description}`).join("\n")}`
  }

  if (
    q.includes("service") ||
    q.includes("what do you do") ||
    q.includes("what does he do") ||
    q.includes("offer") ||
    q.includes("hire") ||
    q.includes("mvp") ||
    q.includes("help me build")
  ) {
    return p.whatIDo
  }

  if (
    q.includes("ai") ||
    q.includes("openai") ||
    q.includes("langchain") ||
    q.includes("rag") ||
    q.includes("gpt") ||
    q.includes("machine learning") ||
    q.includes("automation")
  ) {
    return `${p.name} specializes in AI-powered SaaS. He integrates OpenAI (GPT-4o), LangChain, vector databases, and RAG pipelines into production apps. Notable AI projects include AutoMind AI and Daily Drafts AI.`
  }

  if (
    q.includes("experience") ||
    q.includes("years") ||
    q.includes("how long")
  ) {
    return `${p.fullName} focuses on production-ready SaaS and AI engineering with ${p.projectCount} live projects showcased on this portfolio. His work spans full-stack development, AI integration, and scalable product delivery.`
  }

  if (
    q.includes("focus") ||
    q.includes("specializ") ||
    q.includes("frontend")
  ) {
    return `${p.name}'s portfolio emphasizes a ${p.focus.toLowerCase()} approach — ${p.projectCountNote}.`
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("message") ||
    q.includes("get in touch")
  ) {
    return p.contactNote
  }

  if (q.includes("github") || q.includes("git hub")) {
    return `GitHub: ${p.github}`
  }

  if (q.includes("linkedin") || q.includes("linked in")) {
    return `LinkedIn: ${p.linkedin}`
  }

  if (q.includes("social") || q.includes("link")) {
    return `Connect with ${p.fullName}:\nGitHub: ${p.github}\nLinkedIn: ${p.linkedin}`
  }

  if (q.includes("tagline") || q.includes("headline") || q.includes("slogan")) {
    return `${p.tagline} — ${p.headline}`
  }

  if (q.includes("thank")) {
    return `You're welcome! Feel free to ask more about ${p.name}'s projects or skills.`
  }

  if (q.includes("bye") || q.includes("goodbye")) {
    return `Goodbye! Reach out anytime via the contact section if you'd like to work with ${p.name}.`
  }

  return `I'm ${p.fullName}'s portfolio assistant. I can answer questions about his skills, SaaS projects, certifications, AI work, and contact options. Try asking "What projects has Umar built?" or "What is his tech stack?"`
}
