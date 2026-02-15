'use client'

import React, { useState, useEffect } from "react";

export default function VeloraFinalUltimate() {
  const [active, setActive] = useState(false);
  const [stats, setStats] = useState({ carbon: 0, energy: 0, speed: 0, trees: 0, money: 0 });
  const [logs, setLogs] = useState(["> [SYSTEM] Initializing Velora Core..."]);

  useEffect(() => {
    if (active) {
      const target = { carbon: 66.8, energy: 82.1, speed: 76.4, trees: 114, money: 1420 };
      const steps = [
        "> [SCAN] Identifying O(N²) Inefficiencies...",
        "> [BLUE-AST] Re-mapping Syntax Tree...",
        "> [MONITOR] Joule Consumption Dropping...",
        "> [STABLE] Optimization Finalized."
      ];

      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const p = frame / 50;
        setStats({
          carbon: parseFloat((target.carbon * p).toFixed(1)),
          energy: parseFloat((target.energy * p).toFixed(1)),
          speed: parseFloat((target.speed * p).toFixed(1)),
          trees: Math.round(target.trees * p),
          money: Math.round(target.money * p)
        });
        if (frame % 12 === 0) setLogs(prev => [...prev, steps[Math.floor(frame / 13)] || "> [ACTIVE] Tuning Performance..."]);
        if (frame >= 50) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    }
  }, [active]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-6 font-sans relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 border-b border-white/5 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 rotate-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-black text-white tracking-tighter italic">
                VELORA<span className="text-blue-500">.AI</span>
              </h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] text-blue-400 font-bold tracking-[0.3em] uppercase">Sustainable Intelligence</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setActive(true)}
            disabled={active}
            className={`px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg ${
              active 
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105'
            }`}
          >
            {active ? '⚡ Processing...' : '▶ Execute Reconfigure'}
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Code Comparison */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            
            {/* Legacy Code */}
            <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Legacy Logic (O/N³)
                </h3>
              </div>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-xs text-slate-400 leading-relaxed border border-red-900/50">
                <div className="text-red-300">Legacy_Logic (O(N² ±±3));</div>
                <div className="text-slate-500">for =(dae)&#123;&#125;</div>
                <div className="mt-2 text-slate-500">for =(&#123;(fda);</div>
                <div className="text-slate-500 ml-4">for =æ =(&#123;(ndata);</div>
              </div>
            </div>

            {/* Refactored Code */}
            <div className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Refactored Logic (O/N)
                </h3>
              </div>
              <div className="bg-black/40 rounded-xl p-4 font-mono text-xs text-slate-400 leading-relaxed border border-emerald-900/50">
                <div className="text-emerald-300">seen = set ((data)</div>
                <div className="mt-2 text-emerald-300">seen = set ((&#123;data, &#125;;</div>
                <div className="text-slate-500">)</div>
                <div className="text-slate-500 italic mt-1">// Awaiting execution...</div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              <StatCard 
                title="Carbon Reduction" 
                value={stats.carbon} 
                unit="%" 
                color="emerald"
                icon="🌱"
              />
              <StatCard 
                title="System Speed" 
                value={stats.energy} 
                unit="⚡" 
                color="blue"
                icon="⚡"
              />
              <StatCard 
                title="Cloud Budget Saved" 
                value={`$${stats.money}`} 
                unit="💰" 
                color="yellow"
                icon="💰"
              />
            </div>

            {/* Efficiency Waveform */}
            <div className="md:col-span-2 bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Efficiency Waveform</h3>
              <div className="flex items-end justify-between h-24 gap-1">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all duration-300"
                    style={{ 
                      height: `${active ? Math.random() * 100 : 30}%`,
                      opacity: active ? 0.8 : 0.3
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Terminal Log */}
            <div className="md:col-span-2 bg-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-cyan-500">▶</span> Terminal Log
              </h3>
              <div className="bg-black/60 rounded-xl p-4 font-mono text-xs h-40 overflow-y-auto border border-cyan-900/50">
                {logs.map((log, i) => (
                  <div key={i} className="text-cyan-300 mb-1 animate-pulse">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Impact Stats */}
          <div className="flex flex-col gap-6">
            
            {/* Trees Planted */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-emerald-500/20 px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Eco-Impact</span>
              </div>
              <div className="text-7xl font-black text-white mb-2 mt-4">{stats.trees}</div>
              <p className="text-sm text-emerald-400 font-semibold">Trees Planted / Month</p>
              <div className="mt-4 flex items-end justify-between h-16 gap-1 opacity-50">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-emerald-500 rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Sustainability Report */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Sustainability Report</h3>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Global Impact</span>
              </div>
              
              <div className="space-y-3">
                <ReportItem label="Instruction Cycle Reduction" value="-64%" />
                <ReportItem label="Thermal Dissipation" value="-42%" />
                <ReportItem label="Network Overhead" value="-18%" />
              </div>

              <div className="mt-4 bg-cyan-500/10 rounded-lg h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-1000"
                  style={{ width: active ? '75%' : '0%' }}
                />
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">AI Optimization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Velora uses deep-logic analysis to identify computational inefficiencies and automatically refactor code for maximum energy efficiency.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Neural Engine Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, unit, color, icon }: { title: string; value: number | string; unit: string; color: string; icon: string }) {
  const colorClasses = {
    emerald: 'from-emerald-900/40 to-emerald-800/20 border-emerald-500/30 text-emerald-400',
    blue: 'from-blue-900/40 to-blue-800/20 border-blue-500/30 text-blue-400',
    yellow: 'from-yellow-900/40 to-yellow-800/20 border-yellow-500/30 text-yellow-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border rounded-xl p-4 backdrop-blur-sm`}>
      <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-2">{title}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-black text-white">{value}</span>
        <span className="text-sm font-bold opacity-70">{unit}</span>
      </div>
    </div>
  );
}

function ReportItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-slate-400">{label}:</span>
      <span className="text-sm font-bold text-cyan-400">{value}</span>
    </div>
  );
}
