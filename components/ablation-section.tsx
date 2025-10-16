export function AblationSection() {
  return (
    <section className="py-[120px] px-12 bg-slate-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Ablation Study</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Component Contributions</h2>
          <p className="text-xl text-slate-500 max-w-[700px] mx-auto">
            Evaluating the importance of each component in DeepShade (tested on Tempe dataset)
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#0f172a] text-white text-sm font-semibold uppercase tracking-wider p-5 text-left">
                  Model Configuration
                </th>
                <th className="bg-[#0f172a] text-white text-sm font-semibold uppercase tracking-wider p-5 text-left">
                  SSIM ↑
                </th>
                <th className="bg-[#0f172a] text-white text-sm font-semibold uppercase tracking-wider p-5 text-left">
                  mIoU ↑
                </th>
                <th className="bg-[#0f172a] text-white text-sm font-semibold uppercase tracking-wider p-5 text-left">
                  B-IoU ↑
                </th>
                <th className="bg-[#0f172a] text-white text-sm font-semibold uppercase tracking-wider p-5 text-left">
                  MSE ↓
                </th>
                <th className="bg-[#0f172a] text-white text-sm font-semibold uppercase tracking-wider p-5 text-left">
                  LPIPS ↓
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 border-b border-slate-200 font-medium text-[#0f172a]">Backbone Model (Direct)</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.4252 ± 0.01</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.0358 ± 0.00</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.0213 ± 0.00</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">41.2666 ± 1.65</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.7967 ± 0.00</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 border-b border-slate-200 font-medium text-[#0f172a]">Vanilla ControlNet</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.9690 ± 0.04</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.2736 ± 0.13</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.0812 ± 0.05</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">18.3388 ± 3.37</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.3304 ± 0.03</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 border-b border-slate-200 font-medium text-[#0f172a]">+ Edge Conditioning</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.9684 ± 0.01</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.2898 ± 0.04</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.1040 ± 0.01</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">18.6686 ± 0.70</td>
                <td className="p-4 border-b border-slate-200 text-[#0f172a]">0.3358 ± 0.01</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-bold text-[#0f172a]">DeepShade (Full Model)</td>
                <td className="p-4 text-green-600 font-bold">0.9692 ± 0.04</td>
                <td className="p-4 text-green-600 font-bold">0.2903 ± 0.20</td>
                <td className="p-4 text-green-600 font-bold">0.1240 ± 0.07</td>
                <td className="p-4 text-green-600 font-bold">18.1721 ± 4.09</td>
                <td className="p-4 text-green-600 font-bold">0.3024 ± 0.29</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
