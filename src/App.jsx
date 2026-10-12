import React, { useState } from 'react'
import { useEcoTrackData } from './hooks/useEcoTrackData'
import { Sidebar } from './components/layout/Sidebar'
import { Topbar } from './components/layout/Topbar'
import { HackathonBanner } from './components/layout/HackathonBanner'
import { Toast } from './components/common/Toast'
import { QuickActionModal } from './components/dashboard/QuickActionModal'
import { CalculationExplainer } from './components/insights/CalculationExplainer'

// Tab views
import { DashboardOverview } from './components/dashboard/DashboardOverview'
import { TrackerView } from './components/tracker/TrackerView'
import { ConsumptionChartsView } from './components/charts/ConsumptionChartsView'
import { SustainabilityInsightsView } from './components/insights/SustainabilityInsightsView'
import { SavingsCalculatorView } from './components/calculator/SavingsCalculatorView'
import { EcoRecommendationsView } from './components/recommendations/EcoRecommendationsView'
import { CampusLeaderboardView } from './components/leaderboard/CampusLeaderboardView'

export function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isExplainerOpen, setIsExplainerOpen] = useState(false)

  const {
    records,
    baselines,
    toast,
    setToast,
    addRecord,
    deleteRecord,
    loadDemoData,
    clearAllData,
    updateBaseline,
    exportCSV,
  } = useEcoTrackData()

  return (
    <div className="min-h-screen bg-[#f8faf9] flex flex-col font-sans">
      {/* KAUSHAL 8.0 Hackathon Top Banner */}
      <HackathonBanner onOpenExplainer={() => setIsExplainerOpen(true)} />

      <div className="flex-1 flex">
        {/* Responsive Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onLoadDemo={loadDemoData}
          onClearData={clearAllData}
          onExportCSV={exportCSV}
          totalRecords={records.length}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
          {/* Top Navigation Bar */}
          <Topbar
            activeTab={activeTab}
            onOpenSidebar={() => setIsSidebarOpen(true)}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            onOpenExplainer={() => setIsExplainerOpen(true)}
            onLoadDemo={loadDemoData}
            onExportCSV={exportCSV}
            recordCount={records.length}
          />

          {/* Active Tab View */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full transition-all">
            {activeTab === 'dashboard' && (
              <DashboardOverview
                records={records}
                onNavigate={setActiveTab}
                onOpenAddModal={() => setIsAddModalOpen(true)}
                onLoadDemo={loadDemoData}
              />
            )}

            {activeTab === 'tracker' && (
              <TrackerView
                records={records}
                onAddRecord={addRecord}
                onDeleteRecord={deleteRecord}
                onExportCSV={exportCSV}
                onLoadDemo={loadDemoData}
              />
            )}

            {activeTab === 'charts' && (
              <ConsumptionChartsView
                records={records}
                baselines={baselines}
                onLoadDemo={loadDemoData}
                onAddRecord={() => setIsAddModalOpen(true)}
              />
            )}

            {activeTab === 'insights' && (
              <SustainabilityInsightsView
                records={records}
                onOpenExplainer={() => setIsExplainerOpen(true)}
                onNavigate={setActiveTab}
                onLoadDemo={loadDemoData}
                onAddRecord={() => setIsAddModalOpen(true)}
              />
            )}

            {activeTab === 'calculator' && (
              <SavingsCalculatorView
                records={records}
                baselines={baselines}
                onUpdateBaseline={updateBaseline}
                onOpenExplainer={() => setIsExplainerOpen(true)}
              />
            )}

            {activeTab === 'recommendations' && (
              <EcoRecommendationsView
                records={records}
                onNavigate={setActiveTab}
              />
            )}

            {activeTab === 'leaderboard' && (
              <CampusLeaderboardView
                onOpenExplainer={() => setIsExplainerOpen(true)}
              />
            )}
          </main>

          {/* Clean Footer */}
          <footer className="border-t border-slate-200/80 bg-white/60 py-4 px-6 text-xs text-slate-500 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto w-full">
            <div>
              <strong className="text-slate-800 font-semibold">EcoTrack</strong> — Smart Campus Sustainability Dashboard
              <span className="text-slate-400 mx-2">•</span>
              <span>KAUSHAL 8.0 (PS-04)</span>
            </div>
            <div className="text-[11px] text-slate-400">
              CSI Student Chapter, SVVV Indore • Technologies Beyond Boundaries
            </div>
          </footer>
        </div>
      </div>

      {/* Global Modals & Notifications */}
      <QuickActionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddRecord={addRecord}
      />

      <CalculationExplainer
        isOpen={isExplainerOpen}
        onClose={() => setIsExplainerOpen(false)}
      />

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export default App
