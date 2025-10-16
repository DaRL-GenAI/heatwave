export function TeamSection() {
  return (
    <section className="py-[80px] px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Team</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Authors</h2>
        </div>

        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-lg text-slate-600 leading-loose mb-8">
            <strong>Longchao Da*</strong> · <strong>Xiangrui Liu*</strong> · Mithun Shivakoti · Thirulogasankar Pranav
            Kutralingam · Yezhou Yang · Hua Wei
          </p>
          <p className="text-base text-slate-400 mb-4">(* Equal contribution)</p>
          <p className="text-lg text-slate-600 font-semibold">Arizona State University</p>
          <p className="text-base text-slate-400 mt-8">
            Presented at the International Joint Conference on Artificial Intelligence (IJCAI) 2025
          </p>
        </div>
      </div>
    </section>
  )
}
