"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Plus, Minus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { statusConfig, type LotStatus } from "@/lib/lots-data"

const ZOOM_MIN = 0.5
const ZOOM_MAX = 3
const ZOOM_STEP = 0.25

export function SubdivisionPlan() {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = () => setZoom((z) => Math.min(z + ZOOM_STEP, ZOOM_MAX))
  const handleZoomOut = () => setZoom((z) => Math.max(z - ZOOM_STEP, ZOOM_MIN))
  const handleReset = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => setIsDragging(false)

  const statuses: LotStatus[] = ["available", "contract", "sold", "hold"]

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Subdivision Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the complete layout of Vista del Sol. Use the zoom controls to examine lot details.
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {statuses.map((status) => (
            <div key={status} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full ${statusConfig[status].color}`} />
              <span className="text-sm text-muted-foreground font-medium">
                {statusConfig[status].label}
              </span>
            </div>
          ))}
        </div>

        {/* Zoom Controls */}
        <div className="flex justify-center gap-2 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
            disabled={zoom <= ZOOM_MIN}
            aria-label="Zoom out"
          >
            <Minus className="h-4 w-4" />
          </Button>

          <div className="flex items-center justify-center min-w-[80px] px-3 py-2 bg-card border rounded-md">
            <span className="text-sm font-medium">
              {Math.round(zoom * 100)}%
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
            disabled={zoom >= ZOOM_MAX}
            aria-label="Zoom in"
          >
            <Plus className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleReset}
            aria-label="Reset zoom"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Plan Container */}
        <div className="relative mx-auto max-w-5xl">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-xl border bg-card shadow-lg"
            style={{
              aspectRatio: "4 / 3",
              cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="w-full h-full flex items-center justify-center transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              }}
            >
              <img
                src="/plat/plan.png"
                alt="Vista del Sol Subdivision Plan"
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
              />
            </div>
          </div>

          {zoom > 1 && (
            <p className="text-center text-xs text-muted-foreground mt-3 md:hidden">
              Drag to pan the image
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
