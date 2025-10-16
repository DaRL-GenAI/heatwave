"use client"

export function MethodSection() {
  return (
    <section id="method" className="py-[120px] px-12" style={{ background: "#ffffff" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase mb-4" style={{ color: "#3b82f6" }}>
            Innovation
          </div>
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Edge-Enhanced Diffusion Architecture
          </h2>
          <p className="text-xl max-w-[700px] mx-auto" style={{ color: "#94a3b8" }}>
            DeepShade combines cutting-edge computer vision with temporal learning
          </p>
        </div>

        {/* Figure 2: DeepShade Architecture */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8 mx-auto"
            style={{
              background: "#f8fafc",
              maxWidth: "1200px",
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
                src="./images/architecture.png"
                alt="DeepShade Architecture"
                className="rounded-lg object-contain max-h-[400px] mx-auto"
              />
            </div>
            <div className="text-center mt-4 text-sm font-mono" style={{ color: "#64748b" }}>
              Figure 2: DeepShade Architecture
            </div>
          </div>
        </div>

        {/* Rest of your code unchanged */}
        <div className="grid md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#0f172a" }}>
              Edge-Enhanced Conditioning
            </h3>
            <p className="text-base leading-[1.6] mb-6" style={{ color: "#64748b" }}>
              We concatenate RGB building skeleton with Canny edge features to form a 4-channel input (R, G, B, Edge),
              enabling the model to capture subtle shade boundaries with precision.
            </p>
            <div
              className="p-6 rounded-xl"
              style={{
                background: "#f1f5f9",
                fontFamily: "monospace",
                fontSize: "14px",
                color: "#334155",
              }}
            >
              x_cond = [x_sk_R, x_sk_G, x_sk_B, x_edge] ∈ ℝ^(H×W×4)
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#0f172a" }}>
              Contrastive Learning
            </h3>
            <p className="text-base leading-[1.6] mb-6" style={{ color: "#64748b" }}>
              Our contrastive framework enforces temporal consistency by distinguishing between shade patterns at
              different times, using InfoNCE loss to learn realistic shade evolution.
            </p>
            <div
              className="p-6 rounded-xl"
              style={{
                background: "#f1f5f9",
                fontFamily: "monospace",
                fontSize: "14px",
                color: "#334155",
              }}
            >
              L_total = L_ControlNet + 0.1×L_contrastive
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
