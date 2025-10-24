"use client"

export function HeroSection() {
  return (
    <section
      className="pt-[200px] pb-20 px-12"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className="inline-block px-5 py-2 mb-8 text-white text-xs font-semibold tracking-[1px] uppercase rounded-full"
          style={{ background: "#0f172a" }}
        >
          IJCAI 2025
        </div>

        <h1
          className="text-6xl font-bold leading-[1.1] mb-8"
          style={{
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          DeepShade: Enable Shade Simulation by Text-conditioned Image Generation
        </h1>

        <p className="text-2xl max-w-[800px] mb-12 leading-[1.5]" style={{ color: "#64748b" }}>
          Enabling real-time urban shade prediction through AI-powered diffusion models to combat extreme heat and save
          lives
        </p>

        <p className="text-lg mb-4 leading-[1.8]" style={{ color: "#475569" }}>
          Longchao Da · Xiangrui Liu · Mithun Shivakoti · Thirulogasankar Pranav Kutralingam · Yezhou Yang · Hua Wei
        </p>

        <p className="text-base mb-12" style={{ color: "#94a3b8" }}>
          Arizona State University
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://arxiv.org/pdf/2507.12103"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-semibold rounded-xl text-white transition-all duration-300"
            style={{ background: "#0f172a" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1e293b"
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0f172a"
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <span>Read Paper</span>
            <span>→</span>
          </a>

          <a
            href="https://github.com/LongchaoDa/DeepShade_repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-semibold rounded-xl bg-white transition-all duration-300"
            style={{
              color: "#0f172a",
              border: "2px solid #e2e8f0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0f172a"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            GitHub
          </a>

          <a
            href="https://huggingface.co/datasets/DARL-ASU/DeepShade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-semibold rounded-xl bg-white transition-all duration-300"
            style={{
              color: "#0f172a",
              border: "2px solid #e2e8f0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0f172a"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            Dataset
          </a>

          <a
            href="#citation"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-semibold rounded-xl bg-white transition-all duration-300"
            style={{
              color: "#0f172a",
              border: "2px solid #e2e8f0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0f172a"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            BibTeX
          </a>
        </div>
      </div>
    </section>
  )
}
