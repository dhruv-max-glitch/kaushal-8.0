import React, { useState } from 'react'
import { ECO_RECOMMENDATIONS } from '../../data/ecoRecommendations'
import {
  Lightbulb,
  Zap,
  Droplets,
  Trash2,
  Recycle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react'

export function EcoRecommendationsView({ records, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all') // all | electricity | water | waste
  const [implementedTips, setImplementedTips] = useState(() => {
    try {
      const saved = localStorage.getItem('ecotrack_implemented_tips')
      return saved ? JSON.parse(saved) : ['tip-elec-2', 'tip-water-1']
    } catch {
      return ['tip-elec-2', 'tip-water-1']
    }
  })

  const toggleImplemented = (id) => {
    setImplementedTips((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      try {
        localStorage.setItem('ecotrack_implemented_tips', JSON.stringify(next))
      } catch (e) {
        console.error(e)
      }
      return next
    })
  }

  const filteredTips = ECO_RECOMMENDATIONS.filter((tip) => {
    if (activeCategory === 'all') return true
    return tip.category === activeCategory
  })

  const progressPercent = Math.round((implementedTips.length / ECO_RECOMMENDATIONS.length) * 100)

  return (
    <div className="space-y-6">
      {/* Top Progress & Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-forest-900 text-white rounded-2xl p-6 shadow-elevated flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 border border-emerald-500/30 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Campus Conservation Framework</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            Practical Campus Sustainability Initiatives
          </h3>
          <p className="text-xs text-emerald-200/90 mt-1 max-w-xl leading-relaxed">
            Data-driven operational protocols designed specifically for colleges: low-flow cafeteria retrofits, 24°C HVAC setpoints, automated lab hibernation, and decentralized organic composting.
          </p>
        </div>

        <div className="bg-emerald-950/70 border border-emerald-600/40 rounded-xl p-4 min-w-[200px] text-right">
          <div className="text-xs text-emerald-300 font-semibold mb-1">
            Implementation Status
          </div>
          <div className="text-2xl font-black text-white">
            {implementedTips.length} / {ECO_RECOMMENDATIONS.length}{' '}
            <span className="text-sm font-normal text-emerald-300">Active</span>
          </div>
          <div className="w-full bg-emerald-900 h-2 rounded-full overflow-hidden mt-2">
            <div
              className="bg-emerald-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeCategory === 'all'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All Recommendations ({ECO_RECOMMENDATIONS.length})
        </button>

        <button
          onClick={() => setActiveCategory('electricity')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            activeCategory === 'electricity'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Electricity Conservation</span>
        </button>

        <button
          onClick={() => setActiveCategory('water')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            activeCategory === 'water'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Droplets className="w-3.5 h-3.5" />
          <span>Water Conservation</span>
        </button>

        <button
          onClick={() => setActiveCategory('waste')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
            activeCategory === 'waste'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Waste & Recycling</span>
        </button>
      </div>

      {/* Recommendations Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTips.map((tip) => {
          const isDone = implementedTips.includes(tip.id)
          return (
            <div
              key={tip.id}
              className={`bg-white border rounded-2xl p-5 shadow-card flex flex-col justify-between transition-all ${
                isDone
                  ? 'border-emerald-300/80 bg-emerald-50/20'
                  : 'border-slate-200/80 hover:shadow-soft'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      tip.category === 'electricity'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : tip.category === 'water'
                        ? 'bg-sky-50 text-sky-800 border border-sky-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {tip.category === 'electricity' && <Zap className="w-3 h-3" />}
                    {tip.category === 'water' && <Droplets className="w-3 h-3" />}
                    {tip.category === 'waste' && <Trash2 className="w-3 h-3" />}
                    <span>{tip.category}</span>
                  </span>

                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {tip.badge}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                  {tip.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {tip.description}
                </p>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-700 block text-[11px] mb-0.5">
                      Target Location:
                    </span>
                    <span className="text-slate-600 font-medium">
                      {tip.targetLocation}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-700 block text-[11px] mb-0.5">
                      Operational Action:
                    </span>
                    <span className="text-slate-600">
                      {tip.practicalAction}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Potential Saving & Implementation Toggle */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Est. Impact:</span>
                  <span className="text-xs font-bold text-emerald-700">
                    {tip.potentialSaving}
                  </span>
                </div>

                <button
                  onClick={() => toggleImplemented(tip.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isDone
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isDone ? 'text-white' : 'text-slate-400'}`} />
                  <span>{isDone ? 'Implemented' : 'Mark Done'}</span>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
