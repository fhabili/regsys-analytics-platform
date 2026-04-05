import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'
import { NavBar } from './components/layout/NavBar'
import { Sidebar } from './components/chat/ChatPanel'
import Home from './pages/Home'
import ExecutiveSummary from './pages/ExecutiveSummary'
import Liquidity from './pages/Liquidity'
import Governance from './pages/Governance'
import SystemArchitecture from './pages/SystemArchitecture'

const tabs = [
  { id: 'overview',     label: 'Executive Terminal', accent: '#10B981' },
  { id: 'liquidity',    label: 'Liquidity',     accent: '#2563EB' },
  { id: 'governance',   label: 'Governance',    accent: '#F59E0B' },
  { id: 'architecture', label: 'About',         accent: '#374151' },
]

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [menuOpen, setMenuOpen]   = useState(false)
  const [showHome, setShowHome]   = useState(true)
  const [chatOpen, setChatOpen]   = useState(true)
  const [mobileChatOpen, setMobileChatOpen] = useState(false)

  function navigate(id: string) {
    setActiveTab(id)
    setMenuOpen(false)
  }

  if (showHome) {
    return <Home onEnter={() => setShowHome(false)} />
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <NavBar tabs={tabs} activeTab={activeTab} menuOpen={menuOpen} onNavigate={navigate} onToggleMenu={() => setMenuOpen(o => !o)} onGoHome={() => setShowHome(true)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={chatOpen} onToggle={() => setChatOpen(o => !o)} />

        {/* Main content */}
        <main className="flex-1 min-w-0 min-h-0 overflow-y-auto py-6 md:py-8 px-6 md:px-10">
          {activeTab === 'overview'     && <ExecutiveSummary />}
          {activeTab === 'liquidity'    && <Liquidity />}
          {activeTab === 'governance'   && <Governance />}
          {activeTab === 'architecture' && <SystemArchitecture />}
        </main>
      </div>

      {/* Mobile Chat Floating Button — md:hidden (show on mobile only) */}
      <button
        onClick={() => setMobileChatOpen(true)}
        className="flex md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors items-center justify-center"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Mobile Chat Modal — md:hidden (full screen overlay on mobile) */}
      {mobileChatOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col md:hidden">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-lg font-bold text-gray-900">Liquidity Risk Co-Pilot</h2>
            <button
              onClick={() => setMobileChatOpen(false)}
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>
          {/* Chat Panel Content */}
          <div className="flex-1 min-h-0 overflow-hidden h-full">
            <Sidebar open={true} onToggle={() => setMobileChatOpen(false)} mobileModal={true} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
