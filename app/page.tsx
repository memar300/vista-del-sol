"use client"

import { useState, useRef } from "react"
import { Hero } from "@/components/hero"
import { SubdivisionPlan } from "@/components/SubdivisionPlan"
import { LotsGrid } from "@/components/lots-grid"
import { LeadForm } from "@/components/lead-form"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import { type Lot } from "@/lib/lots-data"

export default function Home() {
  const [selectedLot, setSelectedLot] = useState<string | undefined>(undefined)
  const formRef = useRef<HTMLDivElement>(null)

  const handleLotSelect = (lot: Lot) => {
    setSelectedLot(lot.lotNumber)
    // Scroll to form with a slight delay for state update
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Subdivision plan stays */}
      <SubdivisionPlan />

      {/* Lots grid stays */}
      <LotsGrid onLotSelect={handleLotSelect} />

      {/* Lead form stays */}
      <div ref={formRef}>
        <LeadForm selectedLot={selectedLot} />
      </div>

      {/* Map + footer stay */}
      <MapSection />
      <Footer />
    </main>
  )
}
