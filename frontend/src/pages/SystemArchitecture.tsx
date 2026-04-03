import { REPOS } from '../components/architecture/archData'
import { RepoCard, ArchFlowArrow } from '../components/architecture/ArchComponents'

const TECH_STACK = [
  {
    category: 'Frontend',
    accent: '#2563EB',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
    items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Lucide React', 'Vite'],
  },
  {
    category: 'Backend',
    accent: '#059669',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    items: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'Alembic', 'uv'],
  },
  {
    category: 'Data',
    accent: '#334155',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    badge: 'bg-slate-100 text-slate-700',
    items: ['PostgreSQL 16', 'SQLAlchemy', 'Medallion Architecture', 'BCBS 239 Compliant Lineage'],
  },
  {
    category: 'AI / LLM',
    accent: '#D97706',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    badge: 'bg-amber-100 text-amber-700',
    items: ['Gemini API', 'Context Injection', 'Streaming JSON'],
  },
]

export default function SystemArchitecture() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: '#1B2A4A' }}>System Architecture</h1>
        <p className="text-sm text-gray-500 mt-1">
          End-to-end Record-to-Report lifecycle — three interconnected systems covering transaction origination, financial close controls, and regulatory reporting.
        </p>
      </div>

      {/* Architecture Overview — Horizontal Flow */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Architecture Overview</h2>
        <div className="flex flex-row gap-4 items-stretch">
          {/* Column 1: Transaction Layer */}
          <div className="flex-1 rounded-xl border border-gray-200 border-t-4 border-t-slate-500 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Transaction Layer</h3>
            <p className="text-xs text-gray-500 font-medium">ERP Ledger Posting Simulation</p>
            <p className="text-xs text-gray-600 leading-relaxed mt-3">Simulates the accounting origin of data. System of record for journal entries and cash flow events.</p>
          </div>

          {/* Column 2: Control Layer */}
          <div className="flex-1 rounded-xl border border-gray-200 border-t-4 border-t-indigo-600 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Control Layer</h3>
            <p className="text-xs text-gray-500 font-medium">Financial Close Validation Engine</p>
            <p className="text-xs text-gray-600 leading-relaxed mt-3">Automates financial close controls. Failures block data promotion, ensuring only validated figures reach the warehouse.</p>
          </div>

          {/* Column 3: Reporting Layer */}
          <div className="flex-1 rounded-xl border border-gray-200 border-t-4 border-t-blue-600 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-1">Reporting Layer</h3>
            <p className="text-xs text-gray-500 font-medium">Basel III Regulatory Dashboard</p>
            <p className="text-xs text-gray-600 leading-relaxed mt-3">Computes LCR/NSFR ratios in real-time with a full provenance audit trail for Risk Managers and Regulators.</p>
          </div>
        </div>
      </div>

      {/* Technical Stack Overview */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Technical Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TECH_STACK.map(cat => (
            <div key={cat.category} className={`rounded-xl border ${cat.border} ${cat.bg} p-4`}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: cat.accent }}>
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map(item => (
                  <span key={item} className={`text-xs font-medium px-2 py-0.5 rounded-full ${cat.badge}`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Repository Overview */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5">Repository Overview</h2>
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {REPOS.map((box, i) => (
            <>
              <RepoCard key={box.repoLabel} box={box} />
              {i < REPOS.length - 1 && <ArchFlowArrow key={`arrow-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

