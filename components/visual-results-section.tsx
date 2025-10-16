"use client"

export function VisualResultsSection() {
  return (
    <section className="py-[100px] px-12 bg-[#0f172a] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">
            Visual Results
          </div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Generated Shade Examples
          </h2>
          <p className="text-xl text-slate-400 max-w-[700px] mx-auto">
            DeepShade generates realistic shadows across diverse urban environments and times of day
          </p>
        </div>

        {/* Single Figure instead of 3 separate cards */}
        <div className="bg-[#1e293b] p-8 rounded-3xl max-w-[1200px] mx-auto">
          <img
            src="./images/shade-variations.png"
            alt="Shade variations throughout the day"
            className="rounded-2xl object-contain mx-auto"
          />
          <div className="text-center mt-4 text-sm font-mono text-slate-400">
            Figure 4: Shade orientation changes across different times of the day
          </div>
        </div>
      </div>
    </section>
  )
}
