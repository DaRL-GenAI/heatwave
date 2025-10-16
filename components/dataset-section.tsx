"use client"

export function DatasetSection() {
  return (
    <section id="dataset" className="py-[120px] px-12" style={{ background: "#f8fafc" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase mb-4" style={{ color: "#3b82f6" }}>
            Data Collection
          </div>
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Comprehensive Global Dataset
          </h2>
          <p className="text-xl max-w-[700px] mx-auto" style={{ color: "#94a3b8" }}>
            A rigorous pipeline covering geographical diversity, urban layout variability, and traffic rule variations
          </p>
        </div>

        {/* Figure 1: Dataset Creation Pipeline */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8 mx-auto"
            style={{
              background: "#ffffff",
              maxWidth: "1200px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="rounded-xl flex items-center justify-center"
              style={{
                background: "#f1f5f9",
                aspectRatio: "16/7",
              }}
            >
              <img
                src="/images/pipeline.png"
                alt="Dataset Creation Pipeline"
                className="rounded-lg object-contain max-h-[400px] mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-sm font-mono" style={{ color: "#64748b" }}>
              Figure 1: Dataset Creation Pipeline
            </div>
          </div>
        </div>

        {/* Rest of your code unchanged */}
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {/* Geographical Diversity */}
          <div
            className="bg-white p-8 rounded-2xl transition-shadow duration-300"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"
            }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: "#0f172a" }}>
              Geographical Diversity
            </h4>
            <p className="text-base leading-[1.6]" style={{ color: "#64748b" }}>
              Covers 12 cities across Asia, Americas, Europe, and Africa including Beijing, Phoenix, São Paulo, Madrid,
              Cairo, Mumbai, Xi'An, Tempe, Brasilia, Seville, Aswan, and Jaipur.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-2xl transition-shadow duration-300"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"
            }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: "#0f172a" }}>
              Urban Layout Variability
            </h4>
            <p className="text-base leading-[1.6]" style={{ color: "#64748b" }}>
              Captures diverse configurations from dense high-rise areas to sparse flat regions, ensuring model
              robustness across different building densities and architectural styles.
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-2xl transition-shadow duration-300"
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"
            }}
          >
            <h4 className="text-xl font-semibold mb-4" style={{ color: "#0f172a" }}>
              Simulation Pipeline
            </h4>
            <p className="text-base leading-[1.6]" style={{ color: "#64748b" }}>
              Uses Blender-based 3D rendering with OSM building data, aligned with Google Maps tile level 13, capturing
              shades at various solar angles and times throughout the year.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
