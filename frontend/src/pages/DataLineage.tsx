import type { Metric } from '../components/lineage/lineageData'
import { DataFlowDiagram, TracePanel } from '../components/lineage/LineageComponents'

export default function DataLineage() {
  function handleTrace(_metric: Metric, _quarter: string) {
    // Trace callback no longer needed
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Data Lineage</h1>
        <p className="text-sm text-slate-500 mt-1">Provenance tracing for Basel III regulatory metrics</p>
      </div>

      <div className="flex gap-3 rounded-xl border border-slate-200 border-t-4 border-t-amber-500 bg-white px-5 py-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-amber-500"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-semibold">About this tab: </span>
          This tab answers the auditor question: where did this number come from? In regulated environments every metric on a board report must be traceable to its origin. Select any metric and quarter to trace the full provenance chain from source file through staging, warehouse transformation, API response, and final dashboard display.
        </p>
      </div>

      <TracePanel onTrace={handleTrace} />
      <DataFlowDiagram />
    </div>
  )
}
