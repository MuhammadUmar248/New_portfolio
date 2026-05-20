"use client"

import AboutSection from "@/components/AboutSection"
import CertificatesSection from "@/components/CertificatesSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import AIChatbot from "@/components/AIChatbot"
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <ContactSection />
      <AIChatbot />
    </>
  )
}
