import React from 'react'
import {
  Menu,
  PlusCircle,
  FileSpreadsheet,
  Database,
  HelpCircle,
  RefreshCw,
} from 'lucide-react'

export function Topbar({
  activeTab,
  onOpenSidebar,
  onOpenAddModal,
  onOpenExplainer,
  onLoadDemo,
  onExportCSV,
  recordCount,
}) {
  const getTabTitle = (tab) => {
    switch (tab) {
      case 'dashboard':
        return {
          title: 'Campus Sustainability Overview',
          subtitle: 'Live consumption metrics, efficiency index & anomaly monitoring',
        }
      case 'tracker':
        return {
          title: 'Resource Log & Tracker',
          subtitle: 'Record daily electricity (kWh), water (Litres), and solid waste (kg)',
        }
      case 'charts':
        return {
          title: 'Interactive Analytics & Trends',
          subtitle: 'Daily curves, building breakdowns, and baseline comparative views',
        }
      case 'insights':
        return {
          title: 'Period-over-Period Insights',
          subtitle: 'Actual data percentage comparisons and automated anomaly flags',
        }
      case 'calculator':
        return {
          title: 'Target Savings & Surge Calculator',
          subtitle: 'Mathematical baseline comparison with transparent variance formulas',
        }
      case 'recommendations':
        return {
          title: 'Campus Conservation Recommendations',
          subtitle: 'Practical electrical, hydraulic, and waste minimization initiatives',
        }
      case 'leaderboard':
        return {
          title: 'Campus Zones & Departments Leaderboard',
          subtitle: 'Benchmarking classroom blocks and hostels by resource conservation',
        }
      default:
        return { title: 'EcoTrack Dashboard', subtitle: 'Campus sustainability tracker' }
    }
  }

  const { title, subtitle } = getTabTitle(activeTab)

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between transition-all">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="p-2 -ml-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
            {title}
          </h1>
          <p className="text-xs text-slate-500 hidden sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onOpenExplainer}
          className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-200 transition-all flex items-center gap-1.5"
          title="Metric Explanations & Disclaimers"
        >
          <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="hidden md:inline">Calculations & Limits</span>
        </button>

        {recordCount > 0 ? (
          <button
            onClick={onExportCSV}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-sm transition-all"
            title="Download CSV log"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>CSV Export</span>
          </button>
        ) : (
          <button
            onClick={onLoadDemo}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-all"
          >
            <Database className="w-4 h-4" />
            <span>Load Demo</span>
          </button>
        )}

        <button
          onClick={onOpenAddModal}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span className="hidden xs:inline">Add Record</span>
          <span className="xs:hidden">Add</span>
        </button>
      </div>
    </header>
  )
}
