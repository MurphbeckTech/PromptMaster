
import React, { useState } from 'react';
import { FINAL_GAME_BLUEPRINT } from '../constants';
import { Swords, ChevronRight, AlertCircle, Check, Zap } from 'lucide-react';

interface NexusProps {
  onXPChange: (amount: number) => void;
  selectedCharacterId: string | null;
}

const Nexus: React.FC<NexusProps> = ({ onXPChange, selectedCharacterId }) => {
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [abilityTriggered, setAbilityTriggered] = useState<string | null>(null);

  // Flatten quests for display
  const allQuests = Object.entries(FINAL_GAME_BLUEPRINT.NEXUS_QUEST_DATA).flatMap(([sector, quests]) => 
    quests.map(q => ({ ...q, sector }))
  );

  const activeQuest = allQuests.find(q => q.quest_id === selectedQuestId);

  const handleSimulateSubmit = () => {
    if (!activeQuest) return;
    setAbilityTriggered(null);

    // Simple mock validation based on keyword matching from game data
    const scoreConstants = FINAL_GAME_BLUEPRINT.SCORING_CONSTANTS;
    let score = 100; // Base starting score
    
    // Check role definition
    const hasRole = scoreConstants.CLARITY_KEYWORDS.role_defined.some(k => userInput.toLowerCase().includes(k));
    if (hasRole) score += scoreConstants.CLARITY_WEIGHTS.role_defined;

    // Check tasks
    const hasTask = scoreConstants.CLARITY_KEYWORDS.task_clear.some(k => userInput.toLowerCase().includes(k));
    if (hasTask) score += scoreConstants.CLARITY_WEIGHTS.task_clear;

    // Mock Length check
    const wordCount = userInput.split(' ').length;
    if (wordCount > scoreConstants.MAX_WORD_COUNT) score -= 20; // Penalty for verbosity

    // --- CHARACTER ABILITY LOGIC ---
    let abilityMessage = "";
    let abilityName = "";

    // 1. The Scripter (CHAR_06): Syntax Shield
    // Grants bonus if language version is specified
    if (selectedCharacterId === 'CHAR_06') {
        const codeKeywords = ['python', 'javascript', 'js', 'es6', 'react', 'java', 'c++', 'html', 'css'];
        const hasCode = codeKeywords.some(k => userInput.toLowerCase().includes(k));
        if (hasCode) {
            score += 50; // Massive boost ensuring clarity pass
            abilityName = "Syntax Shield";
            abilityMessage = "SYNTAX SHIELD ACTIVE: Your Scripter ability automatically granted 100% Clarity for correctly specifying the language version.";
        }
    }

    // 2. The Analyst (CHAR_04): Clarity Focus
    // Boosts score if it's already decent
    if (selectedCharacterId === 'CHAR_04') {
        if (score >= 130) {
            score += 10;
            abilityName = "Clarity Focus";
            abilityMessage = "CLARITY FOCUS BONUS: Your Analyst precision boosted your Clarity score by +10 points.";
        }
    }

    // 3. The Validator (CHAR_05): Robustness Bonus
    // Bonus for error handling keywords
    if (selectedCharacterId === 'CHAR_05') {
        const validationKeywords = ['try', 'catch', 'except', 'error', 'validation', 'fail'];
        const hasValidation = validationKeywords.some(k => userInput.toLowerCase().includes(k));
        if (hasValidation) {
            score = Math.round(score * 1.05);
            abilityName = "Robustness Bonus";
            abilityMessage = "ROBUSTNESS CHECK: Your Validator specialization applied a +5% total score bonus for including the Try-Except block.";
        }
    }

    // Determine Pass/Fail
    // The mock threshold logic: activeQuest.passing_threshold is the target total score. 
    // Since our mock scoring is simplified (max ~200-250), we scale the check.
    const adjustedThreshold = activeQuest.passing_threshold - 100; 

    if (score >= adjustedThreshold) {
         const successMsg = `SUCCESS: Prompt accepted by the Nexus. High fidelity output generated. +${activeQuest.base_xp_reward} XP`;
         setFeedback(successMsg);
         if (abilityMessage) {
             setAbilityTriggered(abilityMessage);
         }
         onXPChange(activeQuest.base_xp_reward);
    } else {
         setFeedback("FAILURE: Prompt alignment too low. Refine constraints and try again.");
    }
  };

  return (
    <div className="p-6 h-full flex flex-col animate-fade-in">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">The Nexus</h1>
        <p className="text-slate-400">High-stakes simulation environment. Test your prompts against the engine.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 flex-grow">
        {/* Quest List */}
        <div className="lg:w-1/3 flex flex-col gap-3 overflow-y-auto pr-2 h-[600px] custom-scrollbar">
            {allQuests.map((quest) => (
                <div 
                    key={quest.quest_id}
                    onClick={() => { setSelectedQuestId(quest.quest_id); setFeedback(null); setAbilityTriggered(null); setUserInput(""); }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all
                        ${selectedQuestId === quest.quest_id 
                            ? 'bg-violet-900/30 border-violet-500' 
                            : 'bg-slate-800 border-slate-700 hover:bg-slate-750'
                        }
                    `}
                >
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-mono text-slate-500">{quest.quest_id}</span>
                        <span className="text-xs bg-slate-900 text-amber-400 px-2 py-1 rounded border border-amber-500/30">
                            {quest.base_xp_reward} XP
                        </span>
                    </div>
                    <h3 className="font-bold text-white mb-1">{quest.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Swords size={12} />
                        <span>Threshold: {quest.passing_threshold}</span>
                    </div>
                </div>
            ))}
        </div>

        {/* Active Quest Stage */}
        <div className="lg:w-2/3 bg-slate-900 border border-slate-800 rounded-xl p-1 overflow-hidden flex flex-col shadow-2xl">
            {activeQuest ? (
                <div className="h-full flex flex-col">
                    {/* Quest Header */}
                    <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-violet-500 p-2 rounded-lg text-white shadow-lg shadow-violet-500/20">
                                <Swords size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">{activeQuest.name}</h2>
                                <p className="text-xs text-violet-400 font-mono">{activeQuest.sector} :: {activeQuest.quest_id}</p>
                            </div>
                        </div>
                        
                        <div className="bg-slate-950/50 rounded p-4 border border-slate-700/50">
                            <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
                                <AlertCircle size={12} /> Required Constraints
                            </h4>
                            <ul className="space-y-2">
                                {activeQuest.required_constraints.map((req, i) => (
                                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                        <span className="text-violet-400 mt-1">•</span> {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="flex-grow p-6 flex flex-col gap-4 relative">
                        <label className="text-sm text-slate-400 font-medium">Input Prompt Sequence:</label>
                        <textarea 
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            className="flex-grow bg-slate-950 border border-slate-700 rounded-lg p-4 text-slate-200 font-mono text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none transition-all"
                            placeholder="Act as a..."
                        />
                    </div>

                    {/* Footer / Actions */}
                    <div className="p-6 bg-slate-800/30 border-t border-slate-700">
                        <div className="flex flex-col gap-3">
                            {/* Ability Feedback Banner */}
                            {abilityTriggered && (
                                <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-3 flex items-start gap-3 animate-fade-in">
                                    <div className="p-1 bg-indigo-500/20 rounded text-indigo-400 mt-0.5">
                                        <Zap size={14} />
                                    </div>
                                    <p className="text-xs text-indigo-200 font-mono leading-relaxed">
                                        {abilityTriggered}
                                    </p>
                                </div>
                            )}

                            <div className="flex items-center justify-between mt-2">
                                <div className="text-sm">
                                    {feedback && (
                                        <span className={`flex items-center gap-2 font-medium ${feedback.startsWith('SUCCESS') ? 'text-emerald-400' : 'text-red-400'}`}>
                                            {feedback.startsWith('SUCCESS') ? <Check size={16}/> : <AlertCircle size={16}/>}
                                            {feedback.split('+')[0]} 
                                            {feedback.includes('+') && (
                                                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-xs font-bold border border-emerald-500/30">
                                                    +{feedback.split('+')[1]}
                                                </span>
                                            )}
                                        </span>
                                    )}
                                </div>
                                <button 
                                    onClick={handleSimulateSubmit}
                                    className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-violet-600/20 active:scale-95"
                                >
                                    Execute <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-4">
                    <div className="p-6 bg-slate-800/50 rounded-full border border-slate-700">
                        <Swords size={48} className="opacity-20" />
                    </div>
                    <p className="font-mono text-sm">Select a Nexus Quest to initialize simulation.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Nexus;
