export interface Tab {
  id: string
  label: string
  accent: string
}

interface NavBarProps {
  tabs: Tab[]
  activeTab: string
  menuOpen: boolean
  onNavigate: (id: string) => void
  onToggleMenu: () => void
  onGoHome?: () => void
}

export function NavBar({ tabs, activeTab, menuOpen, onNavigate, onToggleMenu, onGoHome }: NavBarProps) {
  const activeAccent = tabs.find(t => t.id === activeTab)?.accent ?? '#6366f1'

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-stretch justify-between px-6">
          {/* Title */}
          <button
            onClick={onGoHome}
            className="text-left group flex flex-col justify-center py-4 pr-10 transition-colors duration-200"
          >
            <h1 className="text-lg font-bold tracking-tight transition-colors duration-200 group-hover:text-blue-600" style={{ color: '#1B2A4A' }}>
              Liquidity Risk Reporting System
            </h1>
            <p className="text-xs font-medium mt-0.5 tracking-wide uppercase" style={{ color: activeAccent }}>
              Basel III Regulatory Intelligence Platform
            </p>
          </button>

          {/* Desktop tabs */}
          <nav className="hidden md:flex items-stretch">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => onNavigate(tab.id)}
                  className="relative px-6 flex items-center text-sm font-medium transition-colors duration-200"
                  style={{ color: isActive ? tab.accent : '#6B7280' }}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 rounded-t"
                      style={{ backgroundColor: tab.accent }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors self-center"
            onClick={onToggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className="w-full text-left px-6 py-3.5 text-sm font-medium border-b border-gray-100 last:border-0 transition-colors"
                style={{
                  color: isActive ? tab.accent : '#4B5563',
                  backgroundColor: isActive ? `${tab.accent}0D` : 'transparent',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}
