
export interface TeachingPoint {
  point_id: string;
  concept: string;
  explanation: string;
  bad_example?: string;
  good_example: string;
}

export interface Lesson {
  lesson_title: string;
  teaching_points: TeachingPoint[];
}

export interface CurriculumData {
  [key: string]: Lesson;
}

export interface Quest {
  quest_id: string;
  name: string;
  base_xp_reward: number;
  passing_threshold: number;
  required_constraints: string[];
  optimal_prompt: string;
}

export interface NexusQuestData {
  [key: string]: Quest[];
}

export interface GearUnlockCondition {
  type: 'default' | 'nexus_complete' | 'level_pass';
  value?: string;
}

export interface GearItem {
  id: string;
  name: string;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  unlock_condition: GearUnlockCondition;
  xp_cost?: number;
  asset_id?: string;
  asset: string;
  focus?: string; // Legacy optional field
}

export interface CharacterItem {
  id: string; // Renamed from asset_id to match provided JSON schema
  rank: number; // Maps to strength_rank
  name: string;
  specialty: string;
  description: string;
  ability_id: string;
  starting_xp_bonus: number;
  asset: string; // Frontend display URL
  origin: string;
  motivation: string;
  visual_description: string; // Maps to visuals
}

export interface GearCatalog {
  ARMOR: GearItem[];
  WEAPON: GearItem[];
  POWER: GearItem[];
  GADGET: GearItem[];
  CHARACTERS: CharacterItem[];
}

export interface LevelProgression {
  level: number;
  rank_title: string;
  xp_needed: number;
}

export interface ScoringConstants {
  CLARITY_WEIGHTS: {
    role_defined: number;
    task_clear: number;
    output_defined: number;
  };
  CLARITY_KEYWORDS: {
    role_defined: string[];
    task_clear: string[];
  };
  MAX_WORD_COUNT: number;
  NEXUS_PASS_THRESHOLD: number;
  MAX_LIVES_CAP: number;
}

export interface AbilityLogic {
  ability_id: string;
  condition: string;
  action: string;
}

export interface AbilityModifiers {
  function_name: string;
  parameters: string[];
  logic_guide: AbilityLogic[];
}

export interface GameBlueprint {
  CURRICULUM_DATA: CurriculumData;
  NEXUS_QUEST_DATA: NexusQuestData;
  GEAR_CATALOG: GearCatalog;
  LEVEL_PROGRESSION_TABLE: LevelProgression[];
  SCORING_CONSTANTS: ScoringConstants;
  ABILITY_MODIFIERS: AbilityModifiers;
}
