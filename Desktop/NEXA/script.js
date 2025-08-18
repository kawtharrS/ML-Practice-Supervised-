// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10")
      entry.target.classList.add("opacity-100", "translate-y-0")
    }
  })
}, observerOptions)

// Observe all sections with data-animate attribute
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]")
  animatedElements.forEach((el) => observer.observe(el))

  // Form submission handler
  const contactForm = document.getElementById("contactForm")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = contactForm.querySelector('input[type="text"]').value
    const email = contactForm.querySelector('input[type="email"]').value
    const message = contactForm.querySelector("textarea").value

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields")
      return
    }

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    submitButton.textContent = "Sending..."
    submitButton.disabled = true

    setTimeout(() => {
      alert("Thank you for your interest! We will contact you soon.")
      contactForm.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 2000)
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add parallax effect to floating shapes
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const shapes = document.querySelectorAll(".floating-shape")

    shapes.forEach((shape, index) => {
      const speed = 0.5 + index * 0.1
      const yPos = -(scrolled * speed)
      shape.style.transform = `translateY(${yPos}px)`
    })
  })

  // Add mouse movement effect to hero section
  const hero = document.querySelector("section")
  hero.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window

    const xPercent = (clientX / innerWidth - 0.5) * 2
    const yPercent = (clientY / innerHeight - 0.5) * 2

    const cube = document.querySelector(".cube")
    if (cube) {
      cube.style.transform = `rotateX(${yPercent * 10}deg) rotateY(${xPercent * 10}deg)`
    }
  })

  // Reset cube rotation when mouse leaves hero
  hero.addEventListener("mouseleave", () => {
    const cube = document.querySelector(".cube")
    if (cube) {
      cube.style.transform = ""
    }
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
