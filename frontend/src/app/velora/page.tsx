'use client'

import React, { useState, useEffect } from "react";

export default function VeloraFinalUltimate() {
    const [active, setActive] = useState(false);
    const [stats, setStats] = useState({ carbon: 0, energy: 0, speed: 0, trees: 0, money: 0 });
    const [logs, setLogs] = useState(["> [SYSTEM] Initializing Velora Core..."]);
    const [mounted, setMounted] = useState(false);
    const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
    const [treeHeights, setTreeHeights] = useState<number[]>([]);

    useEffect(() => {
        setMounted(true);
        setWaveformHeights(Array.from({ length: 50 }, () => Math.random() * 100));
        setTreeHeights(Array.from({ length: 30 }, () => 20 + Math.random() * 80));
    }, []);

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
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                                <path d="M2 21c0-3 1.85-5.36 5.08-6" />
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
                        className={`px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${active
                            ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105'
                            }`}
                    >
                        {active ? 'Processing...' : 'Execute Reconfigure'}
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Column - Code Comparison */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Legacy Code */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-red-400">Legacy Logic (O/N²)</h3>
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                            </div>
                            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-slate-400 leading-relaxed">
                                <div>Legacy_Logic (O(N²));</div>
                                <div>for = (dae);</div>
                                <div className="mt-2">for ={"{(({data};"}</div>
                                <div className="ml-4">for = age :((ndata);</div>
                            </div>
                        </div>

                        {/* Refactored Code */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-emerald-400">Refactored Logic (O/N)</h3>
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                            </div>
                            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-emerald-400 leading-relaxed">
                                <div>seen = set ((data)</div>
                                <div className="mt-2">seen = set (((data, );</div>
                                <div>)</div>
                                <div className="text-slate-500">// Awaiting execution...</div>
                            </div>
                        </div>

                        {/* Metrics Cards */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="text-sm font-semibold text-slate-400 mb-2">Carbon Reduction</h4>
                            <div className="text-4xl font-black text-emerald-400">{stats.carbon}%</div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="text-sm font-semibold text-slate-400 mb-2">System Speed</h4>
                            <div className="text-4xl font-black text-blue-400 flex items-center gap-2">
                                {stats.speed}
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="text-sm font-semibold text-slate-400 mb-2">Cloud Budget Saved</h4>
                            <div className="text-4xl font-black text-yellow-400 flex items-center gap-2">
                                ${stats.money}
                                <span className="text-2xl">💰</span>
                            </div>
                        </div>

                        {/* Efficiency Waveform */}
                        <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                            <h4 className="text-sm font-semibold text-slate-400 mb-4">Efficiency Waveform</h4>
                            <div className="flex items-end justify-between h-32 gap-1">
                                {mounted && waveformHeights.map((height, i) => {
                                    const isActive = active && i < (stats.speed / 76.4) * 50;
                                    return (
                                        <div
                                            key={i}
                                            className={`flex-1 rounded-t transition-all duration-300 ${isActive ? 'bg-cyan-400' : 'bg-slate-700'
                                                }`}
                                            style={{ height: `${height}%` }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/* Terminal Log */}
                        <div className="md:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
                            <h4 className="text-sm font-semibold text-cyan-400 mb-4">Terminal Log</h4>
                            <div className="bg-black/60 rounded-lg p-4 h-32 overflow-y-auto font-mono text-xs space-y-1">
                                {logs.map((log, i) => (
                                    <div key={i} className="text-cyan-400">
                                        {log}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Impact Stats */}
                    <div className="space-y-6">

                        {/* Trees Planted Card */}
                        <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-emerald-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Eco Impact
                            </div>
                            <div className="text-8xl font-black text-white mb-2 mt-8">{stats.trees}</div>
                            <div className="text-cyan-400 font-semibold text-sm mb-6">Trees Planted / Month</div>
                            <div className="flex items-end justify-between h-20 gap-1">
                                {mounted && treeHeights.map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-cyan-400/60 rounded-t"
                                        style={{ height: `${height}%` }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sustainability Report */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-sm font-semibold text-slate-300">Sustainability Report</h4>
                                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Global Impact</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Instruction Cycle Reduction:</span>
                                        <span className="text-emerald-400 font-bold">-64%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000"
                                            style={{ width: active ? '64%' : '0%' }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Thermal Dissipation:</span>
                                        <span className="text-emerald-400 font-bold">-42%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000"
                                            style={{ width: active ? '42%' : '0%' }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Network Overhead:</span>
                                        <span className="text-emerald-400 font-bold">-18%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000"
                                            style={{ width: active ? '18%' : '0%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
