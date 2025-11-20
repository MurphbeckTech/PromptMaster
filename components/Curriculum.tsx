import React, { useState } from 'react';
import { FINAL_GAME_BLUEPRINT } from '../constants';
import { BookOpen, CheckCircle, XCircle } from 'lucide-react';

const Curriculum: React.FC = () => {
  const [expandedSector, setExpandedSector] = useState<string | null>("S01_CLARITY_GRID");

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Curriculum Database</h1>
        <p className="text-slate-400">Master the theoretical foundations of Prompt Engineering.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation / Sector List */}
        <div className="lg:col-span-1 space-y-4">
          {Object.entries(FINAL_GAME_BLUEPRINT.CURRICULUM_DATA).map(([key, lesson]) => (
            <button
              key={key}
              onClick={() => setExpandedSector(key)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group
                ${expandedSector === key 
                  ? 'bg-indigo-600/20 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                  : 'bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-slate-600'
                }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase tracking-widest
                   ${expandedSector === key ? 'text-indigo-400' : 'text-slate-500'}
                `}>
                  {key.split('_')[0]}
                </span>
                {expandedSector === key && <BookOpen size={16} className="text-indigo-400" />}
              </div>
              <h3 className="text-slate-200 font-medium group-hover:text-white transition-colors">
                {lesson.lesson_title}
              </h3>
            </button>
          ))}
        </div>

        {/* Lesson Content */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-8 min-h-[500px]">
          {expandedSector && FINAL_GAME_BLUEPRINT.CURRICULUM_DATA[expandedSector] ? (
            <div className="animate-fade-in">
               <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                 <div className="p-3 bg-indigo-500 rounded-lg text-white shadow-lg shadow-indigo-500/20">
                   <BookOpen size={24} />
                 </div>
                 <div>
                    <h2 className="text-2xl font-bold text-white">
                        {FINAL_GAME_BLUEPRINT.CURRICULUM_DATA[expandedSector].lesson_title}
                    </h2>
                    <p className="text-indigo-400 font-mono text-sm mt-1">{expandedSector}</p>
                 </div>
               </div>

               <div className="space-y-8">
                 {FINAL_GAME_BLUEPRINT.CURRICULUM_DATA[expandedSector].teaching_points.map((point) => (
                   <div key={point.point_id} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300 font-mono">
                                {point.point_id}
                            </span>
                            {point.concept}
                        </h3>
                     </div>
                     
                     <p className="text-slate-300 mb-6 leading-relaxed">
                        {point.explanation}
                     </p>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {point.bad_example && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                                <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase mb-2">
                                    <XCircle size={16} /> Avoid
                                </div>
                                <p className="text-red-200/80 text-sm font-mono">"{point.bad_example}"</p>
                            </div>
                        )}
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase mb-2">
                                <CheckCircle size={16} /> Best Practice
                            </div>
                            <p className="text-emerald-200/80 text-sm font-mono">"{point.good_example}"</p>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-600">
              Select a module to begin decryption.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;