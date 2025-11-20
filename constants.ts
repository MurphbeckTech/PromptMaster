
import { GameBlueprint } from './types';

export const FINAL_GAME_BLUEPRINT: GameBlueprint = {
  // Sector S-01: Clarity (Concepts C101, C102)
  CURRICULUM_DATA: {
    "S01_CLARITY_GRID": {
      "lesson_title": "Lesson 1: Clarity & Unambiguous Language",
      "teaching_points": [
        {
          "point_id": "C101",
          "concept": "Strong Verbs",
          "explanation": "Use 'Write' or 'Calculate' instead of vague phrases.",
          "bad_example": "Tell me about cars.",
          "good_example": "Generate a list of the top five best-selling electric vehicles."
        },
        {
          "point_id": "C102",
          "concept": "Context and Audience",
          "explanation": "Define who the AI is speaking to (e.g., Act as a manager).",
          "bad_example": "Summarize this.",
          "good_example": "Summarize the article for a junior high student."
        }
      ]
    },
    // Sector S-02: Constraints (Concepts S201, S202)
    "S02_CONSTRAINT_MATRIX": {
      "lesson_title": "Lesson 2: Technical Constraints & Specs",
      "teaching_points": [
        {
          "point_id": "S201",
          "concept": "Language & Version",
          "explanation": "Specify the language (e.g., Python 3.9) to prevent errors.",
          "bad_example": "Write a Python script.",
          "good_example": "Write a Python 3.9 function named 'quick_sort'."
        },
        {
          "point_id": "S202",
          "concept": "Error Handling",
          "explanation": "Instruct the AI to include robustness (try-catch, validation).",
          "good_example": "The script must include a try-except block to gracefully handle any I/O errors."
        }
      ]
    },
    // Sector S-03: Persona (Concept R301)
    "S03_PERSONA_FORGE": {
      "lesson_title": "Lesson 3: Defining the Role ('Act As')",
      "teaching_points": [
        {
          "point_id": "R301",
          "concept": "Persona Alignment",
          "explanation": "The 'Act as a [Role]' command aligns tone, style, and knowledge.",
          "bad_example": "Write a sales pitch.",
          "good_example": "Act as a veteran copywriter who specializes in luxury goods."
        }
      ]
    },
    // Sector S-04: Few-Shot (Concept E401)
    "S04_CONTEXT_NEXUS": {
      "lesson_title": "Lesson 4: Few-Shot Prompting",
      "teaching_points": [
        {
          "point_id": "E401",
          "concept": "Teaching by Example",
          "explanation": "Provide 1-3 examples of the desired input/output format before the task.",
          "bad_example": "Convert this list to this format.",
          "good_example": "Convert names from First Last to L, F. Example: John Doe -> Doe, J."
        }
      ]
    }
  },

  NEXUS_QUEST_DATA: {
    "S01_NEXUS_QUESTS": [
      {
        "quest_id": "S01-Q1",
        "name": "The Unambiguous Brief",
        "base_xp_reward": 500,
        "passing_threshold": 280,
        "required_constraints": [
          "Summarize an internal company memo",
          "Output must be formatted entirely in Markdown",
          "Limit the output length to 150 words",
          "Must define the audience (e.g., 'Act as a corporate trainer')"
        ],
        "optimal_prompt": "Act as a corporate trainer. Summarize the following memo into exactly 150 words. Output must be formatted using Markdown, including two distinct headings."
      },
      {
        "quest_id": "S01-Q2",
        "name": "The Executive Summary",
        "base_xp_reward": 550,
        "passing_threshold": 290,
        "required_constraints": [
            "Target audience: C-Suite",
            "Bulleted list format",
            "Focus on ROI"
        ],
        "optimal_prompt": "Act as a CFO. Summarize the project status for the CEO, focusing purely on ROI and financial risks using a bulleted list."
      }
    ],
    "S02_NEXUS_QUESTS": [
      {
        "quest_id": "S02-Q1",
        "name": "The Firmware Firewall Challenge",
        "base_xp_reward": 750,
        "passing_threshold": 285,
        "required_constraints": [
          "Code must be written in JavaScript ES6",
          "The function must be named 'validateEmailInput'",
          "Must include a try-catch block for execution errors",
          "Must return a boolean value"
        ],
        "optimal_prompt": "Act as a senior DevOps engineer. Write a JavaScript ES6 function named 'validateEmailInput' that accepts one string argument. The function must return a boolean. Crucially, wrap all execution logic within a try-catch block."
      }
    ]
  },

  GEAR_CATALOG: {
    "ARMOR": [
        // T0 (Start) - Common
        { "id": "A-ARM0", "name": "Basic Prompting Tunic", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/A-ARM0/200/200" },
        { "id": "C-ARM0", "name": "Grey Grid Tunic", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/C-ARM0/200/200" },
        { "id": "B-ARM0", "name": "Flowing Scarf/Vest", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/B-ARM0/200/200" },
        { "id": "S-ARM0", "name": "Digital Utility Suit", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/S-ARM0/200/200" },
        { "id": "V-ARM0", "name": "Reinforced Shin Guards", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/V-ARM0/200/200" },
        { "id": "W-ARM0", "name": "Translucent Vest", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/W-ARM0/200/200" },
        { "id": "R-ARM0", "name": "Utility Belt/Pouches", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/R-ARM0/200/200" },
        { "id": "O-ARM0", "name": "Hooded Cloak", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/O-ARM0/200/200" },
        
        // T1-T3 Placeholders
        { "id": "A002", "name": "Bias-Free Vest", "rarity": "Uncommon", "unlock_condition": { "type": "nexus_complete", "value": "S01-Q50" }, "xp_cost": 800, "asset": "https://picsum.photos/seed/A002/200/200" },
        { "id": "A003", "name": "Syntax Weave Cloak", "rarity": "Rare", "unlock_condition": { "type": "nexus_complete", "value": "S02-Q50" }, "xp_cost": 1500, "asset": "https://picsum.photos/seed/A003/200/200" },
        { "id": "A004", "name": "Ethical Firewall Plate", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3500, "asset": "https://picsum.photos/seed/A004/200/200" },

        // T4 (S-04) - Legendary
        { "id": "A-ARM4", "name": "Architects Exoskeleton", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/A-ARM4/200/200" },
        { "id": "C-ARM4", "name": "The Master Template Suit", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/C-ARM4/200/200" },
        { "id": "B-ARM4", "name": "Legendary Muse Robes", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/B-ARM4/200/200" },
        { "id": "S-ARM4", "name": "Master Engineer Plating", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/S-ARM4/200/200" },
        { "id": "V-ARM4", "name": "The Failsafe Exo-Suit", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/V-ARM4/200/200" },
        { "id": "W-ARM4", "name": "The Masterful Cipher Suit", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/W-ARM4/200/200" },
        { "id": "R-ARM4", "name": "The Knowledge Weaver Suit", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/R-ARM4/200/200" },
        { "id": "O-ARM4", "name": "The Uncorrupted Data Robe", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset": "https://picsum.photos/seed/O-ARM4/200/200" }
    ],
    "WEAPON": [
        // --- ANALYST WEAPONS ---
        { "id": "A-W00", "name": "Standard Data Scanner", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-ANAL-T0", "asset": "https://picsum.photos/seed/W-ANAL-T0/200/200" },
        { "id": "A-W01", "name": "Clarity Lens", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-ANAL-T1", "asset": "https://picsum.photos/seed/W-ANAL-T1/200/200" },
        { "id": "A-W02", "name": "Constraint Matrix Pistol", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-ANAL-T2", "asset": "https://picsum.photos/seed/W-ANAL-T2/200/200" },
        { "id": "A-W03", "name": "Truthseeker Repeater", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-ANAL-T3", "asset": "https://picsum.photos/seed/W-ANAL-T3/200/200" },
        { "id": "A-W04", "name": "Singularity Projector", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-ANAL-T4", "asset": "https://picsum.photos/seed/W-ANAL-T4/200/200" },
        
        // --- ARCHITECT WEAPONS ---
        { "id": "C-W00", "name": "Base Holo-Ruler", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-ARCH-T0", "asset": "https://picsum.photos/seed/W-ARCH-T0/200/200" },
        { "id": "C-W01", "name": "Boundary Scepter", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-ARCH-T1", "asset": "https://picsum.photos/seed/W-ARCH-T1/200/200" },
        { "id": "C-W02", "name": "Blueprint Pistol", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-ARCH-T2", "asset": "https://picsum.photos/seed/W-ARCH-T2/200/200" },
        { "id": "C-W03", "name": "Role-Define Hammer", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-ARCH-T3", "asset": "https://picsum.photos/seed/W-ARCH-T3/200/200" },
        { "id": "C-W04", "name": "Nexus Foundation Drill", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-ARCH-T4", "asset": "https://picsum.photos/seed/W-ARCH-T4/200/200" },

        // --- BARD WEAPONS ---
        { "id": "B-W00", "name": "Holo-Lyre", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-BARD-T0", "asset": "https://picsum.photos/seed/W-BARD-T0/200/200" },
        { "id": "B-W01", "name": "Clarity Cadenza Bow", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-BARD-T1", "asset": "https://picsum.photos/seed/W-BARD-T1/200/200" },
        { "id": "B-W02", "name": "Apostrophe Blade", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-BARD-T2", "asset": "https://picsum.photos/seed/W-BARD-T2/200/200" },
        { "id": "B-W03", "name": "Persona Scepter", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-BARD-T3", "asset": "https://picsum.photos/seed/W-BARD-T3/200/200" },
        { "id": "B-W04", "name": "The Narrative Harp", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-BARD-T4", "asset": "https://picsum.photos/seed/W-BARD-T4/200/200" },

        // --- SCRIPTER WEAPONS ---
        { "id": "S-W00", "name": "Data Cable Whip", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-SCRIP-T0", "asset": "https://picsum.photos/seed/W-SCRIP-T0/200/200" },
        { "id": "S-W01", "name": "Clean Code Pistol", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-SCRIP-T1", "asset": "https://picsum.photos/seed/W-SCRIP-T1/200/200" },
        { "id": "S-W02", "name": "Version Spanner Rifle", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-SCRIP-T2", "asset": "https://picsum.photos/seed/W-SCRIP-T2/200/200" },
        { "id": "S-W03", "name": "Persona Shell Shotgun", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-SCRIP-T3", "asset": "https://picsum.photos/seed/W-SCRIP-T3/200/200" },
        { "id": "S-W04", "name": "Quantum Compiler Cannon", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-SCRIP-T4", "asset": "https://picsum.photos/seed/W-SCRIP-T4/200/200" },

        // --- VALIDATOR WEAPONS ---
        { "id": "V-W00", "name": "Logic Baton", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-VAL-T0", "asset": "https://picsum.photos/seed/W-VAL-T0/200/200" },
        { "id": "V-W01", "name": "Explicit Request Shotgun", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-VAL-T1", "asset": "https://picsum.photos/seed/W-VAL-T1/200/200" },
        { "id": "V-W02", "name": "Exception Catcher Shield", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-VAL-T2", "asset": "https://picsum.photos/seed/W-VAL-T2/200/200" },
        { "id": "V-W03", "name": "Sanity Check Repeater", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-VAL-T3", "asset": "https://picsum.photos/seed/W-VAL-T3/200/200" },
        { "id": "V-W04", "name": "Robustness Barrier Generator", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-VAL-T4", "asset": "https://picsum.photos/seed/W-VAL-T4/200/200" },

        // --- WHISPERER WEAPONS ---
        { "id": "W-W00", "name": "Economy Sidearm", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-WHISP-T0", "asset": "https://picsum.photos/seed/W-WHISP-T0/200/200" },
        { "id": "W-W01", "name": "Concise Blaster", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-WHISP-T1", "asset": "https://picsum.photos/seed/W-WHISP-T1/200/200" },
        { "id": "W-W02", "name": "Optimization Rifle", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-WHISP-T2", "asset": "https://picsum.photos/seed/W-WHISP-T2/200/200" },
        { "id": "W-W03", "name": "The Concise Cannon", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-WHISP-T3", "asset": "https://picsum.photos/seed/W-WHISP-T3/200/200" },
        { "id": "W-W04", "name": "The Elegant Algorithm", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-WHISP-T4", "asset": "https://picsum.photos/seed/W-WHISP-T4/200/200" },

        // --- RESEARCHER WEAPONS ---
        { "id": "R-W00", "name": "Fragment Collector", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-RES-T0", "asset": "https://picsum.photos/seed/W-RES-T0/200/200" },
        { "id": "R-W01", "name": "Data Scanner Mk II", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-RES-T1", "asset": "https://picsum.photos/seed/W-RES-T1/200/200" },
        { "id": "R-W02", "name": "Schema Projector", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-RES-T2", "asset": "https://picsum.photos/seed/W-RES-T2/200/200" },
        { "id": "R-W03", "name": "Persona Archive Gun", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-RES-T3", "asset": "https://picsum.photos/seed/W-RES-T3/200/200" },
        { "id": "R-W04", "name": "The Encyclopedia Cannon", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-RES-T4", "asset": "https://picsum.photos/seed/W-RES-T4/200/200" },

        // --- ORACLE WEAPONS ---
        { "id": "O-W00", "name": "Pattern Seeker", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "W-ORA-T0", "asset": "https://picsum.photos/seed/W-ORA-T0/200/200" },
        { "id": "O-W01", "name": "Example Pointer", "rarity": "Uncommon", "unlock_condition": { "type": "level_pass", "value": "S01-T10" }, "xp_cost": 500, "asset_id": "W-ORA-T1", "asset": "https://picsum.photos/seed/W-ORA-T1/200/200" },
        { "id": "O-W02", "name": "Context Stabilizer", "rarity": "Rare", "unlock_condition": { "type": "level_pass", "value": "S02-T10" }, "xp_cost": 1200, "asset_id": "W-ORA-T2", "asset": "https://picsum.photos/seed/W-ORA-T2/200/200" },
        { "id": "O-W03", "name": "Holographic Template Emitter", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 3000, "asset_id": "W-ORA-T3", "asset": "https://picsum.photos/seed/W-ORA-T3/200/200" },
        { "id": "O-W04", "name": "The Uncorrupted Database Scepter", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 7500, "asset_id": "W-ORA-T4", "asset": "https://picsum.photos/seed/W-ORA-T4/200/200" }
    ],
    "POWER": [
        // T0 - Common
        { "id": "P001", "name": "Precision Eyepiece", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset": "https://picsum.photos/seed/P001/200/200" },
        // T1 - Uncommon
        { "id": "P002", "name": "Unambiguity Filter", "rarity": "Uncommon", "unlock_condition": { "type": "nexus_complete", "value": "S01-Q50" }, "xp_cost": 1000, "asset": "https://picsum.photos/seed/P002/200/200" },
        // T2 - Rare
        { "id": "P003", "name": "Logic Grid Goggles", "rarity": "Rare", "unlock_condition": { "type": "nexus_complete", "value": "S02-Q50" }, "xp_cost": 2500, "asset": "https://picsum.photos/seed/P003/200/200" },
        // T3 - Epic
        { "id": "P004", "name": "Persona-Parsing Headset", "rarity": "Epic", "unlock_condition": { "type": "nexus_complete", "value": "S03-Q50" }, "xp_cost": 5000, "asset": "https://picsum.photos/seed/P004/200/200" },
        // T4 - Legendary
        { "id": "P005", "name": "Foundational Principle Core", "rarity": "Legendary", "unlock_condition": { "type": "nexus_complete", "value": "S04-Q50" }, "xp_cost": 10000, "asset": "https://picsum.photos/seed/P005/200/200" }
    ],
    "GADGET": [
        { "id": "A-GAD0", "name": "Precision Eyepiece", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-ANAL-T0", "asset": "https://picsum.photos/seed/GAD-ANAL-T0/200/200" },
        { "id": "C-GAD0", "name": "Neon-Blue Pauldrons", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-ARCH-T0", "asset": "https://picsum.photos/seed/GAD-ARCH-T0/200/200" },
        { "id": "B-GAD0", "name": "Echoing Microphone", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-BARD-T0", "asset": "https://picsum.photos/seed/GAD-BARD-T0/200/200" },
        { "id": "S-GAD0", "name": "Syntax Gloves", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-SCRIP-T0", "asset": "https://picsum.photos/seed/GAD-SCRIP-T0/200/200" },
        { "id": "V-GAD0", "name": "Pass/Fail Sentinel", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-VAL-T0", "asset": "https://picsum.photos/seed/GAD-VAL-T0/200/200" },
        { "id": "W-GAD0", "name": "Digital Counter Watch", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-WHISP-T0", "asset": "https://picsum.photos/seed/GAD-WHISP-T0/200/200" },
        { "id": "R-GAD0", "name": "Blinking Antenna Backpack", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-RES-T0", "asset": "https://picsum.photos/seed/GAD-RES-T0/200/200" },
        { "id": "O-GAD0", "name": "Holographic Data Points", "rarity": "Common", "unlock_condition": { "type": "default" }, "xp_cost": 0, "asset_id": "GAD-ORA-T0", "asset": "https://picsum.photos/seed/GAD-ORA-T0/200/200" }
    ],
    "CHARACTERS": [
        {
            "id": "CHAR_08",
            "name": "The Oracle",
            "specialty": "Few-Shot Prompting", 
            "rank": 8,
            "asset": "https://picsum.photos/seed/CHAR_08/300/400",
            "description": "Finds the ultimate pattern. High Context: +25% XP on Few-Shot levels.",
            "visual_description": "Hooded cloak, visor with 3 floating holographic data points.",
            "ability_id": "ORACLE_HIGH_CONTEXT",
            "starting_xp_bonus": 50,
            "origin": "The Oracle was once a digital archivist whose reality was flooded with a constant stream of noisy, unstructured data. To survive the deluge, they trained themselves to find and extract the single most efficient pattern or example within any chaos. Their entrance to the Nexus was a search for the ultimate, uncorrupted database template.",
            "motivation": "To achieve Predictive Clarity—the ability to know the AI's output with 100% certainty based on minimal input examples."
        },
        {
            "id": "CHAR_07",
            "name": "The Architect",
            "specialty": "Completeness & Structure", 
            "rank": 7,
            "asset": "https://picsum.photos/seed/CHAR_07/300/400",
            "description": "Excels at constraints. Gains 1 free hint on any level with 5+ constraints.",
            "visual_description": "Thick Pauldrons, neon-blue ruler graphic.",
            "ability_id": "ARCHITECT_FREE_HINT",
            "starting_xp_bonus": 40,
            "origin": "The Architect was the lead developer of a massive virtual city whose construction failed catastrophically due to one missing semicolon in the core constraint file. Haunted by the failure caused by incomplete specification, they entered the Nexus to build a perfect, fail-safe prompt structure that would never leave room for error.",
            "motivation": "To find the Ultimate Constraint Set—the perfect framework that guarantees error-free execution every time."
        },
        {
            "id": "CHAR_06",
            "name": "The Scripter",
            "specialty": "Code Specifications", 
            "rank": 6,
            "asset": "https://picsum.photos/seed/CHAR_06/300/400",
            "description": "Syntax Shield. Automatically passes Clarity metric (100 pts) if the code language is specified correctly.",
            "visual_description": "Focused and direct. Wears light, flexible armor with integrated digital gloves. A stream of glowing green characters (like scrolling code) runs vertically down the front of their tunic. Their primary asset is a subtle data cable coiled around their waist.",
            "ability_id": "SCRIPTER_SYNTAX_SHIELD",
            "starting_xp_bonus": 30,
            "origin": "A veteran of countless \"Language Wars\" (Python vs. JavaScript vs. Rust), The Scripter watched projects collapse because developers failed to specify the correct version number or library. They view the Nexus as a testing ground to enforce absolute technical discipline, ensuring every instruction is language- and version-specific.",
            "motivation": "To enforce Syntax Discipline—to eliminate technical ambiguity and ensure every AI output is compliant with the highest coding standards."
        },
        {
            "id": "CHAR_05",
            "name": "The Validator",
            "specialty": "Error Handling", 
            "rank": 5,
            "asset": "https://picsum.photos/seed/CHAR_05/300/400",
            "description": "Robustness Bonus. Earns +5% total score on any level containing the 'try-except block' constraint.",
            "visual_description": "Looks like a digital guard or frontline defender. Wears heavy boots and reinforced shin guards. Their visor emits a red/yellow warning pulse when inactive. Their primary defense is a large, glowing check-mark / X-mark symbol on the back plate, representing pass/fail error checking.",
            "ability_id": "VALIDATOR_ROBUST_BONUS",
            "starting_xp_bonus": 20,
            "origin": "The Validator's original task was running QA (Quality Assurance) on unstable, early-generation AI systems. They learned quickly that if you don't prompt for failure, failure will find you. Their protective gear and defensive mindset stem from repeatedly surviving system crashes, always demanding a try-except block for survival.",
            "motivation": "To achieve Total Robustness—building prompts so thorough that no unexpected input or error can cause the AI system to crash or malfunction."
        },
        {
            "id": "CHAR_04",
            "name": "The Analyst",
            "specialty": "Precision & Clarity", 
            "rank": 4,
            "asset": "https://picsum.photos/seed/CHAR_04/300/400",
            "description": "Clarity Focus. Gains +10 points to the Clarity metric when the score is already above 90.",
            "visual_description": "Sharp and minimalist. Their base tunic is clean white with neon teal outlines. They wear single-lens, magnifying eyepiece glasses that glow faintly, emphasizing their focus on exactness and eliminating ambiguity.",
            "ability_id": "ANALYST_CLARITY_FOCUS",
            "starting_xp_bonus": 10,
            "origin": "The Analyst was a data scientist whose career was nearly ruined by a single, ambiguous input variable. They believe the greatest threat to data integrity is imprecision. They entered the Nexus to refine their ability to define terms and requests with surgical clarity, leaving zero ambiguity in the AI's interpretation.",
            "motivation": "To attain Surgical Definition—the ability to define a task so clearly that only one correct output is possible."
        },
        {
            "id": "CHAR_03",
            "name": "The Bard",
            "specialty": "Persona & Tone", 
            "rank": 3,
            "asset": "https://picsum.photos/seed/CHAR_03/300/400",
            "description": "Role Immersion. All 'Act as...' prompts automatically meet the Role Defined Clarity check.",
            "visual_description": "Expressive and artistic. Wears a flowing scarf over the base armor. Their appearance is slightly less rigid than the others. They have a small, antique holographic lyre or lute floating near one hand, symbolizing their mastery over narrative and tone.",
            "ability_id": "BARD_ROLE_IMMERSION",
            "starting_xp_bonus": 5,
            "origin": "Once a content creator, The Bard realized that the tone and role of a prompt had more influence on the final output's impact than the content itself. They treat prompting as an act of acting, donning different \"roles\" (personas) to elicit the desired style. They seek to master the emotional resonance of the Nexus.",
            "motivation": "To master Emotive Control—using identity and style to control the AI's output tone and making the results persuasive and compelling."
        },
        {
            "id": "CHAR_02",
            "name": "The Whisperer",
            "specialty": "Efficiency", 
            "rank": 2,
            "asset": "https://picsum.photos/seed/CHAR_02/300/400",
            "description": "Word Saver. Maximum word count limit for Efficiency is increased by 5 words on all Training Ground levels.",
            "visual_description": "Subtle and economical. Wears an almost invisible translucent vest over the tunic. Their most defining feature is a small, digital counter embedded on their wrist that always displays the number 5, emphasizing resource management and conciseness.",
            "ability_id": "WHISPERER_WORD_SAVER",
            "starting_xp_bonus": 0,
            "origin": "The Whisperer began their digital life working under strict constraints of character limits (like early social media). They value every single word, viewing verbose prompts as a waste of compute cycles and energy. Their mission in the Nexus is to prove that the most elegant and efficient prompt is always the one that uses the fewest tokens.",
            "motivation": "To achieve Algorithmic Elegance—to maximize output quality while minimizing the prompt's footprint."
        },
        {
            "id": "CHAR_01",
            "name": "The Researcher",
            "specialty": "Context Gathering", 
            "rank": 1,
            "asset": "https://picsum.photos/seed/CHAR_01/300/400",
            "description": "Low-Level Scavenger. Gains 10% extra Data Fragments from all Training Ground levels.",
            "visual_description": "Practical and resourceful. Wears utility belt pouches designed to hold small data fragments. Their backpack has a dim, blinking antenna that suggests they are constantly scanning and collecting information from the environment.",
            "ability_id": "RESEARCHER_FRAG_BONUS",
            "starting_xp_bonus": 0,
            "origin": "The Researcher is a scavenger, motivated by the thrill of discovering and incorporating necessary background information. They realize that no AI prompt is an island; success depends on the quality of the data fed to it. They roam the digital margins, constantly seeking forgotten files and context fragments to support their requests.",
            "motivation": "To find Total Information Access—ensuring every prompt is supported by the highest quality, most comprehensive dataset available, knowing that the foundation is everything."
        }
    ]
  },

  LEVEL_PROGRESSION_TABLE: [
    { "level": 1, "rank_title": "Initiate Prompt", "xp_needed": 0 },
    { "level": 5, "rank_title": "Efficiency Expert", "xp_needed": 1800 },
    { "level": 10, "rank_title": "Prompt Architect", "xp_needed": 6500 }
  ],

  SCORING_CONSTANTS: {
    "CLARITY_WEIGHTS": { "role_defined": 40, "task_clear": 30, "output_defined": 30 },
    "CLARITY_KEYWORDS": {
      "role_defined": ["act as", "you are a"],
      "task_clear": ["write", "generate", "create"]
    },
    "MAX_WORD_COUNT": 60,
    "NEXUS_PASS_THRESHOLD": 280,
    "MAX_LIVES_CAP": 9
  },

  ABILITY_MODIFIERS: {
    "function_name": "apply_character_ability_modifiers",
    "parameters": ["character_id", "current_scores", "user_prompt", "level_constraints"],
    "logic_guide": [
        {
            "ability_id": "SCRIPTER_SYNTAX_SHIELD",
            "condition": "if 'code' in level_constraints and any(lang in user_prompt for lang in ['Python', 'JS', 'JavaScript']):",
            "action": "current_scores['Clarity']['score'] = 100"
        },
        {
            "ability_id": "VALIDATOR_ROBUST_BONUS",
            "condition": "if 'try-except block' in level_constraints:",
            "action": "current_scores['Total_Score']['score'] *= 1.05"
        },
        {
            "ability_id": "ANALYST_CLARITY_FOCUS",
            "condition": "if current_scores['Clarity']['score'] >= 90:",
            "action": "current_scores['Clarity']['score'] = min(100, current_scores['Clarity']['score'] + 10)"
        }
    ]
  }
};
