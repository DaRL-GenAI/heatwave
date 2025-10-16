export function AcknowledgmentsSection() {
  return (
    <section className="py-[80px] px-12 bg-[#0f172a] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase text-[#3b82f6] mb-4">Acknowledgments</div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Support & Funding</h2>
        </div>

        <div className="max-w-[900px] mx-auto">
          <p className="text-base text-slate-300 leading-loose text-center">
            This work was partially supported by <strong>NSF awards #2421839</strong>, <strong>NAIRR #240120</strong>,
            and utilized AWS through the CloudBank project (NSF grant #1925001). Special thanks to OpenAI Researcher
            Access program and Amazon Research Awards.
          </p>
        </div>
      </div>
    </section>
  )
}
