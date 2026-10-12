import React, { useState } from 'react'
import {
  Trophy,
  Medal,
  Award,
  Sparkles,
  Info,
  Building,
  Zap,
  Droplets,
  Trash2,
  TrendingUp,
  Filter,
} from 'lucide-react'

// Simulated campus department leaderboard benchmark
const SIMULATED_LEADERBOARD = [
  {
    rank: 1,
    name: 'Aryabhata Computer Engineering Block',
    type: 'Academic & Labs',
    score: 94,
    tier: 'Platinum Green',
    tierBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    reduction: '-22.4%',
    dailyPerCapita: '1.2 kWh / occupant',
    waterEfficiency: 'A+ (Aerators Active)',
    wasteDiverted: '68% Diverted',
    status: 'Exemplary',
  },
  {
    rank: 2,
    name: 'Central Campus Library & Media Hub',
    type: 'Shared Facility',
    score: 89,
    tier: 'Gold Green',
    tierBadge: 'bg-teal-100 text-teal-800 border-teal-300',
    reduction: '-18.1%',
    dailyPerCapita: '1.6 kWh / occupant',
    waterEfficiency: 'A (Dual Flush Tanks)',
    wasteDiverted: '74% Diverted',
    status: 'Commendable',
  },
  {
    rank: 3,
    name: 'Hostel Block A — Girls Residency',
    type: 'Residential Hostel',
    score: 85,
    tier: 'Gold Green',
    tierBadge: 'bg-teal-100 text-teal-800 border-teal-300',
    reduction: '-14.6%',
    dailyPerCapita: '42 L / student',
    waterEfficiency: 'A (Solar Thermal)',
    wasteDiverted: '58% Diverted',
    status: 'Commendable',
  },
  {
    rank: 4,
    name: 'Ramanujan Science & Chemistry Wing',
    type: 'Research Labs',
    score: 79,
    tier: 'Silver Green',
    tierBadge: 'bg-blue-100 text-blue-800 border-blue-300',
    reduction: '-9.2%',
    dailyPerCapita: '3.4 kWh / occupant',
    waterEfficiency: 'B+ (High Rinse Volume)',
    wasteDiverted: '45% Diverted',
    status: 'Moderate',
  },
  {
    rank: 5,
    name: 'Hostel Block C — Boys Residency',
    type: 'Residential Hostel',
    score: 74,
    tier: 'Silver Green',
    tierBadge: 'bg-blue-100 text-blue-800 border-blue-300',
    reduction: '-6.5%',
    dailyPerCapita: '58 L / student',
    waterEfficiency: 'B (Overflow Monitored)',
    wasteDiverted: '41% Diverted',
    status: 'Moderate',
  },
  {
    rank: 6,
    name: 'Main Administrative & Examination Block',
    type: 'Administrative',
    score: 71,
    tier: 'Bronze Green',
    tierBadge: 'bg-amber-100 text-amber-800 border-amber-300',
    reduction: '-3.8%',
    dailyPerCapita: '2.8 kWh / occupant',
    waterEfficiency: 'B (Restroom Overhauls)',
    wasteDiverted: '36% Diverted',
    status: 'Attention Needed',
  },
  {
    rank: 7,
    name: 'Student Cafeteria & Central Dining Mess',
    type: 'Food Service',
    score: 66,
    tier: 'Bronze Green',
    tierBadge: 'bg-amber-100 text-amber-800 border-amber-300',
    reduction: '+4.2% Surge',
    dailyPerCapita: '125 g waste / meal',
    waterEfficiency: 'C+ (Dishwasher Overuse)',
    wasteDiverted: '32% Diverted',
    status: 'High Waste Zone',
  },
]

