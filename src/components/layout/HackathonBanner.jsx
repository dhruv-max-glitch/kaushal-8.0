import React, { useState } from 'react'
import { Award, Info, ChevronRight, X, Cpu, ShieldCheck } from 'lucide-react'

export function HackathonBanner({ onOpenExplainer }) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-forest-900 text-white px-4 py-3 sm:px-6 relative shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-emerald-700/80 rounded-lg text-emerald-200 border border-emerald-500/30">
            <Award className="w-4 h-4 text-emerald-300" />
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-bold tracking-wide uppercase bg-emerald-500/30 text-emerald-100 text-[11px] px-2 py-0.5 rounded-full border border-emerald-400/30">
              KAUSHAL 8.0 • PS-04
            </span>
            <span className="font-semibold text-emerald-50">
              Sustainable Tech Without Limits
            </span>
            <span className="text-emerald-300/80 hidden lg:inline">•</span>
            <span className="text-emerald-200/90 hidden lg:inline">
              Software prototype for campus electricity, water & waste reduction.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={onOpenExplainer}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white bg-emerald-700/60 hover:bg-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-500/40 transition-all font-medium"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Math & Boundary Transparency</span>
            <ChevronRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-emerald-300 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
