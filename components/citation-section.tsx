"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function CitationSection() {
  const [copied, setCopied] = useState(false)

  const bibtex = `@article{da2025deepshade,
  title={Deepshade: Enable shade simulation by text-conditioned image generation},
  author={Da, Longchao and Liu, Xiangrui and Shivakoti, Mithun and 
          Kutralingam, Thirulogasankar Pranav and Yang, Yezhou and Wei, Hua},
  journal={arXiv preprint arXiv:2507.12103},
  year={2025}
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="citation" className="py-20 px-6 lg:px-8" style={{ background: "#0f172a" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#3b82f6" }}>
            Citation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Use This Work
          </h2>
          <p className="text-lg" style={{ color: "#94a3b8" }}>
            If you find DeepShade useful for your research, please cite our paper
          </p>
        </div>

        <Card
          className="relative p-6 rounded-xl"
          style={{ background: "#1e293b", border: "1px solid #334155" }}
        >
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-4 right-4 gap-2 text-slate-300 hover:text-white"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </Button>
          <pre
            className="text-xs md:text-sm font-mono overflow-x-auto leading-relaxed"
            style={{ color: "#e2e8f0" }}
          >
            {bibtex}
          </pre>
        </Card>
      </div>
    </section>
  )
}
