
import React from 'react';
import { FINAL_GAME_BLUEPRINT } from '../constants';
import { Shield, Zap, Trophy, User, Star, ScrollText, Target, Eye } from 'lucide-react';

interface DashboardProps {
  currentXP: number;
  currentLevel: number;
  selectedCharacterId?: string | null;
}

const Dashboard: React.FC<DashboardProps> = ({ currentXP, currentLevel, selectedCharacterId }) => {
  // Determine Rank
  const sortedRanks = [...FINAL_GAME_BLUEPRINT.LEVEL_PROGRESSION_TABLE].sort((a, b) => b.level - a.level);
  const currentRank = sortedRanks.find(r => r.level <= currentLevel) || sortedRanks[0];
  
  // Find next rank
  const nextRank = FINAL_GAME_BLUEPRINT.LEVEL_PROGRESSION_TABLE
    .sort((a, b) => a.level - b.level)
    .find(r => r.level > currentLevel);
  
  // Calculate progress
  const targetXP = nextRank ? nextRank.xp_needed : currentXP;
  const prevRankXP = currentRank.xp_needed;
  
  // Calculate percentage
  const progressPercent = nextRank 
    ? Math.min(100, Math.max(0, (currentXP / targetXP) * 100)) 
    : 100;
    
  const xpRemaining = nextRank ? nextRank.xp_needed - currentXP : 0;

  // Active Character Logic
  const activeCharacter = selectedCharacterId
    ? FINAL_GAME_BLUEPRINT.GEAR_CATALOG.CHARACTERS.find(c => c.id === selectedCharacterId) || FINAL_GAME_BLUEPRINT.GEAR_CATALOG.CHARACTERS[0]
    : FINAL_GAME_BLUEPRINT.GEAR_CATALOG.CHARACTERS.find(c => c.name === "The Analyst") || FINAL_GAME_BLUEPRINT.GEAR_CATALOG.CHARACTERS[0];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Command Center
        </h1>
        <p className="text-slate-400">Welcome back, Architect.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Rank & Level Card - Enhanced Visuals */}
        <div className="bg-slate-800/80 border border-indigo-500/30 p-6 rounded-xl backdrop-blur-sm relative overflow-hidden group shadow-[0_0_20px_rgba(79,70,229,0.1)]">
          {/* Animated Background Glow */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-500"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-md shadow-lg shadow-indigo-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Level {currentLevel}</span>
                    </div>
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20">
                       <Trophy size={18} />
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-medium">Current Rank</p>
                    <h3 className="text-3xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-100 to-indigo-200">
                        {currentRank.rank_title}
                    </h3>
                </div>
            </div>

            <div className="mt-auto">
                <div className="flex justify-between items-end text-xs mb-2 font-mono">
                    <div className="flex flex-col">
                         <span className="text-slate-500 text-[10px] uppercase">Progress</span>
                    </div>
                    <div className="text-right">
                        <span className="text-white font-bold">
                            {currentXP.toLocaleString()} <span className="text-slate-600">/</span> {targetXP.toLocaleString()} XP
                        </span>
                    </div>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-700/50 relative shadow-inner">
                    {/* Progress Fill */}
                    <div 
                        className="bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 h-full rounded-full transition-all duration-1000 relative shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                        style={{ width: `${progressPercent}%` }}
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-white/30 w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
                
                {nextRank ? (
                    <div className="flex justify-between mt-2 items-center">
                        <p className="text-[10px] text-slate-500">
                            Next: <span className="text-indigo-300 font-bold">{nextRank.rank_title}</span>
                        </p>
                        <p className="text-[10px] text-slate-500 text-right">
                            {xpRemaining.toLocaleString()} XP to promotion
                        </p>
                    </div>
                ) : (
                    <p className="text-[10px] text-emerald-400 mt-2 text-right font-bold">Max Rank Achieved</p>
                )}
            </div>
          </div>
        </div>

        {/* Active Gear Card */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm shadow-lg shadow-emerald-500/5 hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400 border border-emerald-500/20">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Active Gear</h3>
              <p className="text-xl font-bold text-white">Basic Tunic</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            Durability: 100%
          </p>
        </div>

        {/* Daily Streak Card */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm shadow-lg shadow-amber-500/5 hover:border-amber-500/30 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400 border border-amber-500/20">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Daily Streak</h3>
              <p className="text-xl font-bold text-white">3 Days</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-3">Next bonus in 2 days</p>
        </div>
      </div>

      {/* Active Character */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <User className="text-purple-400" /> Active Persona
        </h2>
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden flex flex-col md:flex-row shadow-xl">
            {/* Character Image */}
            <div className="md:w-1/3 h-80 md:h-auto relative group">
                <img 
                    src={activeCharacter.asset} 
                    alt={activeCharacter.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{activeCharacter.name}</h3>
                    <span className="px-2 py-1 bg-purple-500/30 border border-purple-500/50 rounded text-xs text-purple-200 font-mono">
                        {activeCharacter.specialty}
                    </span>
                </div>
            </div>

            {/* Character Details */}
            <div className="p-6 md:w-2/3 flex flex-col gap-6">
                {/* Specialization */}
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1">
                         <Star size={12} /> Specialization
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-purple-500/50 pl-3">
                        {activeCharacter.description}
                    </p>
                </div>

                {/* Visual Signature */}
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1">
                        <Eye size={12} /> Visual Signature
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                        {activeCharacter.visual_description}
                    </p>
                </div>

                {/* Origin Story */}
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1">
                        <ScrollText size={12} /> Origin Story
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed italic">
                        "{activeCharacter.origin}"
                    </p>
                </div>

                {/* Motivation */}
                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1">
                        <Target size={12} /> Primary Directive
                    </h4>
                    <p className="text-indigo-300 text-xs font-medium">
                        {activeCharacter.motivation}
                    </p>
                </div>
                
                {/* Ability Box */}
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-500/20 rounded text-indigo-400">
                            <Zap size={16} />
                        </div>
                        <div>
                             <h5 className="text-white font-mono text-sm">{activeCharacter.ability_id.replace(/_/g, ' ')}</h5>
                             {activeCharacter.starting_xp_bonus > 0 && (
                                 <span className="text-xs text-emerald-400">+ {activeCharacter.starting_xp_bonus} Starting XP Bonus</span>
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
