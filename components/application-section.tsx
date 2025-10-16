"use client"

export function ApplicationSection() {
  return (
    <section id="application" className="py-[120px] px-12" style={{ background: "#ffffff" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="text-sm font-semibold tracking-[2px] uppercase mb-4"
            style={{ color: "#3b82f6" }}
          >
            Real-World Impact
          </div>
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Shade-Aware Route Planning
          </h2>
          <p
            className="text-xl max-w-[700px] mx-auto"
            style={{ color: "#94a3b8" }}
          >
            Protecting people from extreme heat through intelligent navigation
          </p>
        </div>

        {/* Figure 4: Route Planning Demonstration */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8 mx-auto"
            style={{
              background: "#f8fafc",
              maxWidth: "1200px",
            }}
          >
            <div className="rounded-xl flex items-center justify-center bg-[#f1f5f9] p-4">
              <img
                src="./images/route-planning.png"
                alt="Route Planning Demonstration"
                className="rounded-lg object-contain w-full max-w-5xl mx-auto"
              />
            </div>
            <div
              className="text-center mt-4 text-sm font-mono"
              style={{ color: "#64748b" }}
            >
              Figure 4: Route Planning Demonstration
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
          {/* Proof of Concept */}
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#0f172a" }}
            >
              Proof-of-Concept Demo
            </h3>
            <p
              className="text-base leading-[1.6] mb-6"
              style={{ color: "#64748b" }}
            >
              We demonstrate DeepShade's practical utility through a route planning
              system deployed at Arizona State University. The system generates
              shade maps for any time of day, calculates shade ratios for road
              segments, and suggests optimal routes balancing distance with shade
              coverage.
            </p>
            <div className="space-y-4">
              <div
                className="p-4 rounded-xl"
                style={{ background: "#f1f5f9" }}
              >
                <div
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#0f172a" }}
                >
                  Input
                </div>
                <div className="text-sm" style={{ color: "#64748b" }}>
                  Origin, Destination, Time, User Preference (shade vs. distance
                  weight)
                </div>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{ background: "#f1f5f9" }}
              >
                <div
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#0f172a" }}
                >
                  Output
                </div>
                <div className="text-sm" style={{ color: "#64748b" }}>
                  Optimized route with shade ratio visualization and distance
                  metrics
                </div>
              </div>
            </div>
          </div>

          {/* Public Health Impact */}
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#0f172a" }}
            >
              Public Health Impact
            </h3>
            <p
              className="text-base leading-[1.6] mb-6"
              style={{ color: "#64748b" }}
            >
              With over 178,700 annual deaths from extreme heat globally,
              shade-aware navigation can significantly reduce heat exposure for
              vulnerable populations including the elderly and outdoor workers.
            </p>
            <div className="space-y-4">
              {/* Heat Mitigation */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dbeafe" }}
                >
                  <span style={{ color: "#3b82f6", fontSize: "20px" }}>🌡️</span>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Heat Mitigation
                  </div>
                  <div className="text-sm" style={{ color: "#64748b" }}>
                    Reduce direct sun exposure during peak heat hours
                  </div>
                </div>
              </div>

              {/* Urban Planning */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#dcfce7" }}
                >
                  <span style={{ color: "#10b981", fontSize: "20px" }}>🗺️</span>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Urban Planning
                  </div>
                  <div className="text-sm" style={{ color: "#64748b" }}>
                    Identify areas needing artificial shade infrastructure
                  </div>
                </div>
              </div>

              {/* Real-Time Adaptation */}
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#fef3c7" }}
                >
                  <span style={{ color: "#f59e0b", fontSize: "20px" }}>⚡</span>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#0f172a" }}
                  >
                    Real-Time Adaptation
                  </div>
                  <div className="text-sm" style={{ color: "#64748b" }}>
                    Dynamic routing based on time of day and solar angles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
