
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Curriculum from './components/Curriculum';
import Nexus from './components/Nexus';
import Armory from './components/Armory';
import Lab from './components/Lab';
import { LayoutDashboard, Book, Sword, ShoppingBag, ChevronRight, FlaskConical } from 'lucide-react';
import { FINAL_GAME_BLUEPRINT } from './constants';

// Main Tab Navigation state
type Tab = 'dashboard' | 'curriculum' | 'nexus' | 'armory' | 'lab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  
  // Global State for simplicity in this demo
  const [xp, setXp] = useState(1200);
  const [level, setLevel] = useState(4);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);

  const handleXPAdd = (amount: number) => {
    const newXp = xp + amount;
    setXp(newXp);
    
    // Calculate new level based on Blueprint
    const sortedLevels = [...FINAL_GAME_BLUEPRINT.LEVEL_PROGRESSION_TABLE].sort((a, b) => b.xp_needed - a.xp_needed);
    const currentRank = sortedLevels.find(rank => newXp >= rank.xp_needed);
    
    if (currentRank && currentRank.level > level) {
      setLevel(currentRank.level);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard currentXP={xp} currentLevel={level} selectedCharacterId={selectedCharacterId} />;
      case 'curriculum': return <Curriculum />;
      case 'nexus': return <Nexus onXPChange={handleXPAdd} selectedCharacterId={selectedCharacterId} />;
      case 'armory': return <Armory />;
      case 'lab': return <Lab />;
      default: return <Dashboard currentXP={xp} currentLevel={level} selectedCharacterId={selectedCharacterId} />;
    }
  };

  // Render Character Selection Screen if not selected
  if (!selectedCharacterId) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col h-full">
           <header className="text-center mb-12 mt-auto lg:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 mb-4 font-['Space_Grotesk']">
                Initialize Identity
              </h1>
              <p className="text-slate-400 text-lg">Select your archetype to begin the simulation.</p>
           </header>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto pb-8">
              {FINAL_GAME_BLUEPRINT.GEAR_CATALOG.CHARACTERS.sort((a,b) => b.rank - a.rank).map((char) => (
                 <div
                    key={char.id}
                    onClick={() => setSelectedCharacterId(char.id)}
                    className="group relative bg-slate-800/40 border border-slate-700 rounded-2xl p-4 cursor-pointer hover:bg-slate-800/80 hover:border-indigo-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] flex flex-col h-full"
                 >
                    {/* Rank Badge */}
                    <div className="absolute top-6 right-6 z-20 bg-slate-900/80 backdrop-blur border border-slate-700 text-xs font-mono px-2 py-1 rounded text-slate-300">
                       Rank {char.rank}
                    </div>

                    {/* Image Area */}
                    <div className="aspect-[4/5] rounded-xl bg-slate-900 relative overflow-hidden mb-5 shrink-0">
                       <img src={char.asset} alt={char.name} className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                       
                       {/* Ability ID overlay on image bottom */}
                       <div className="absolute bottom-0 left-0 w-full p-3">
                          <div className="text-[10px] font-mono text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity">
                            {char.ability_id}
                          </div>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{char.name}</h3>
                        <p className="text-sm text-indigo-400 font-medium mb-3">{char.specialty}</p>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3 flex-1">{char.description}</p>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-slate-700/50">
                        <button className="w-full py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                           Select <ChevronRight size={16} />
                        </button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex animate-fade-in">
      {/* Sidebar Navigation */}
      <aside className="w-20 lg:w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 transition-all duration-300 z-20 relative">
        <div className="p-6 flex items-center justify-center lg:justify-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg shadow-lg shadow-indigo-500/20 shrink-0 relative group overflow-hidden">
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </div>
          <span className="font-['Space_Grotesk'] font-bold text-xl hidden lg:block tracking-tight">Prompt<span className="text-indigo-400">Master</span></span>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-2">
          <NavButton 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
          />
          <NavButton 
            active={activeTab === 'curriculum'} 
            onClick={() => setActiveTab('curriculum')} 
            icon={<Book size={20} />} 
            label="Curriculum" 
          />
          <NavButton 
            active={activeTab === 'nexus'} 
            onClick={() => setActiveTab('nexus')} 
            icon={<Sword size={20} />} 
            label="Nexus" 
          />
          <NavButton 
            active={activeTab === 'armory'} 
            onClick={() => setActiveTab('armory')} 
            icon={<ShoppingBag size={20} />} 
            label="Armory" 
          />
          <NavButton 
            active={activeTab === 'lab'} 
            onClick={() => setActiveTab('lab')} 
            icon={<FlaskConical size={20} />} 
            label="AI Lab" 
          />
        </nav>

        <div className="p-4 border-t border-slate-800 hidden lg:block">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
            <p className="text-xs text-slate-500 uppercase mb-1">System Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              <span className="text-sm text-emerald-400 font-mono">Online</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] overflow-y-auto relative">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden border
      ${active 
        ? 'bg-indigo-900/30 border-indigo-500/50 text-indigo-100 shadow-[inset_0_0_20px_rgba(79,70,229,0.15)]' 
        : 'border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
      }
    `}
  >
    {/* Active Status Highlight */}
    {active && (
      <div className="absolute left-0 top-2 bottom-2 w-1 bg-indigo-500 rounded-r shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
    )}

    <div className={`relative z-10 transition-transform duration-300 ${active ? 'translate-x-2 text-indigo-300' : ''}`}>
      {icon}
    </div>
    <span className={`font-medium text-sm relative z-10 transition-all duration-300 hidden lg:block ${active ? 'translate-x-2 font-semibold tracking-wide' : ''}`}>
        {label}
    </span>
    
    {/* Active Subtle Glow in background */}
    {active && (
       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
    )}
  </button>
);

export default App;
