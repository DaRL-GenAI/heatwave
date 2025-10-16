export function AbstractSection() {
  return (
    <section id="abstract" className="py-[120px] px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[2px] uppercase mb-4" style={{ color: "#3b82f6" }}>
            Overview
          </div>
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Abstract
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto">
          <p className="text-lg leading-[1.8] text-justify" style={{ color: "#475569" }}>
            Heatwaves pose a significant threat to public health, especially as global warming intensifies. However,
            current routing systems (e.g., online maps) fail to incorporate shade information due to the difficulty of
            estimating shades directly from noisy satellite imagery and the limited availability of training data for
            generative models. In this paper, we address these challenges through two main contributions. First, we
            build an extensive dataset covering diverse longitude-latitude regions, varying levels of building density,
            and different urban layouts. Leveraging Blender-based 3D simulations alongside building outlines, we capture
            building shadows under various solar zenith angles throughout the year and at different times of day. These
            simulated shadows are aligned with satellite images in terms of the areas, providing a rich resource for
            learning shade patterns. Second, we propose the DeepShade, a diffusion-based model designed to learn and
            synthesize shade variations over time. It emphasizes the nuance of edge features by jointly considering RGB
            with the Canny edge layer, and incorporates contrastive learning to capture the temporal change rules of
            shade. Then, by conditioning on textual descriptions of known conditions (e.g., time of day, solar angles),
            our framework provides improved performance in generating shade images.
          </p>
        </div>
      </div>
    </section>
  )
}