export function CampusLeaderboardView({ onOpenExplainer }) {
  const [filterType, setFilterType] = useState('all')

  const filtered = SIMULATED_LEADERBOARD.filter((item) => {
    if (filterType === 'all') return true
    if (filterType === 'labs') return item.type.includes('Labs') || item.type.includes('Academic')
    if (filterType === 'hostels') return item.type.includes('Hostel')
    if (filterType === 'services') return item.type.includes('Shared') || item.type.includes('Food') || item.type.includes('Admin')
    return true
  })

  return (
    <div className="space-y-6">
      {/* Simulation Notice Banner - Required by guidelines */}
      <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-emerald-950">
        <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold text-emerald-950">
            [Simulated Benchmark Data]:
          </strong>{' '}
          All department ratings, occupancy benchmarks, and leaderboard scores displayed below represent a simulated campus competition model.
          In a production deployment, this gamified index promotes peer-to-peer conservation accountability between student hostels and faculty wings.
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Rank 2 */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-card flex flex-col justify-between order-2 md:order-1 relative">
          <div className="flex items-center justify-between mb-3">
            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center border border-slate-300">
              #2
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
              Gold Tier
            </span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {SIMULATED_LEADERBOARD[1].name}
            </h4>
            <p className="text-xs text-slate-500 mb-3">{SIMULATED_LEADERBOARD[1].type}</p>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {SIMULATED_LEADERBOARD[1].score}
              <span className="text-sm font-semibold text-slate-400">/100</span>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              {SIMULATED_LEADERBOARD[1].reduction} verified conservation
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Water: {SIMULATED_LEADERBOARD[1].waterEfficiency}</span>
            <span>{SIMULATED_LEADERBOARD[1].wasteDiverted}</span>
          </div>
        </div>

        {/* Rank 1 - Crown */}
        <div className="bg-gradient-to-b from-emerald-900 to-forest-950 text-white rounded-2xl p-6 shadow-elevated flex flex-col justify-between order-1 md:order-2 border-2 border-emerald-400/40 relative transform md:-translate-y-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shadow-md">
                <Trophy className="w-5 h-5 text-amber-950" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-200">
                1st Place Champion
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/30 text-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
              Platinum Green
            </span>
          </div>
          <div>
            <h4 className="font-extrabold text-white text-lg mb-1">
              {SIMULATED_LEADERBOARD[0].name}
            </h4>
            <p className="text-xs text-emerald-200/80 mb-3">{SIMULATED_LEADERBOARD[0].type}</p>
            <div className="text-4xl font-black text-emerald-300 mb-1">
              {SIMULATED_LEADERBOARD[0].score}
              <span className="text-base font-semibold text-emerald-100/70">/100</span>
            </div>
            <p className="text-xs font-bold text-emerald-300">
              {SIMULATED_LEADERBOARD[0].reduction} outstanding reduction
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-emerald-800 text-[11px] text-emerald-200/90 flex justify-between">
            <span>Water: {SIMULATED_LEADERBOARD[0].waterEfficiency}</span>
            <span>{SIMULATED_LEADERBOARD[0].wasteDiverted}</span>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-card flex flex-col justify-between order-3 md:order-3 relative">
          <div className="flex items-center justify-between mb-3">
            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center border border-slate-300">
              #3
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
              Gold Tier
            </span>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">
              {SIMULATED_LEADERBOARD[2].name}
            </h4>
            <p className="text-xs text-slate-500 mb-3">{SIMULATED_LEADERBOARD[2].type}</p>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {SIMULATED_LEADERBOARD[2].score}
              <span className="text-sm font-semibold text-slate-400">/100</span>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              {SIMULATED_LEADERBOARD[2].reduction} verified conservation
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Water: {SIMULATED_LEADERBOARD[2].waterEfficiency}</span>
            <span>{SIMULATED_LEADERBOARD[2].wasteDiverted}</span>
          </div>
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl shadow-card overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Complete Departmental Standings
            </h4>
            <p className="text-xs text-slate-500">
              Evaluated across energy intensity, greywater reuse, and solid waste segregation
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none"
            >
              <option value="all">All Campus Zones</option>
              <option value="labs">Academic & Labs Only</option>
              <option value="hostels">Hostels Only</option>
              <option value="services">Services & Dining</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Department / Campus Block</th>
                <th className="py-3 px-4">Eco-Score</th>
                <th className="py-3 px-4">Award Tier</th>
                <th className="py-3 px-4">Variance Trajectory</th>
                <th className="py-3 px-4">Daily Intensity</th>
                <th className="py-3 px-4">Waste Diversion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => (
                <tr key={item.rank} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    <span
                      className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${
                        item.rank === 1
                          ? 'bg-amber-100 text-amber-900 font-extrabold'
                          : item.rank === 2
                          ? 'bg-slate-200 text-slate-800'
                          : item.rank === 3
                          ? 'bg-amber-50 text-amber-800'
                          : 'text-slate-500'
                      }`}
                    >
                      #{item.rank}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-400">{item.type}</div>
                  </td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900 whitespace-nowrap">
                    {item.score} <span className="text-xs font-normal text-slate-400">/100</span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.tierBadge}`}>
                      {item.tier}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span
                      className={`font-semibold ${
                        item.reduction.includes('-')
                          ? 'text-emerald-700'
                          : 'text-rose-700'
                      }`}
                    >
                      {item.reduction}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium whitespace-nowrap">
                    {item.dailyPerCapita}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium whitespace-nowrap">
                    {item.wasteDiverted}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>* Department standings are calibrated using simulated demo benchmarks.</span>
          <span className="font-semibold text-emerald-700">KAUSHAL 8.0 • PS-04</span>
        </div>
      </div>
    </div>
  )
}
