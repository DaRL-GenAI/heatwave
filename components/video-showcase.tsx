"use client"

export function VideoShowcase() {
  return (
    <section
      className="py-[120px] px-12"
      style={{ background: "#0f172a", color: "white" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="text-sm font-semibold tracking-[2px] uppercase mb-4"
            style={{ color: "#3b82f6" }}
          >
            Live Demo
          </div>
          <h2
            className="text-5xl font-bold mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Shadow Movement Throughout the Day
          </h2>
          <p
            className="text-xl max-w-[700px] mx-auto"
            style={{ color: "#94a3b8" }}
          >
            Watch real-time shade predictions as DeepShade simulates shadow
            patterns through different times of the day
          </p>
        </div>

        {/* GIF Showcase */}
        <div
          className="max-w-[1200px] mx-auto rounded-3xl overflow-hidden flex justify-center"
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.3)" }}
        >
          <img
            src="/images/shadow-demo.gif"
            alt="DeepShade Shadow Simulation"
            className="rounded-2xl object-contain w-full max-w-4xl max-h-[600px]"
          />
        </div>
      </div>
    </section>
  )
}
