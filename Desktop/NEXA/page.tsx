"use client"

import { useState, useEffect } from "react"
// Update the import path below if your Button component is located elsewhere
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AutomationLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Check which sections are visible
      const sections = ["hero", "about", "services", "why-choose", "contact"]
      const newVisibleSections = new Set<string>()

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            newVisibleSections.add(sectionId)
          }
        }
      })

      setVisibleSections(newVisibleSections)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">AutoFlow</div>
          <div className="hidden md:flex space-x-8">
            {["About", "Services", "Why Choose Us", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["about", "services", "why-choose", "contact"][index])}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`${visibleSections.has("hero") ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Automate Your Future</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge automation solutions that streamline workflows, boost
              productivity, and unlock unprecedented growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Automation Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
                onClick={() => scrollToSection("services")}
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${visibleSections.has("about") ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Pioneering Automation Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another automation company. We're visionaries crafting the future of business efficiency
              through intelligent automation solutions that adapt, learn, and evolve with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Innovation First", desc: "Cutting-edge technology meets practical solutions" },
              { icon: "⚡", title: "Lightning Fast", desc: "Deploy automation solutions in record time" },
              { icon: "🎯", title: "Precision Focused", desc: "Tailored automation for your specific needs" },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-300 ${
                  visibleSections.has("about") ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${visibleSections.has("services") ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Automation Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple task automation to complex AI-driven workflows, we deliver solutions that transform how you
              work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Workflow Automation",
                desc: "Intelligent workflows that learn and adapt to your business patterns",
                icon: "🤖",
              },
              {
                title: "Process Optimization",
                desc: "Streamline operations with data-driven process improvements",
                icon: "⚙️",
              },
              { title: "Integration Hub", desc: "Connect all your tools and platforms seamlessly", icon: "🔗" },
              {
                title: "Smart Analytics",
                desc: "Real-time insights and predictive analytics for better decisions",
                icon: "📊",
              },
              {
                title: "Custom Automation",
                desc: "Bespoke automation solutions tailored to your unique needs",
                icon: "🛠️",
              },
              {
                title: "24/7 Monitoring",
                desc: "Continuous monitoring and optimization of your automated systems",
                icon: "👁️",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  visibleSections.has("services") ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${visibleSections.has("why-choose") ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Why Choose AutoFlow?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${visibleSections.has("why-choose") ? "animate-slide-up" : "opacity-0"}`}>
              <div className="space-y-8">
                {[
                  { number: "500+", label: "Businesses Automated", desc: "Trusted by companies worldwide" },
                  { number: "99.9%", label: "Uptime Guarantee", desc: "Reliable automation you can count on" },
                  { number: "75%", label: "Average Cost Reduction", desc: "Significant savings through automation" },
                  { number: "24/7", label: "Expert Support", desc: "Always here when you need us" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-primary">{stat.number}</div>
                    <div>
                      <div className="text-xl font-semibold">{stat.label}</div>
                      <div className="text-muted-foreground">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${visibleSections.has("why-choose") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 border-none">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
                  <p className="text-muted-foreground">
                    Join hundreds of companies that have revolutionized their operations with our automation solutions.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Free consultation and strategy session",
                      "Custom automation roadmap",
                      "Rapid deployment and implementation",
                      "Ongoing support and optimization",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${visibleSections.has("contact") ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Automate Your Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our automation experts today.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card
              className={`p-8 ${visibleSections.has("contact") ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      placeholder="John"
                      className="focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    className="focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-glow"
                >
                  Start Your Automation Journey
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-4">AutoFlow</div>
            <p className="text-muted-foreground mb-6">Transforming businesses through intelligent automation</p>
            <div className="flex justify-center space-x-6">
              {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <a key={item} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
              © 2024 AutoFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
