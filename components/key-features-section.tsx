export function KeyFeaturesSection() {
  return (
    <section className="py-[120px] px-12 bg-slate-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Key Features</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Why DeepShade Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-semibold mb-4 text-[#0f172a]">🎯 Edge-Enhanced Conditioning</h4>
            <p className="text-base text-slate-600 leading-relaxed">
              Combines RGB satellite imagery with Canny edge detection (4-channel input) to capture precise building
              boundaries and shade edges, ensuring sharp and accurate shadow generation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-semibold mb-4 text-[#0f172a]">⏱️ Temporal Consistency</h4>
            <p className="text-base text-slate-600 leading-relaxed">
              Contrastive learning with InfoNCE loss enforces temporal rules - shadows from nearby time steps are more
              similar than distant ones, maintaining realistic shade progression throughout the day.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-semibold mb-4 text-[#0f172a]">🌍 Global Generalization</h4>
            <p className="text-base text-slate-600 leading-relaxed">
              Trained on diverse cities across 3 continents with varying building densities and layouts, the model
              generalizes to unseen locations with only a satellite image - no LiDAR required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
