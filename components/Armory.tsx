import React from 'react';
import { FINAL_GAME_BLUEPRINT } from '../constants';
import { Lock, Unlock } from 'lucide-react';

const Armory: React.FC = () => {
  const categories = ['ARMOR', 'WEAPON', 'POWER'] as const;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">The Armory</h1>
            <p className="text-slate-400">Equip artifacts to enhance your prompting efficiency.</p>
        </div>
        <div className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
            <span className="text-slate-400 text-sm mr-2">Available XP:</span>
            <span className="text-amber-400 font-mono font-bold">2,450</span>
        </div>
      </header>

      <div className="space-y-12">
        {categories.map((cat) => (
            <section key={cat}>
                <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
                    {cat}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FINAL_GAME_BLUEPRINT.GEAR_CATALOG[cat].map((item) => (
                        <div key={item.id} className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                            <div className="aspect-square bg-slate-900 relative">
                                <img src={item.asset} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                {item.rarity && (
                                    <span className={`absolute top-2 right-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm
                                        ${item.rarity === 'Legendary' ? 'bg-amber-500 text-amber-900' : 
                                          item.rarity === 'Rare' ? 'bg-cyan-500 text-cyan-900' : 
                                          'bg-slate-500 text-slate-200'}
                                    `}>
                                        {item.rarity}
                                    </span>
                                )}
                            </div>
                            <div className="p-4">
                                <h4 className="text-white font-bold truncate mb-1">{item.name}</h4>
                                <div className="flex justify-between items-end mt-4">
                                    <div className="text-xs text-slate-400">
                                        {item.unlock_condition.type === 'default' ? (
                                            <span className="flex items-center gap-1 text-emerald-400"><Unlock size={12} /> Unlocked</span>
                                        ) : (
                                            <span className="flex items-center gap-1 text-slate-500"><Lock size={12} /> Beats {item.unlock_condition.value}</span>
                                        )}
                                    </div>
                                    {item.xp_cost !== 0 && (
                                        <span className="text-amber-400 font-mono font-bold text-sm">{item.xp_cost} XP</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        ))}
      </div>
    </div>
  );
};

export default Armory;