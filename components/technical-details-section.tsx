export function TechnicalDetailsSection() {
  return (
    <section className="py-[120px] px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Technical Details</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Model Architecture & Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1400px] mx-auto mt-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#0f172a]">Training Configuration</h3>
            <ul className="space-y-0">
              {[
                "Base model: ControlNet with Stable Diffusion backbone",
                "Input: 4-channel (RGB + Edge), 512×512 resolution",
                "Loss: L_total = L_ControlNet + 0.1×L_contrastive",
                "Temperature τ = 0.1 for InfoNCE loss",
                "Dataset split: 70% train, 30% test",
                "Training: 50 epochs, converges 3× faster than vanilla ControlNet",
              ].map((item, i) => (
                <li key={i} className="text-base text-slate-600 py-4 border-b border-slate-200 flex items-center gap-4">
                  <span className="text-[#2563eb] font-bold text-xl">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#0f172a]">Data Pipeline</h3>
            <ul className="space-y-0">
              {[
                "Blender-based 3D simulation with OSM building data",
                "Aligned with Google Maps tile level 13",
                "Multiple solar angles and times captured per location",
                "Ground truth: x_gt = x_shade - x_skeleton - I(x_shade ≤ α)",
                "Positive pairs: same location, 1-hour temporal gap",
                "Contrastive buffer with balanced pos/neg sampling",
              ].map((item, i) => (
                <li key={i} className="text-base text-slate-600 py-4 border-b border-slate-200 flex items-center gap-4">
                  <span className="text-[#2563eb] font-bold text-xl">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
