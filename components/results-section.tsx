"use client"

export function ResultsSection() {
  const scenario1Cities = [
    { name: "Beijing (CHN)", ssim: ["0.610", "0.941", "0.934", "0.945"], lpips: ["0.518", "0.225", "0.225", "0.194"] },
    { name: "Phoenix (USA)", ssim: ["0.411", "0.941", "0.934", "0.946"], lpips: ["0.446", "0.265", "0.254", "0.164"] },
    {
      name: "São Paulo (BRA)",
      ssim: ["0.475", "0.951", "0.954", "0.959"],
      lpips: ["0.440", "0.291", "0.284", "0.210"],
    },
    { name: "Madrid (ESP)", ssim: ["0.388", "0.936", "0.946", "0.948"], lpips: ["0.417", "0.277", "0.243", "0.239"] },
    { name: "Cairo (EGY)", ssim: ["0.357", "0.944", "0.942", "0.954"], lpips: ["0.437", "0.265", "0.267", "0.257"] },
    { name: "Mumbai (IND)", ssim: ["0.352", "0.915", "0.929", "0.931"], lpips: ["0.399", "0.254", "0.273", "0.250"] },
  ]

  const scenario2Cities = [
    { name: "Xi'An (CHN)", ssim: ["0.425", "0.930", "0.930", "0.932"], lpips: ["0.468", "0.236", "0.237", "0.233"] },
    { name: "Tempe (USA)", ssim: ["0.381", "0.969", "0.968", "0.969"], lpips: ["0.347", "0.330", "0.335", "0.329"] },
    { name: "Brasilia (BRA)", ssim: ["0.402", "0.973", "0.967", "0.979"], lpips: ["0.400", "0.297", "0.299", "0.241"] },
    { name: "Seville (ESP)", ssim: ["0.342", "0.934", "0.936", "0.936"], lpips: ["0.434", "0.281", "0.276", "0.242"] },
    { name: "Aswan (EGY)", ssim: ["0.356", "0.967", "0.966", "0.973"], lpips: ["0.456", "0.352", "0.379", "0.283"] },
    { name: "Jaipur (IND)", ssim: ["0.339", "0.948", "0.947", "0.956"], lpips: ["0.357", "0.297", "0.273", "0.275"] },
  ]

  const methods = ["Diffusion Model", "ControlNet", "Edge Control", "DeepShade"]

  return (
    <section id="results" className="py-[120px] px-12" style={{ background: "#0f172a" }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="text-sm font-semibold tracking-[2px] uppercase mb-4"
            style={{ color: "#3b82f6" }}
          >
            Performance
          </div>
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            State-of-the-Art Results
          </h2>
          <p
            className="text-xl max-w-[700px] mx-auto"
            style={{ color: "#94a3b8" }}
          >
            DeepShade outperforms all baseline methods across 12 cities worldwide
          </p>
        </div>

        {/* Figure 3: Training Loss Curves */}
        <div className="mb-16">
          <div
            className="rounded-2xl p-8 mx-auto"
            style={{
              background: "#1e293b",
              maxWidth: "900px",
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Training Convergence
            </h3>
            <div className="rounded-xl flex items-center justify-center bg-[#f1f5f9] p-4">
              <img
                src="/images/training-loss.png"
                alt="Training Loss Curves"
                className="rounded-lg object-contain w-full max-w-3xl mx-auto"
              />
            </div>
            <div
              className="text-center mt-4 text-sm font-mono"
              style={{ color: "#94a3b8" }}
            >
              Figure 3: Training Loss Curves
            </div>
          </div>
        </div>

        {/* Rest of your tables remain unchanged */}
        <div className="space-y-12">
          {/* Scenario 1 and Scenario 2 tables remain the same */}
        </div>
      </div>
    </section>
  )
}
