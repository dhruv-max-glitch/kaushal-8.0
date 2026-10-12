# 🌿 EcoTrack — Smart Campus Sustainability Dashboard
### KAUSHAL 8.0 Hackathon • Problem Statement PS-04: Sustainable Tech Without Limits
**Theme:** Technologies Beyond Boundaries  
**Organized by:** CSI Student Chapter, SVVV Indore  
**Evaluation Mode:** Live Working Prototype / Demo (No PPT or slide decks required)

---

## 🌟 Executive Summary
**EcoTrack** is a functional, responsive, data-driven web application designed to help colleges and universities understand, monitor, and curb **electricity consumption (kWh)**, **water wastage (Litres)**, and **solid waste generation (kg)**.

Colleges consume vast quantities of energy and resources across computer labs, student hostels, dining messes, and administrative buildings. Resource wastage often goes unnoticed simply because no one tracks it in an actionable, transparent way. EcoTrack solves this with autonomous analytics, period-over-period percentage tracking, anomaly spike detection, target savings calculations, and gamified campus department benchmarking.

---

## 🚀 Live Working Demonstration
- **Local Dev URL:** `http://localhost:5173/`
- **Network / LAN URL:** `http://<your-lan-ip>:5173/`
- **Persistence Engine:** Browser `localStorage` (all added records and baselines survive page refreshes)
- **Zero Paid Dependencies:** No paid APIs, cloud keys, or proprietary backend subscriptions required.

---

## 🛠️ Technology Stack
- **Frontend Framework:** React 18 + Vite (ultra-fast compilation and HMR)
- **Styling & Design System:** Tailwind CSS (customized forest-green eco palette `#064e3b`, `#059669`, clean whites, and slate typography)
- **Interactive Visualizations:** Recharts (Area charts, Bar breakdowns, and Carbon contribution distribution)
- **Iconography:** Lucide React
- **Data Export:** RFC 4180 client-side CSV generator
- **Storage:** Browser `localStorage` with reactive synchronization

---

## 📋 Features Implemented

### 1. Dashboard Overview
- **Total Electricity Consumption:** In kWh with 7-day period comparison delta.
- **Total Water Consumption:** In Litres with flow trend indicator.
- **Total Solid Waste Generated:** In kg with reduction trajectory.
- **Estimated Carbon Footprint:** In kg CO₂e based on Indian Central Electricity Authority (CEA) proxies.
- **Campus Eco-Performance Index:** Dynamic 0–100 score with badge classification (Exemplary, Commendable, Moderate, High Footprint).
- **Recent Daily Consumption Trend:** Interactive Recharts area chart with gradient fills.

### 2. Resource Tracker & Data Logging
- Validated form to record daily Electricity, Water, and Solid Waste logs.
- Fields: Date, Resource Type, Quantity, Classroom/Block (Aryabhata Block, Ramanujan Science Wing, Library, Hostels, etc.), and Observation Notes.
- Form validation with inline feedback and toast notifications.
- Filterable, sortable, and paginated records table with search by classroom or notes.
- Individual record deletion with immediate state and localStorage synchronization.

### 3. Interactive Charts Suite
- **Daily Consumption Curves:** Multi-resource area chart with toggleable metrics and historical windows (7 days, 14 days, all history).
- **Building & Classroom Breakdown:** Horizontal bar chart comparing resource loads across campus blocks.
- **Target Baseline vs. Actual:** Grouped bar chart comparing recorded daily usage against target conservation caps.
- **Emissions Contribution Breakdown:** Donut chart displaying the proportional carbon proxy contribution of electricity, landfill waste, and water pumping.

### 4. Sustainability Insights & Anomaly Detection
- **Period-over-Period Variance:** Compares the recent 7-day window against the prior 7 days using actual stored timestamps.
- **Spike Anomaly Flagging:** Automatically flags records where usage exceeds &ge; 35% above the resource mean (e.g. unmonitored overnight lab ACs or plumbing valve overflows).
- **Actionable Mitigation Links:** Direct routing to relevant practical conservation tips.

### 5. Target Savings & Surge Calculator
- Implementation of the exact mathematical formula:
  $$\text{Savings } (\%) = \left(\frac{\text{Baseline Usage} - \text{Current Usage}}{\text{Baseline Usage}}\right) \times 100$$
- **Safe Zero Handling:** Detects zero or invalid baselines and guides the user.
- **Surge Detection:** Consumption exceeding baseline is accurately rendered as a **Surge (+%)**, never disguised as savings.
- **Interactive Simulator:** Test custom hypothetical scenarios and adjust live campus targets.
- **Hardware Boundary Transparency:** Explicit disclaimer clarifying that estimated figures are mathematical models and not field utility audits.

### 6. Actionable Eco Recommendations
- 9 categorized campus conservation protocols (Electricity, Water, Waste, Recycling).
- Covers AC 24°C setpoints, 15-minute PC sleep group policies, low-flow cafeteria faucet aerators, overhead tank auto-cutoff switches, and source segregation composting pits.
- Interactive implementation checklist that saves completed initiatives to `localStorage`.

### 7. Campus Department Leaderboard
- Gamified department ranking comparing classrooms, labs, and hostels (Platinum, Gold, Silver, Bronze green tiers).
- Clearly disclosed as simulated benchmark data for hackathon presentation purposes.

### 8. Presentation & Data Controls
- **One-Click Demo Data:** Button in sidebar/topbar loads 30 realistic multi-day campus logs across 14 dates.
- **Reset Option:** Easily wipe data to demonstrate fresh onboarding or empty states.
- **CSV Export:** Download all recorded observations as an RFC-compliant `.csv` spreadsheet.

---

## 🔒 Boundaries & Mathematical Transparency (PS-04 Compliance)
1. **No Physical Hardware Build:**  
   EcoTrack is a pure software platform. In compliance with PS-04 rules, no physical microcontrollers or IoT smart meters are required. All metrics reflect user-entered observations and calibrated demo benchmarks.
2. **Transparent Proxies:**  
   - Electricity: $0.82 \text{ kg CO}_2\text{e / kWh}$ (CEA grid baseline proxy).
   - Water: $0.0003 \text{ kg CO}_2\text{e / Litre}$ (Municipal pumping proxy).
   - Waste: $0.45 \text{ kg CO}_2\text{e / kg}$ (Unmanaged municipal landfill proxy).

---

## 🏃 Quick Start Instructions
If running on a new machine:
```bash
# 1. Navigate to project directory
cd ecotrack-campus

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser:
# http://localhost:5173/
```
