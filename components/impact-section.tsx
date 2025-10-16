export function ImpactSection() {
  return (
    <section className="py-[120px] px-12 bg-slate-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Impact</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Why This Matters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-semibold mb-4 text-[#0f172a]">🌡️ Public Health Crisis</h4>
            <p className="text-base text-slate-600 leading-relaxed">
              Over 178,700 people die annually from extreme heat. DeepShade enables shade-aware navigation to reduce
              heat exposure for vulnerable populations during heatwaves.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-semibold mb-4 text-[#0f172a]">🏙️ Urban Planning Tool</h4>
            <p className="text-base text-slate-600 leading-relaxed">
              City planners can identify areas lacking shade coverage and optimize placement of cooling corridors, shade
              structures, and green infrastructure.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-semibold mb-4 text-[#0f172a]">📱 Scalable Solution</h4>
            <p className="text-base text-slate-600 leading-relaxed">
              Unlike LiDAR-based methods, DeepShade only requires satellite imagery—enabling city-wide deployment at low
              cost with real-time updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
