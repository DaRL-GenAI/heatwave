export function ResourcesSection() {
  return (
    <section className="py-[80px] px-12 bg-[#0f172a] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Resources</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Get Started</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10">
            <h4 className="text-xl font-semibold mb-4">📄 Paper</h4>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Read the full IJCAI 2025 paper with technical details and comprehensive experiments.
            </p>
            <a
              href="https://arxiv.org/pdf/2507.12103"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f172a] text-white font-semibold rounded-xl hover:bg-[#1e293b] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              arXiv PDF
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10">
            <h4 className="text-xl font-semibold mb-4">💻 Code</h4>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Access the complete codebase, training scripts, and inference notebooks on GitHub.
            </p>
            <a
              href="https://github.com/LongchaoDa/DeepShade_repo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f172a] text-white font-semibold rounded-xl hover:bg-[#1e293b] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              GitHub Repo
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10">
            <h4 className="text-xl font-semibold mb-4">🗂️ Dataset</h4>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Download the comprehensive shade dataset covering 12 cities across 3 continents.
            </p>
            <a
              href="https://huggingface.co/datasets/DARL-ASU/DeepShade"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f172a] text-white font-semibold rounded-xl hover:bg-[#1e293b] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              HuggingFace
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
