'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Zap, Globe, BarChart3, ChevronRight, AlertTriangle, CheckCircle2, Loader2, Code2 } from 'lucide-react'

export default function Home() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const analyze = async () => {
    if (!code.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
      if (!res.ok) throw new Error('Failed to analyze code')
      const data = await res.json()
      if (data.error) {
        setError(data.error)
        setResult(null)
      } else {
        setResult(data)
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f0fdf4] dark:bg-[#022c22] text-[#064e3b] dark:text-[#ecfdf5] transition-colors duration-500">
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-200/30 dark:bg-green-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <header className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/30">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Green-Code Registry
              </h1>
              <p className="text-sm opacity-70 font-medium">Quantify your computational footprint</p>
            </div>
          </div>
          <div className="flex bg-white/50 dark:bg-emerald-900/30 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-800 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider opacity-60 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Production Ready
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Editor Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-[#064e3b] rounded-2xl overflow-hidden border border-emerald-100 dark:border-emerald-800 shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-emerald-50 dark:bg-[#022c22]/50 border-b border-emerald-100 dark:border-emerald-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium opacity-60">
                    <Code2 className="w-3 h-3" />
                    python_script.py
                  </div>
                </div>
                <textarea
                  className="w-full h-[400px] p-6 bg-transparent outline-none resize-none font-mono text-sm leading-relaxed"
                  placeholder="Paste your Python code here... (e.g., loops, functions, data processing)"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  spellCheck={false}
                />
              </div>
            </div>

            <button
              onClick={analyze}
              disabled={loading || !code.trim()}
              className="group relative flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 active:scale-[0.98]"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Analyze Green Impact
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400"
              >
                <AlertTriangle className="w-5 h-5" />
                <p className="text-sm font-medium">{error}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Results Section */}
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-emerald-200 dark:border-emerald-800 rounded-3xl opacity-40 text-center"
                >
                  <BarChart3 className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Analysis Results</h3>
                  <p className="max-w-[280px]">Enter your code and click analyze to see energy metrics and green suggestions.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-6"
                >
                  {/* Score Card */}
                  <div className="bg-white dark:bg-[#064e3b] p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6">
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Eco Score</span>
                        <span className={`text-4xl font-black ${result.score > 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
                          {result.score}/100
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-emerald-500" />
                      Energy Metrics
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <MetricCard
                        icon={<Zap className="w-5 h-5" />}
                        title="Energy Usage"
                        value={`${result.energy}`}
                        unit="Wh"
                        color="emerald"
                      />
                      <MetricCard
                        icon={<Globe className="w-5 h-5" />}
                        title="CO₂ Emissions"
                        value={`${result.co2}`}
                        unit="grams"
                        color="blue"
                      />
                    </div>
                  </div>

                  {/* Suggestions Section */}
                  <div className="bg-white dark:bg-[#064e3b] p-8 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-800">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      Optimization Suggestions
                    </h3>

                    <div className="flex flex-col gap-3">
                      {result.suggestions && result.suggestions.length > 0 ? (
                        result.suggestions.map((s: string, i: number) => (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl flex items-start gap-3"
                          >
                            <div className="mt-1 w-5 h-5 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center shrink-0">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                            </div>
                            <p className="text-sm font-medium leading-relaxed">{s}</p>
                          </motion.div>
                        ))
                      ) : (
                        <p className="opacity-60 text-sm italic">No specific optimization suggestions found. Your code looks green!</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-16 pt-8 border-t border-emerald-100 dark:border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <p className="text-xs font-medium uppercase tracking-widest">© 2026 Green-Code Registry • Built for Sustainability</p>
          <div className="flex gap-6 items-center">
            <span className="text-xs font-bold cursor-pointer hover:text-emerald-500 transition">ESG Reporting</span>
            <span className="text-xs font-bold cursor-pointer hover:text-emerald-500 transition">API Documentation</span>
            <span className="text-xs font-bold cursor-pointer hover:text-emerald-500 transition">Global Impact</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

function MetricCard({ icon, title, value, unit, color }: any) {
  return (
    <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800 flex flex-col gap-2">
      <div className={`text-${color}-500 opacity-80`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">{title}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black">{value}</span>
          <span className="text-xs font-bold opacity-60">{unit}</span>
        </div>
      </div>
    </div>
  )
}
