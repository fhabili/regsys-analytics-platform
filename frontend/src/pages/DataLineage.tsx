import { useState } from 'react'
import type { Metric } from '../components/lineage/lineageData'
import { DataFlowDiagram, TracePanel } from '../components/lineage/LineageComponents'

export default function DataLineage() {
  const [traceActive, setTraceActive] = useState(false)

  function handleTrace(_metric: Metric, _quarter: string) {
    setTraceActive(true)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Data Lineage</h1>
        <p className="text-sm text-slate-500 mt-1">Interactive provenance tracing for Basel III regulatory metrics.</p>
      </div>

      <TracePanel onTrace={handleTrace} />
      <DataFlowDiagram />

      {traceActive && (
        <div className="space-y-4">
          <p className="text-xs text-amber-500 font-semibold uppercase tracking-widest">Audit Timeline</p>
          <p className="text-sm text-slate-500 italic">5-layer provenance trail now displayed below.</p>
        </div>
      )}
      {!traceActive && (
        <div className="rounded-xl border border-slate-200 border-t-4 border-t-amber-500 bg-white p-4">
          <p className="text-xs text-amber-500 font-semibold uppercase tracking-widest mb-2">Next Step</p>
          <p className="text-sm text-slate-600">Select a metric above to visualize the full audit trail.</p>
        </div>
      )}
    </div>
  )
}
