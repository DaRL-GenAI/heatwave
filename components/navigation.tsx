"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#abstract", label: "Abstract" },
    { href: "#dataset", label: "Dataset" },
    { href: "#method", label: "Method" },
    { href: "#results", label: "Results" },
    { href: "#citation", label: "Citation" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-12 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold" style={{ color: "#0f172a" }}>
            DeepShade
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium transition-colors duration-300 hover:text-[#2563eb]"
                  style={{ color: "#0f172a" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
