import React, { useState } from 'react'
import {
  calculatePeriodComparison,
  detectAnomalies,
  calculateTotals,
} from '../../utils/analytics'
import { formatNumber, formatDate } from '../../utils/formatters'
import { EmptyState } from '../common/EmptyState'
import {
  Sparkles,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  Zap,
  Droplets,
  Trash2,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react'

export function SustainabilityInsightsView({
  records,
  onOpenExplainer,
  onNavigate,
  onLoadDemo,
  onAddRecord,
}) {
  const [windowDays, setWindowDays] = useState(7)

  if (!records || records.length === 0) {
    return <EmptyState onLoadDemo={onLoadDemo} onAddRecord={onAddRecord} />
  }

  const comparison = calculatePeriodComparison(records, windowDays)
  const anomalies = detectAnomalies(records)
  const totals = calculateTotals(records)

  return (
    <div className="space-y-6">
      {/* Top Insights Header & Controls */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 mb-1">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Autonomous Sustainability Intelligence
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Period-over-Period Performance Shift
          </h3>
          <p className="text-xs text-slate-500">
            Comparing the most recent {windowDays} recorded days vs the preceding {windowDays} days
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Window:</span>
            <select
              value={windowDays}
              onChange={(e) => setWindowDays(Number(e.target.value))}
              className="bg-transparent font-bold text-emerald-700 focus:outline-none"
            >
              <option value={7}>7 Days Window</option>
              <option value={14}>14 Days Window</option>
              <option value={30}>30 Days Window</option>
            </select>
          </div>

          <button
            onClick={onOpenExplainer}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>How It's Calculated</span>
          </button>
        </div>
      </div>

      {/* 3 Metric Period Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Electricity Comparison */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              Electricity (kWh)
            </span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Recent {windowDays}d:</span>
              <span className="text-2xl font-extrabold text-slate-900">
                {formatNumber(comparison.electricity.current)}
              </span>
              <span className="text-xs font-semibold text-slate-500 ml-1">kWh</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Prior {windowDays}d:</span>
              <span className="text-lg font-bold text-slate-500">
                {formatNumber(comparison.electricity.previous)}
              </span>
              <span className="text-xs text-slate-400 ml-1">kWh</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span>Change Variance:</span>
              {comparison.electricity.changeType === 'saving' ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  -{comparison.electricity.changePercent}% Reduction
                </span>
              ) : comparison.electricity.changeType === 'surge' ? (
                <span className="text-rose-700 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +{comparison.electricity.changePercent}% Surge
                </span>
              ) : (
                <span className="text-slate-600">0% Shift</span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              {comparison.electricity.isReduction
                ? 'Campus electricity conservation goals met for this window.'
                : 'Noticeable load increase detected across labs and administrative halls.'}
            </p>
          </div>
        </div>

        {/* Water Comparison */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              Water (Litres)
            </span>
            <div className="p-2 rounded-xl bg-sky-50 text-sky-700">
              <Droplets className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Recent {windowDays}d:</span>
              <span className="text-2xl font-extrabold text-slate-900">
                {formatNumber(comparison.water.current)}
              </span>
              <span className="text-xs font-semibold text-slate-500 ml-1">L</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Prior {windowDays}d:</span>
              <span className="text-lg font-bold text-slate-500">
                {formatNumber(comparison.water.previous)}
              </span>
              <span className="text-xs text-slate-400 ml-1">L</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span>Change Variance:</span>
              {comparison.water.changeType === 'saving' ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  -{comparison.water.changePercent}% Reduction
                </span>
              ) : comparison.water.changeType === 'surge' ? (
                <span className="text-rose-700 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +{comparison.water.changePercent}% Surge
                </span>
              ) : (
                <span className="text-slate-600">0% Shift</span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              {comparison.water.isReduction
                ? 'Hostel and cafeteria conservation initiatives yielding positive drop.'
                : 'Elevated water flow detected; check plumbing floats & wash areas.'}
            </p>
          </div>
        </div>

        {/* Solid Waste Comparison */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              Solid Waste (kg)
            </span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Trash2 className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Recent {windowDays}d:</span>
              <span className="text-2xl font-extrabold text-slate-900">
                {formatNumber(comparison.waste.current)}
              </span>
              <span className="text-xs font-semibold text-slate-500 ml-1">kg</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Prior {windowDays}d:</span>
              <span className="text-lg font-bold text-slate-500">
                {formatNumber(comparison.waste.previous)}
              </span>
              <span className="text-xs text-slate-400 ml-1">kg</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span>Change Variance:</span>
              {comparison.waste.changeType === 'saving' ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  -{comparison.waste.changePercent}% Reduction
                </span>
              ) : comparison.waste.changeType === 'surge' ? (
                <span className="text-rose-700 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +{comparison.waste.changePercent}% Surge
                </span>
              ) : (
                <span className="text-slate-600">0% Shift</span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              {comparison.waste.isReduction
                ? 'Source segregation and canteen food portion control is lowering waste.'
                : 'Packaging scraps or event cleanup elevated hostel solid waste.'}
            </p>
          </div>
        </div>
      </div>

      {/* Anomaly Detection Section */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Automated Consumption Anomaly Detection
              </h4>
              <p className="text-xs text-slate-500">
                Flags records where resource consumption exceeds &ge; 35% above the campus historical average
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full self-start sm:self-auto">
            {anomalies.length} Flagged {anomalies.length === 1 ? 'Outlier' : 'Outliers'}
          </span>
        </div>

        {anomalies.length > 0 ? (
          <div className="space-y-3">
            {anomalies.map((anom, idx) => (
              <div
                key={anom.record.id || idx}
                className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900 text-sm">
                        {anom.record.location}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        • {formatDate(anom.record.date)}
                      </span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                        +{anom.percentageAbove}% Spike
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Recorded: <strong className="text-slate-900">{formatNumber(anom.record.quantity)} {anom.record.resourceType === 'electricity' ? 'kWh' : anom.record.resourceType === 'water' ? 'L' : 'kg'}</strong> (Resource Average: {anom.average} units).
                    </p>
                    {anom.record.notes && (
                      <p className="text-xs text-slate-500 italic mt-1">
                        Notes: "{anom.record.notes}"
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('recommendations')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-50 text-amber-800 border border-amber-300/80 rounded-xl shadow-sm transition-all whitespace-nowrap self-end sm:self-auto"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Mitigation Tip</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h5 className="font-bold text-slate-800 text-sm">No Abnormal Spikes Detected</h5>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              All logged campus observations remain within nominal operational boundaries (under 1.35× baseline mean).
            </p>
          </div>
        )}
      </div>

      {/* Practical Reduction Actions */}
      <div className="bg-emerald-950 text-white rounded-2xl p-6 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
            Ready for Implementation
          </span>
          <h4 className="text-lg font-bold text-white mt-1">
            Transform Insights into Measurable Campus Savings
          </h4>
          <p className="text-xs text-emerald-200/90 max-w-xl mt-1 leading-relaxed">
            Review actionable recommendations for heating, ventilation, lab sleep policies, low-flow cafeteria fixtures, and organic composters.
          </p>
        </div>
        <button
          onClick={() => onNavigate('recommendations')}
          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 shrink-0"
        >
          <span>Explore All 9 Campus Initiatives</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
