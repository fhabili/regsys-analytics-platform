import { ArrowRight } from 'lucide-react'
import type { RepoBox } from './archData'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function ArchFlowArrow() {
  return (
    <div className="hidden md:flex items-center justify-center shrink-0" style={{ width: 56 }}>
      <ArrowRight size={20} color="#9CA3AF" />
    </div>
  )
}

export function RepoCard({ box }: { box: RepoBox }) {
  return (
    <div className="flex-1 min-w-0 rounded-xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-bold text-gray-900 text-base leading-tight">{box.title}</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{box.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {box.tech.map(t => (
            <span key={t.label} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.color}`}>{t.label}</span>
          ))}
        </div>
        <a href={box.repo} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-700 group">
          <GithubIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="group-hover:underline">View Repository</span>
        </a>
      </div>
    </div>
  )
}
