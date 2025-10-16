import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AbstractSection } from "@/components/abstract-section"
import { VideoShowcase } from "@/components/video-showcase"
import { StatsSection } from "@/components/stats-section"
import { DatasetSection } from "@/components/dataset-section"
import { MethodSection } from "@/components/method-section"
import { ResultsSection } from "@/components/results-section"
import { AblationSection } from "@/components/ablation-section"
import { ApplicationSection } from "@/components/application-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { TechnicalDetailsSection } from "@/components/technical-details-section"
import { VisualResultsSection } from "@/components/visual-results-section"
import { ImpactSection } from "@/components/impact-section"
import { ResourcesSection } from "@/components/resources-section"
import { TeamSection } from "@/components/team-section"
import { AcknowledgmentsSection } from "@/components/acknowledgments-section"
import { CitationSection } from "@/components/citation-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AbstractSection />
      <VideoShowcase />
      <StatsSection />
      <DatasetSection />
      <MethodSection />
      <ResultsSection />
      <AblationSection />
      <KeyFeaturesSection />
      <TechnicalDetailsSection />
      <VisualResultsSection />
      <ImpactSection />
      <ApplicationSection />
      <ResourcesSection />
      <TeamSection />
      <CitationSection />
      <Footer />
    </main>
  )
}
