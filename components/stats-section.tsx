export function StatsSection() {
  const stats = [
    { value: "178K+", label: "Annual Heat Deaths" },
    { value: "12", label: "Cities Tested" },
    { value: "6", label: "Countries Covered" },
    { value: "70/30", label: "Train/Test Split" },
  ]

  return (
    <section className="py-[120px] px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[56px] font-bold leading-none mb-4" style={{ color: "#2563eb" }}>
                {stat.value}
              </div>
              <div className="text-base font-medium" style={{ color: "#64748b" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
