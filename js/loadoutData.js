const loadoutData = {
    items: {
        primary_weapons: [
            {
                id: "AR-23L",
                name: "AR-23 Liberator Light",
                type: "primary_weapon",
                icon: "assets/icons/AR-23_Liberator_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "standard", "terminids"],
                compatibilityRules: {
                    exclusiveWith: ["support_pack"]
                },
                source: "Superstore"
            },
            {
                id: "AR-23P",
                name: "AR-23P Liberator Penetrator Medium",
                type: "primary_weapon",
                icon: "assets/icons/AR-23P_Liberator_Penetrator_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "penetrator"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "AR-23C",
                name: "AR-23C Liberator Concussive Light",
                type: "primary_weapon",
                icon: "assets/icons/AR-23C_Liberator_Concussive_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "concussive"],
                compatibilityRules: {},
                source: "Steeled Veterans"
            },
            {
                id: "StA-52",
                name: "StA-52 Assault Rifle Light",
                type: "primary_weapon",
                icon: "assets/icons/StA-52_Assault_Rifle_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "assault", "terminids"],
                compatibilityRules: {}
            },
            {
                id: "AR-23A",
                name: "AR-23A Liberator Carbine Light",
                type: "primary_weapon",
                icon: "assets/icons/AR-23A_Liberator_Carbine_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "carbine", "terminids"],
                compatibilityRules: {},
                source: "Viper Commandos"
            },
            {
                id: "AR-61",
                name: "AR-61 Tenderizer Light",
                type: "primary_weapon",
                icon: "assets/icons/AR-61_Tenderizer_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "tenderizer", "terminids"],
                compatibilityRules: {},
                source: "Polar Patriots"
            },
            {
                id: "BR-14",
                name: "BR-14 Adjudicator Medium",
                type: "primary_weapon",
                icon: "assets/icons/BR-14_Adjudicator_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "adjudicator"],
                compatibilityRules: {},
                source: "Democratic Detonation"
            },
            {
                id: "R-2124",
                name: "R-2124 Constitution Medium",
                type: "primary_weapon",
                icon: "assets/icons/R-2124_Constitution_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "constitution"],
                compatibilityRules: {}
            },
            {
                id: "R-6",
                name: "R-6 Deadeye Medium",
                type: "primary_weapon",
                icon: "assets/icons/R-6_Deadeye_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "high",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "deadeye"],
                compatibilityRules: {},
                source: "Borderline Justice"
            },
            {
                id: "R-63",
                name: "R-63 Diligence Light",
                type: "primary_weapon",
                icon: "assets/icons/R-63_Diligence_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "diligence", "automatons"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "R-63CS",
                name: "R-63CS Diligence Counter Sniper Medium",
                type: "primary_weapon",
                icon: "assets/icons/R-63CS_Diligence_Counter_Sniper_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "very high",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "counter-sniper"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "PLAS-39",
                name: "PLAS-39 Accelerator Rifle Medium",
                type: "primary_weapon",
                icon: "assets/icons/PLAS-39_Accelerator_Rifle_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "accelerator"],
                compatibilityRules: {}
            },
            {
                id: "MP-98",
                name: "MP-98 Knight Light",
                type: "primary_weapon",
                icon: "assets/icons/MP-98_Knight_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "knight"],
                compatibilityRules: {}
            },
            {
                id: "StA-11",
                name: "StA-11 SMG Light",
                type: "primary_weapon",
                icon: "assets/icons/StA-11_SMG_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "smg", "terminids", "illuminates"],
                compatibilityRules: {}
            },
            {
                id: "SMG-32",
                name: "SMG-32 Reprimand Medium",
                type: "primary_weapon",
                icon: "assets/icons/SMG-32_Reprimand_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "reprimand"],
                compatibilityRules: {},
                source: "Truth Enforcers"
            },
            {
                id: "SMG-37",
                name: "SMG-37 Defender Light",
                type: "primary_weapon",
                icon: "assets/icons/SMG-37_Defender_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "defender"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "SMG-72",
                name: "SMG-72 Pummeler Light",
                type: "primary_weapon",
                icon: "assets/icons/SMG-72_Pummeler_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "pummeler"],
                compatibilityRules: {},
                source: "Polar Patriots"
            },
            {
                id: "SG-8",
                name: "SG-8 Punisher Light",
                type: "primary_weapon",
                icon: "assets/icons/SG-8_Punisher_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "punisher", "automatons", "illuminates"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "SG-8S",
                name: "SG-8S Slugger Medium",
                type: "primary_weapon",
                icon: "assets/icons/SG-8S_Slugger_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "slugger"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "SG-20",
                name: "SG-20 Halt Medium",
                type: "primary_weapon",
                icon: "assets/icons/SG-20_Halt_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "halt"],
                compatibilityRules: {},
                source: "Truth Enforcers"
            },
            {
                id: "SG-451",
                name: "SG-451 Cookout Light",
                type: "primary_weapon",
                icon: "assets/icons/SG-451_Cookout_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "cookout", "terminids", "illuminates"],
                compatibilityRules: {},
                source: "Freedom's Flame"
            },
            {
                id: "SG-225",
                name: "SG-225 Breaker Light",
                type: "primary_weapon",
                icon: "assets/icons/SG-225_Breaker_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "breaker"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "SG-225SP",
                name: "SG-225SP Breaker Spray & Pray Light",
                type: "primary_weapon",
                icon: "assets/icons/SG-225SP_Breaker_Spray_Pray_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "breaker", "spray-pray"],
                compatibilityRules: {}
            },
            {
                id: "SG-225IE",
                name: "SG-225IE Breaker Incendiary Light",
                type: "primary_weapon",
                icon: "assets/icons/SG-225IE_Breaker_Incendiary_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "breaker", "incendiary", "terminids", "illuminates"],
                compatibilityRules: {},
                source: "Steeled Veterans"
            },
            {
                id: "CB-9",
                name: "CB-9 Exploding Crossbow Medium",
                type: "primary_weapon",
                icon: "assets/icons/CB-9_Exploding_Crossbow_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "exploding", "crossbow", "automatons", "illuminates"],
                compatibilityRules: {},
                source: "Democratic Detonation"
            },
            {
                id: "R-36",
                name: "R-36 Eruptor Heavy",
                type: "primary_weapon",
                icon: "assets/icons/R-36_Eruptor_Primary_Weaponry.png",
                stats: {
                    damage: "very high",
                    accuracy: "low",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "eruptor"],
                compatibilityRules: {},
                source: "Democratic Detonation"
            },
            {
                id: "SG-8P",
                name: "SG-8P Punisher Plasma Medium",
                type: "primary_weapon",
                icon: "assets/icons/SG-8P_Punisher_Plasma_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "punisher", "plasma"],
                compatibilityRules: {},
                source: "Cutting Edge"
            },
            {
                id: "ARC-12",
                name: "ARC-12 Blitzer Medium",
                type: "primary_weapon",
                icon: "assets/icons/ARC-12_Blitzer_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "blitzer", "terminids", "illuminates"],
                compatibilityRules: {},
                source: "Cutting Edge"
            },
            {
                id: "LAS-5",
                name: "LAS-5 Scythe Light",
                type: "primary_weapon",
                icon: "assets/icons/LAS-5_Scythe_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "scythe"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "LAS-16",
                name: "LAS-16 Sickle Light",
                type: "primary_weapon",
                icon: "assets/icons/LAS-16_Sickle_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "sickle", "automatons"],
                compatibilityRules: {},
                source: "Cutting Edge"
            },
            {
                id: "LAS-17",
                name: "LAS-17 Double-Edge Sickle Heavy",
                type: "primary_weapon",
                icon: "assets/icons/LAS-17_Double-Edge_Sickle_Primary_Weaponry.png",
                stats: {
                    damage: "very high",
                    accuracy: "medium",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "sickle", "automatons", "illuminates"],
                compatibilityRules: {},
                source: "Servants of Freedom",
            },
            {
                id: "PLAS-1",
                name: "PLAS-1 Scorcher Light",
                type: "primary_weapon",
                icon: "assets/icons/PLAS-1_Scorcher_Primary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "scorcher", "automatons"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "PLAS-101",
                name: "PLAS-101 Purifier Medium",
                type: "primary_weapon",
                icon: "assets/icons/PLAS-101_Purifier_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "purifier", "automatons", "illuminates"],
                compatibilityRules: {},
                source: "Polar Patriots"
            },
            {
                id: "FLAM-66",
                name: "FLAM-66 Torcher Heavy",
                type: "primary_weapon",
                icon: "assets/icons/FLAM-66_Torcher_Primary_Weaponry.png",
                stats: {
                    damage: "very high",
                    accuracy: "low",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "torcher", "flame", "terminids"],
                compatibilityRules: {},
                source: "Freedom's Flame"
            },
            {
                id: "JAR-5",
                name: "JAR-5 Dominator Medium",
                type: "primary_weapon",
                icon: "assets/icons/JAR-5_Dominator_Primary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "dominator", "terminids"],
                compatibilityRules: {},
                source: "Steeled Veterans"
            }
        ],
        secondary_weapons: [
            {
                id: "P-2",
                name: "P-2 Peacemaker",
                type: "secondary_weapon",
                icon: "assets/icons/P-2_Peacemaker_Secondary_Weaponry.png",
                stats: {
                    damage: "light",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "peacemaker"],
                compatibilityRules: {}
            },
            {
                id: "P-19",
                name: "P-19 Redeemer",
                type: "secondary_weapon",
                icon: "assets/icons/P-19_Redeemer_Secondary_Weaponry.png",
                stats: {
                    damage: "light",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "redeemer"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "P-113",
                name: "P-113 Verdict",
                type: "secondary_weapon",
                icon: "assets/icons/P-113_Verdict_Secondary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "verdict"],
                compatibilityRules: {},
                source: "Polar Patriots"
            },
            {
                id: "P-4",
                name: "P-4 Senator",
                type: "secondary_weapon",
                icon: "assets/icons/P-4_Senator_Secondary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "senator"],
                compatibilityRules: {},
                source: "Steeled Veterans"
            },
            {
                id: "P-11",
                name: "P-11 Stim Pistol",
                type: "secondary_weapon",
                icon: "assets/icons/P-11_Stim_Pistol_Secondary_Weaponry.png",
                stats: {
                    damage: "light",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "stim", "pistol"],
                compatibilityRules: {},
                source: "Chemical Agents"
            },
            {
                id: "SG-22",
                name: "SG-22 Bushwhacker Light",
                type: "secondary_weapon",
                icon: "assets/icons/SG-22_Bushwhacker_Secondary_Weaponry.png",
                stats: {
                    damage: "light",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "bushwhacker"],
                compatibilityRules: {},
                source: "Viper Commandos"
            },
            {
                id: "P-72",
                name: "P-72 Crisper Heavy",
                type: "secondary_weapon",
                icon: "assets/icons/P-72_Crisper_Secondary_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "medium",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "crisper"],
                compatibilityRules: {},
                source: "Freedom's Flame"
            },
            {
                id: "GP-31",
                name: "GP-31 Grenade Pistol Medium",
                type: "secondary_weapon",
                icon: "assets/icons/GP-31_Grenade_Pistol_Secondary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "grenade_pistol"],
                compatibilityRules: {},
                source: "Democratic Detonation"
            },
            {
                id: "LAS-7",
                name: "LAS-7 Dagger Light",
                type: "secondary_weapon",
                icon: "assets/icons/LAS-7_Dagger_Secondary_Weaponry.png",
                stats: {
                    damage: "light",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "dagger"],
                compatibilityRules: {},
                source: "Cutting Edge"
            },
            {
                id: "GP-31_UT",
                name: "GP-31 Ultimatum Anti-Tank IV",
                type: "secondary_weapon",
                icon: "assets/icons/GP-31_Ultimatum_Secondary_Weaponry.png",
                stats: {
                    damage: "very high",
                    accuracy: "medium",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["anti-tank", "ultimatum"],
                compatibilityRules: {},
                source: "Servants of Freedom"
            },
            {
                id: "PLAS-15",
                name: "PLAS-15 Loyalist Medium",
                type: "secondary_weapon",
                icon: "assets/icons/PLAS-15_Loyalist_Secondary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "loyalist"],
                compatibilityRules: {},
                source: "Truth Enforcers"
            },
            {
                id: "CQC-19",
                name: "CQC-19 Stun Lance Medium",
                type: "secondary_weapon",
                icon: "assets/icons/CQC-19_Stun_Lance_Secondary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "stun_lance"],
                compatibilityRules: {},
                source: "Urban Legends"
            },
            {
                id: "CQC-30",
                name: "CQC-30 Stun Baton Medium",
                type: "secondary_weapon",
                icon: "assets/icons/CQC-30_Stun_Baton_Secondary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "stun_baton"],
                compatibilityRules: {},
                source: "Superstore"
            },
            {
                id: "CQC-5",
                name: "CQC-5 Combat Hatchet Medium",
                type: "secondary_weapon",
                icon: "assets/icons/CQC-5_Combat_Hatchet_Secondary_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "medium",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "combat_hatchet"],
                compatibilityRules: {},
                source: "Superstore"
            },
            {
                id: "LAS-58",
                name: "Las-58 Talon",
                type: "secondary_weapon",
                icon: "assets/icons/Borderline Justice/LAS-58 Talon.png",
                stats: {
                    damage: "light",
                    accuracy: "high",
                    weight: "light",
                    cost: 0
                },
                tags: ["light", "peacemaker"],
                compatibilityRules: {},
                source: "Borderline Justice"
            },
        ],
        armor: [
            // --- Базовая броня ---
            {
                id: "SC-37",
                name: "SC-37 Legionnaire",
                type: "armor",
                icon: "assets/icons/Armor/SC-37_Legionnaire.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Servo-Assisted",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["servo-assisted", "light"],
                source: "Superstore"
            },
            {
                id: "SC-34",
                name: "SC-34 Infiltrator",
                type: "armor",
                icon: "assets/icons/Armor/SC-34_Infiltrator.png",
                stats: { defense: 70, agility: 530, durability: 115 },
                special: "Scout",
                cost: { value: 3, currency: "Medals" },
                tags: ["scout", "light"],
                source: "Helldivers Mobilize"
            },
            {
                id: "SC-30",
                name: "SC-30 Trailblazer Scout",
                type: "armor",
                icon: "assets/icons/Armor/SC-30_Trailblazer_Scout.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Scout",
                cost: { value: 50, currency: "Medals" },
                tags: ["scout", "light"],
                source: "Helldivers Mobilize"
            },
            {
                id: "CE-74",
                name: "CE-74 Breaker",
                type: "armor",
                icon: "assets/icons/Armor/CE-74_Breaker.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Engineering Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["engineering", "light"],
                source: "Superstore"
            },
            {
                id: "FS-38",
                name: "FS-38 Eradicator",
                type: "armor",
                icon: "assets/icons/Armor/FS-38_Eradicator.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Fortified",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["fortified", "light"],
                source: "Superstore"
            },
            {
                id: "B-08",
                name: "B-08 Light Gunner",
                type: "armor",
                icon: "assets/icons/Armor/B-08_Light_Gunner.png",
                stats: { defense: 100, agility: 550, durability: 125 },
                special: "Extra Padding",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["extra-padding", "light"],
                source: "Superstore"
            },
            {
                id: "CM-21",
                name: "CM-21 Trench Paramedic",
                type: "armor",
                icon: "assets/icons/Armor/CM-21_Trench_Paramedic.png",
                stats: { defense: 64, agility: 536, durability: 118 },
                special: "Med-Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["med-kit", "light"],
                source: "Superstore"
            },
            {
                id: "CE-67",
                name: "CE-67 Titan",
                type: "armor",
                icon: "assets/icons/Armor/CE-67_Titan.png",
                stats: { defense: 79, agility: 521, durability: 111 },
                special: "Engineering Kit",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["engineering", "light"],
                source: "Superstore"
            },
            {
                id: "EX-00",
                name: "EX-00 Prototype X",
                type: "armor",
                icon: "assets/icons/Armor/EX-00_Prototype_X.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Electrical Conduit",
                cost: { value: 64, currency: "Medals" },
                tags: ["electrical-conduit", "light"],
                source: "Cutting Edge"
            },
            {
                id: "CE-07",
                name: "CE-07 Demolition Specialist",
                type: "armor",
                icon: "assets/icons/Armor/CE-07_Demolition_Specialist.png",
                stats: { defense: 64, agility: 536, durability: 118 },
                special: "Engineering Kit",
                cost: { value: 45, currency: "Medals" },
                tags: ["engineering", "light"],
                source: "Democratic Detonation"
            },
            {
                id: "FS-37",
                name: "FS-37 Ravager",
                type: "armor",
                icon: "assets/icons/Armor/FS-37_Ravager.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Engineering Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["engineering", "light"],
                source: "Superstore"
            },
            {
                id: "CW-4",
                name: "CW-4 Arctic Ranger",
                type: "armor",
                icon: "assets/icons/Armor/CW-4_Arctic_Ranger.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Scout",
                cost: { value: 64, currency: "Medals" },
                tags: ["scout", "light"],
                source: "Polar Patriots"
            },
            {
                id: "PH-9",
                name: "PH-9 Predator",
                type: "armor",
                icon: "assets/icons/Armor/PH-9_Predator.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Peak Physique",
                cost: { value: 40, currency: "Medals" },
                tags: ["peak-physique", "light"],
                source: "Viper Commandos"
            },
            {
                id: "I-09",
                name: "I-09 Heatseeker",
                type: "armor",
                icon: "assets/icons/Armor/I-09_Heatseeker.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Inflammable",
                cost: { value: 18, currency: "Medals" },
                tags: ["flame", "light"],
                source: "Freedom's Flame"
            },
            {
                id: "AF-50",
                name: "AF-50 Noxious Ranger",
                type: "armor",
                icon: "assets/icons/Armor/AF-50_Noxious_Ranger.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Advanced Filtration",
                cost: { value: 40, currency: "Medals" },
                tags: ["gas", "light"],
                source: "Chemical Agents"
            },
            {
                id: "UF-16",
                name: "UF-16 Inspector",
                type: "armor",
                icon: "assets/icons/Armor/UF-16_Inspector.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Unflinching",
                cost: { value: 65, currency: "Medals" },
                tags: ["unflinching", "light"],
                source: "Truth Enforcers"
            },
            {
                id: "SR-24",
                name: "SR-24 Street Scout",
                type: "armor",
                icon: "assets/icons/Armor/SR-24_Street_Scout.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Siege-Ready",
                cost: { value: 40, currency: "Medals" },
                tags: ["siege-ready", "light"],
                source: "Urban Legends"
            },
            {
                id: "AC-2",
                name: "AC-2 Obedient",
                type: "armor",
                icon: "assets/icons/Armor/AC-2_Obedient.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Acclimated",
                cost: { value: 0, currency: "" },
                tags: ["flame", "gas", "light"],
                source: "Helldivers x Killzone"
            },
            {
                id: "IE-57",
                name: "IE-57 Hell-Bent",
                type: "armor",
                icon: "assets/icons/Armor/IE-57_Hell-Bent.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Integrated Explosives",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["integrated-explosives", "light"],
                source: "Superstore"
            },
            {
                id: "GS-11",
                name: "GS-11 Democracy's Deputy",
                type: "armor",
                icon: "assets/icons/Armor/GS-11_Democracy's_Deputy.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Gunslinger",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["gunslinger", "light"],
                source: "Superstore"
            },
            {
                id: "GS-17",
                name: "GS-17 Frontier Marshall",
                type: "armor",
                icon: "assets/icons/Armor/GS-17_Frontier_Marshall.png",
                stats: { defense: 50, agility: 550, durability: 125 },
                special: "Gunslinger",
                cost: { value: 55, currency: "Medals" },
                tags: ["gunslinger", "light"],
                source: "Borderline Justice"
            },
            // --- Средняя броня ---
            {
                id: "B-01",
                name: "B-01 Tactical",
                type: "armor",
                icon: "assets/icons/B-01_Tactical.png",
                stats: { defense: 150, agility: 500, durability: 100 },
                special: "Extra Padding",
                cost: { value: 0, currency: "" },
                tags: ["extra-padding", "medium"],
                source: "Starter Equipment"
            },
            {
                id: "TR-7",
                name: "TR-7 Ambassador of the Brand",
                type: "armor",
                icon: "assets/icons/Armor/TR-7_Ambassador.png",
                stats: { defense: 150, agility: 500, durability: 100 },
                special: "Extra Padding",
                cost: { value: 0, currency: "" },
                tags: ["extra-padding", "medium"],
                source: "Pre-Order Bonus"
            },
            {
                id: "TR-9",
                name: "TR-9 Cavalier of Democracy",
                type: "armor",
                icon: "assets/icons/Armor/TR-9_Cavalier.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Democracy Protects",
                cost: { value: 0, currency: "" },
                tags: ["democracy-protects", "medium"],
                source: "Pre-Order Bonus"
            },
            {
                id: "DP-53",
                name: "DP-53 Savior of the Free",
                type: "armor",
                icon: "assets/icons/Armor/DP-53_Savior.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Democracy Protects",
                cost: { value: 20, currency: "USD" },
                tags: ["democracy-protects", "medium"],
                source: "Super Citizen Edition"
            },
            {
                id: "TR-117",
                name: "TR-117 Alpha Commander",
                type: "armor",
                icon: "assets/icons/Armor/TR-117_Alpha_Commander.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Med-Kit",
                cost: { value: 0, currency: "" },
                tags: ["med-kit", "medium"],
                source: "Downloadable Content"
            },
            {
                id: "SC-15",
                name: "SC-15 Drone Master",
                type: "armor",
                icon: "assets/icons/Armor/SC-15_Drone_Master.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Engineering Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["engineering", "medium"],
                source: "Superstore"
            },
            {
                id: "CE-35",
                name: "CE-35 Trench Engineer",
                type: "armor",
                icon: "assets/icons/Armor/CE-35_Trench_Engineer.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Engineering Kit",
                cost: { value: 10, currency: "Medals" },
                tags: ["engineering", "medium"],
                source: "Helldivers Mobilize"
            },
            {
                id: "CM-09",
                name: "CM-09 Bonesnapper",
                type: "armor",
                icon: "assets/icons/Armor/CM-09_Bonesnapper.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Med-Kit",
                cost: { value: 15, currency: "Medals" },
                tags: ["med-kit", "medium"],
                source: "Helldivers Mobilize"
            },
            {
                id: "DP-40",
                name: "DP-40 Hero of the Federation",
                type: "armor",
                icon: "assets/icons/Armor/DP-40_Hero.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Democracy Protects",
                cost: { value: 25, currency: "Medals" },
                tags: ["democracy-protects", "medium"],
                source: "Helldivers Mobilize"
            },
            {
                id: "SA-04",
                name: "SA-04 Combat Technician",
                type: "armor",
                icon: "assets/icons/Armor/SA-04_Combat_Technician.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Scout",
                cost: { value: 60, currency: "Medals" },
                tags: ["scout", "medium"],
                source: "Helldivers Mobilize"
            },
            {
                id: "CM-14",
                name: "CM-14 Physician",
                type: "armor",
                icon: "assets/icons/Armor/CM-14_Physician.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Med-Kit",
                cost: { value: 70, currency: "Medals" },
                tags: ["med-kit", "medium"],
                source: "Helldivers Mobilize"
            },
            {
                id: "DP-11",
                name: "DP-11 Champion of the People",
                type: "armor",
                icon: "assets/icons/Armor/DP-11_Champion.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Democracy Protects",
                cost: { value: 100, currency: "Medals" },
                tags: ["democracy-protects", "medium"],
                source: "Helldivers Mobilize"
            },
            {
                id: "SA-25",
                name: "SA-25 Steel Trooper",
                type: "armor",
                icon: "assets/icons/Armor/SA-25_Steel_Trooper.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Servo-Assisted",
                cost: { value: 18, currency: "Medals" },
                tags: ["servo-assisted", "medium"],
                source: "Steeled Veterans"
            },
            {
                id: "SA-12",
                name: "SA-12 Servo Assisted",
                type: "armor",
                icon: "assets/icons/Armor/SA-12_Servo_Assisted.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Servo-Assisted",
                cost: { value: 45, currency: "Medals" },
                tags: ["servo-assisted", "medium"],
                source: "Steeled Veterans"
            },
            {
                id: "B-24",
                name: "B-24 Enforcer",
                type: "armor",
                icon: "assets/icons/Armor/B-24_Enforcer.png",
                stats: { defense: 129, agility: 471, durability: 71 },
                special: "Fortified",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["fortified", "medium"],
                source: "Superstore"
            },
            {
                id: "CE-81",
                name: "CE-81 Juggernaut",
                type: "armor",
                icon: "assets/icons/Armor/CE-81_Juggernaut.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Engineering Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["engineering", "medium"],
                source: "Superstore"
            },
            {
                id: "FS-34",
                name: "FS-34 Exterminator",
                type: "armor",
                icon: "assets/icons/Armor/FS-34_Exterminator.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Fortified",
                cost: { value: 400, currency: "Super Credits" },
                tags: ["fortified", "medium"],
                source: "Superstore"
            },
            {
                id: "EX-03",
                name: "EX-03 Prototype 3",
                type: "armor",
                icon: "assets/icons/Armor/EX-03_Prototype_3.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Electrical Conduit",
                cost: { value: 18, currency: "Medals" },
                tags: ["electrical-conduit", "medium"],
                source: "Cutting Edge"
            },
            {
                id: "EX-16",
                name: "EX-16 Prototype 16",
                type: "armor",
                icon: "assets/icons/Armor/EX-16_Prototype_16.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Electrical Conduit",
                cost: { value: 45, currency: "Medals" },
                tags: ["electrical-conduit", "medium"],
                source: "Cutting Edge"
            },
            {
                id: "CE-27",
                name: "CE-27 Ground Breaker",
                type: "armor",
                icon: "assets/icons/Armor/CE-27_Ground_Breaker.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Engineering Kit",
                cost: { value: 18, currency: "Medals" },
                tags: ["engineering", "medium"],
                source: "Democratic Detonation"
            },
            {
                id: "CM-10",
                name: "CM-10 Clinician",
                type: "armor",
                icon: "assets/icons/Armor/CM-10_Clinician.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Med-Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["med-kit", "medium"],
                source: "Superstore"
            },
            {
                id: "CW-9",
                name: "CW-9 White Wolf",
                type: "armor",
                icon: "assets/icons/Armor/CW-9_White_Wolf.png",
                stats: { defense: 150, agility: 500, durability: 100 },
                special: "Extra Padding",
                cost: { value: 300, currency: "Super Credits" },
                tags: ["extra-padding", "medium"],
                source: "Superstore"
            },
            {
                id: "PH-56",
                name: "PH-56 Jaguar",
                type: "armor",
                icon: "assets/icons/Armor/PH-56_Jaguar.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Peak Physique",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["peak-physique", "medium"],
                source: "Superstore"
            },
            {
                id: "TR-40",
                name: "TR-40 Gold Eagle",
                type: "armor",
                icon: "assets/icons/Armor/TR-40_Gold_Eagle.png",
                stats: { defense: 150, agility: 500, durability: 100 },
                special: "Extra Padding",
                cost: { value: 0, currency: "Free" },
                tags: ["extra-padding", "medium"],
                source: "Escalation of Freedom"
            },
            {
                id: "I-92",
                name: "I-92 Fire Fighter",
                type: "armor",
                icon: "assets/icons/Armor/I-92_Fire_Fighter.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Inflammable",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["flame", "medium"],
                source: "Superstore"
            },
            {
                id: "I-102",
                name: "I-102 Draconaught",
                type: "armor",
                icon: "assets/icons/Armor/I-102_Draconaught.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Inflammable",
                cost: { value: 45, currency: "Medals" },
                tags: ["flame", "medium"],
                source: "Freedom's Flame"
            },
            {
                id: "AF-91",
                name: "AF-91 Field Chemist",
                type: "armor",
                icon: "assets/icons/Armor/AF-91_Field_Chemist.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Advanced Filtration",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["gas", "medium"],
                source: "Superstore"
            },
            {
                id: "AF-02",
                name: "AF-02 Haz-Master",
                type: "armor",
                icon: "assets/icons/Armor/AF-02_Haz-Master.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Advanced Filtration",
                cost: { value: 45, currency: "Medals" },
                tags: ["gas", "medium"],
                source: "Chemical Agents"
            },
            {
                id: "DP-00",
                name: "DP-00 Tactical",
                type: "armor",
                icon: "assets/icons/Armor/DP-00_Tactical.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Democracy Protects",
                cost: { value: 0, currency: "" },
                tags: ["democracy-protects", "medium"],
                source: "Liberty Day"
            },
            {
                id: "UF-84",
                name: "UF-84 Doubt Killer",
                type: "armor",
                icon: "assets/icons/Armor/UF-84_Doubt_Killer.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Unflinching",
                cost: { value: 400, currency: "Super Credits" },
                tags: ["unflinching", "medium"],
                source: "Superstore"
            },
            {
                id: "UF-50",
                name: "UF-50 Bloodhound",
                type: "armor",
                icon: "assets/icons/Armor/UF-50_Bloodhound.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Unflinching",
                cost: { value: 45, currency: "Medals" },
                tags: ["unflinching", "medium"],
                source: "Truth Enforcers"
            },
            {
                id: "AC-1",
                name: "AC-1 Dutiful",
                type: "armor",
                icon: "assets/icons/Armor/AC-1_Dutiful.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Acclimated",
                cost: { value: 500, currency: "Super Credits" },
                tags: ["flame", "gas", "medium"],
                source: "Premium Superstore"
            },
            {
                id: "IE-3",
                name: "IE-3 Martyr",
                type: "armor",
                icon: "assets/icons/Armor/IE-3_Martyr.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Integrated Explosives",
                cost: { value: 45, currency: "Medals" },
                tags: ["integrated-explosives", "medium"],
                source: "Servants of Freedom"
            },
            {
                id: "IE-12",
                name: "IE-12 Righteous",
                type: "armor",
                icon: "assets/icons/Armor/IE-12_Righteous.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Integrated Explosives",
                cost: { value: 55, currency: "Medals" },
                tags: ["integrated-explosives", "medium"],
                source: "Servants of Freedom"
            },
            {
                id: "B-22",
                name: "B-22 Model Citizen",
                type: "armor",
                icon: "assets/icons/Armor/B-22_Model_Citizen.png",
                stats: { defense: 100, agility: 500, durability: 100 },
                special: "Democracy Protects",
                cost: { value: 0, currency: "" },
                tags: ["democracy-protects", "medium"],
                source: ""
            },
            {
                id: "GS-66",
                name: "GS-66 Lawmaker",
                type: "armor",
                icon: "assets/icons/Armor/GS-66_Lawmaker.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Gunslinger",
                cost: { value: 55, currency: "Medals" },
                tags: ["gunslinger", "medium"],
                source: "Helldivers Mobilize"
            },
            // --- Тяжёлая броня ---
            {
                id: "TR-62",
                name: "TR-62 Knight",
                type: "armor",
                icon: "assets/icons/Armor/TR-62_Knight.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Servo-Assisted",
                cost: { value: 0, currency: "" },
                tags: ["servo-assisted", "heavy"],
                source: "Pre-Order Bonus"
            },
            {
                id: "FS-05",
                name: "FS-05 Marksman",
                type: "armor",
                icon: "assets/icons/Armor/FS-05_Marksman.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Fortified",
                cost: { value: 6, currency: "Medals" },
                tags: ["fortified", "heavy"],
                source: "Helldivers Mobilize"
            },
            {
                id: "FS-23",
                name: "FS-23 Battle Master",
                type: "armor",
                icon: "assets/icons/Armor/FS-23_Battle_Master.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Fortified",
                cost: { value: 35, currency: "Medals" },
                tags: ["fortified", "heavy"],
                source: "Helldivers Mobilize"
            },
            {
                id: "SA-32",
                name: "SA-32 Dynamo",
                type: "armor",
                icon: "assets/icons/Armor/SA-32_Dynamo.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Servo-Assisted",
                cost: { value: 64, currency: "Medals" },
                tags: ["servo-assisted", "heavy"],
                source: "Steeled Veterans"
            },
            {
                id: "B-27",
                name: "B-27 Fortified Commando",
                type: "armor",
                icon: "assets/icons/Armor/B-27_Fortified_Commando.png",
                stats: { defense: 200, agility: 450, durability: 50 },
                special: "Extra Padding",
                cost: { value: 400, currency: "Super Credits" },
                tags: ["extra-padding", "heavy"],
                source: "Superstore"
            },
            {
                id: "FS-61",
                name: "FS-61 Dreadnought",
                type: "armor",
                icon: "assets/icons/Armor/FS-61_Dreadnought.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Servo-Assisted",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["servo-assisted", "heavy"],
                source: "Superstore"
            },
            {
                id: "FS-11",
                name: "FS-11 Executioner",
                type: "armor",
                icon: "assets/icons/Armor/FS-11_Executioner.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Fortified",
                cost: { value: 150, currency: "Super Credits" },
                tags: ["fortified", "heavy"],
                source: "Superstore"
            },
            {
                id: "CM-17",
                name: "CM-17 Butcher",
                type: "armor",
                icon: "assets/icons/Armor/CM-17_Butcher.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Med-Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["med-kit", "heavy"],
                source: "Superstore"
            },
            {
                id: "FS-55",
                name: "FS-55 Devastator",
                type: "armor",
                icon: "assets/icons/Armor/FS-55_Devastator.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Fortified",
                cost: { value: 64, currency: "Medals" },
                tags: ["fortified", "heavy"],
                source: "Democratic Detonation"
            },
            {
                id: "CW-36",
                name: "CW-36 Winter Warrior",
                type: "armor",
                icon: "assets/icons/Armor/CW-36_Winter_Warrior.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Servo-assisted",
                cost: { value: 18, currency: "Medals" },
                tags: ["servo-assisted", "heavy"],
                source: "Polar Patriots"
            },
            {
                id: "CW-22",
                name: "CW-22 Kodiak",
                type: "armor",
                icon: "assets/icons/Armor/CW-22_Kodiak.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Fortified",
                cost: { value: 45, currency: "Medals" },
                tags: ["fortified", "heavy"],
                source: "Polar Patriots"
            },
            {
                id: "CE-64",
                name: "CE-64 Grenadier",
                type: "armor",
                icon: "assets/icons/Armor/CE-64_Grenadier.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Engineering Kit",
                cost: { value: 300, currency: "Super Credits" },
                tags: ["engineering", "heavy"],
                source: "Superstore"
            },
            {
                id: "CE-101",
                name: "CE-101 Guerilla Gorilla",
                type: "armor",
                icon: "assets/icons/Armor/CE-101_Guerilla_Gorilla.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Engineering Kit",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["engineering", "heavy"],
                source: "Superstore"
            },
            {
                id: "PH-202",
                name: "PH-202 Twigsnapper",
                type: "armor",
                icon: "assets/icons/Armor/PH-202_Twigsnapper.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Peak Physique",
                cost: { value: 45, currency: "Medals" },
                tags: ["peak-physique", "heavy"],
                source: "Viper Commandos"
            },
            {
                id: "I-44",
                name: "I-44 Salamander",
                type: "armor",
                icon: "assets/icons/Armor/I-44_Salamander.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Inflammable",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["flame", "heavy"],
                source: "Superstore"
            },
            {
                id: "AF-52",
                name: "AF-52 Lockdown",
                type: "armor",
                icon: "assets/icons/Armor/AF-52_Lockdown.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Advanced Filtration",
                cost: { value: 400, currency: "Super Credits" },
                tags: ["gas", "heavy"],
                source: "Superstore"
            },
            {
                id: "SR-64",
                name: "SR-64 Cinderblock",
                type: "armor",
                icon: "assets/icons/Armor/SR-64_Cinderblock.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Siege-Ready",
                cost: { value: 250, currency: "Super Credits" },
                tags: ["siege-ready", "heavy"],
                source: "Superstore"
            },
            {
                id: "SR-18",
                name: "SR-18 Roadblock",
                type: "armor",
                icon: "assets/icons/Armor/SR-18_Roadblock.png",
                stats: { defense: 150, agility: 450, durability: 50 },
                special: "Siege-Ready",
                cost: { value: 45, currency: "Medals" },
                tags: ["siege-ready", "heavy"],
                source: "Urban Legends"
            }
        ],
        grenades: [
            {
                id: "G-6",
                name: "G-6 Frag",
                type: "grenade",
                icon: "assets/icons/G-6_Frag_Throwable_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "frag"],
                compatibilityRules: {},
                source: "Helldivers Mobilize"
            },
            {
                id: "G-12",
                name: "G-12 High Explosive",
                type: "grenade",
                icon: "assets/icons/G-12_High_Explosive_Throwable_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "n/a",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "high_explosive"],
                compatibilityRules: {}
            },
            {
                id: "G-10",
                name: "G-10 Incendiary",
                type: "grenade",
                icon: "assets/icons/G-10_Incendiary_Throwable_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "incendiary"],
                compatibilityRules: {},
                source: "Steeled Veterans"
            },
            {
                id: "G-16",
                name: "G-16 Impact",
                type: "grenade",
                icon: "assets/icons/G-16_Impact_Throwable_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "n/a",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "impact"],
                compatibilityRules: {}
            },
            {
                id: "G-13",
                name: "G-13 Incendiary Impact",
                type: "grenade",
                icon: "assets/icons/G-13_Incendiary_Impact_Throwable_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "incendiary", "impact"],
                compatibilityRules: {}
            },
            {
                id: "G-23",
                name: "G-23 Stun",
                type: "grenade",
                icon: "assets/icons/G-23_Stun_Throwable_Weaponry.png",
                stats: {
                    damage: "n/a",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["anti-tank", "stun"],
                compatibilityRules: {}
            },
            {
                id: "G-4",
                name: "G-4 Gas",
                type: "grenade",
                icon: "assets/icons/G-4_Gas_Throwable_Weaponry.png",
                stats: {
                    damage: "n/a",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["anti-tank", "gas"],
                compatibilityRules: {},
                source: "Chemical Agents"
            },
            {
                id: "G-50",
                name: "G-50 Seeker",
                type: "grenade",
                icon: "assets/icons/G-50_Seeker_Throwable_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "n/a",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["heavy", "seeker"],
                compatibilityRules: {},
                source: "Servants of Freedom"
            },
            {
                id: "G-3",
                name: "G-3 Smoke",
                type: "grenade",
                icon: "assets/icons/G-3_Smoke.png",
                stats: {
                    damage: "n/a",
                    accuracy: "n/a",
                    weight: "light",
                    cost: 0
                },
                tags: ["smoke"],
                compatibilityRules: {}
            },
            {
                id: "G-123",
                name: "G-123 Thermite",
                type: "grenade",
                icon: "assets/icons/G-123_Thermite_Throwable_Weaponry.png",
                stats: {
                    damage: "high",
                    accuracy: "n/a",
                    weight: "heavy",
                    cost: 0
                },
                tags: ["anti-tank", "thermite"],
                compatibilityRules: {},
                source: "Democratic Detonation"
            },
            {
                id: "K-2",
                name: "K-2 Throwing Knife",
                type: "grenade",
                icon: "assets/icons/K-2_Throwing_Knife_Throwable_Weaponry.png",
                stats: {
                    damage: "medium",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "throwing_knife"],
                compatibilityRules: {},
                source: "Viper Commandos"
            },
            {
                id: "TED-63",
                name: "TED-63 Dynamite",
                type: "grenade",
                icon: "assets/icons/Borderline Justice/TED-63.png",
                stats: {
                    damage: "medium",
                    accuracy: "n/a",
                    weight: "medium",
                    cost: 0
                },
                tags: ["medium", "frag"],
                compatibilityRules: {},
                source: "Borderline Justice"
            }
        ],
        stratagems: [
            {
                id: "MG-43",
                name: "MG-43 Machine Gun",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Machine Gun.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 0, // Free
                    unlockLevel: 1
                },
                description: "A machine gun designed for stationary use. Trades higher power for increased recoil and reduced accuracy.",
                tags: ["machine_gun", "stationary"]
            },
            {
                id: "APW-1",
                name: "APW-1 Anti-Materiel Rifle",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Anti-Materiel Rifle.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 5000,
                    unlockLevel: 1
                },
                description: "A high-caliber sniper rifle effective over long distances against light vehicle armor. Must be aimed downscope.",
                tags: ["sniper", "anti-materiel"]
            },
            {
                id: "M-105",
                name: "M-105 Stalwart",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Stalwart.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 3500,
                    unlockLevel: 1
                },
                description: "A compact, low caliber machine gun with faster reloading than heavier machine guns.",
                tags: ["machine_gun", "compact"]
            },
            {
                id: "EAT-17",
                name: "EAT-17 Expendable Anti-Tank",
                type: "stratagem",
                icon: "assets/icons/Patriotic Administration Center/Expendable Anti-Tank.svg",
                stats: {
                    cooldown: "70 sec",
                    cost: 3000,
                    unlockLevel: 3
                },
                description: "A single-use weapon specialized for damaging vehicle armor. Discarded after every use.",
                tags: ["anti_tank", "expendable"]
            },
            {
                id: "GR-8",
                name: "GR-8 Recoilless Rifle",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Recoilless Rifle.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 6000,
                    unlockLevel: 5
                },
                description: "A recoilless rifle effective against vehicle armor. Includes support backpack required for reloading.",
                tags: ["anti_tank", "recoilless", "backpack"]
            },
            {
                id: "FLAM-40",
                name: "FLAM-40 Flamethrower",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Flamethrower.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 6000,
                    unlockLevel: 10
                },
                description: "An incendiary weapon for close range. Will ignite targets, terrain, and any flammable teammates.",
                tags: ["incendiary", "close_range", "flame"]
            },
            {
                id: "AC-8",
                name: "AC-8 Autocannon",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Autocannon.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 7000,
                    unlockLevel: 10
                },
                description: "A fully-automatic cannon effective against light vehicle armor. Includes support backpack required for reloading.",
                tags: ["autocannon", "vehicle"]
            },
            {
                id: "MG-206",
                name: "MG-206 Heavy Machine Gun",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Heavy Machine Gun.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 6000,
                    unlockLevel: 12
                },
                description: "A very powerful but difficult-to-wield machine gun with intense recoil.",
                tags: ["heavy_machine_gun", "peak-physique"]
            },
            {
                id: "RL-77",
                name: "RL-77 Airburst Rocket Launcher",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Airburst Rocket Launcher.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 8000,
                    unlockLevel: 15
                },
                description: "Fires a rocket that detonates within proximity of a target, and deploys a cluster of explosive bomblets.",
                tags: ["rocket_launcher", "airburst"]
            },
            {
                id: "MLS-4X",
                name: "MLS-4X Commando",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Commando.svg",
                stats: {
                    cooldown: "120 sec",
                    cost: 8000,
                    unlockLevel: 15
                },
                description: "An expendable missile launcher equipped with four laser-guided missiles.",
                tags: ["missile_launcher", "commando"]
            },
            {
                id: "RS-422",
                name: "RS-422 Railgun",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Railgun.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 10000,
                    unlockLevel: 20
                },
                description: "An experimental weapon which prioritizes armor penetration. Must be charged between shots.",
                tags: ["railgun", "experimental"]
            },
            {
                id: "FAF-14",
                name: "FAF-14 Spear",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/Spear.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 9000,
                    unlockLevel: 20
                },
                description: "An anti-tank homing missile which must lock onto its target before launch. Effective against large and armored enemies.",
                tags: ["anti_tank", "spear", "backpack"]
            },
            {
                id: "StA-X3",
                name: "StA-X3 W.A.S.P. Launcher",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Patriotic Administration Center/StA-X3 W.A.S.P. Launcher.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 12000,
                    unlockLevel: null
                },
                description: "A versatile missile launcher loaded with seven lock-on homing missiles. Includes support backpack required for reloading.",
                tags: ["missile_launcher", "versatile"]
            },
            {
                id: "Orbital_Gatling_Barrage",
                name: "Orbital Gatling Barrage",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital Gatling Barrage.svg",
                stats: {
                    cooldown: "70 sec",
                    cost: 1500,
                    unlockLevel: 1
                },
                description: "A barrage of high explosive rounds, fired from the Destroyer's high speed rotary autocannons.",
                tags: ["orbital", "gatling", "cannons"]
            },
            {
                id: "Orbital_Airburst_Strike",
                name: "Orbital Airburst Strike",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital Airburst Strike.svg",
                stats: {
                    cooldown: "100 sec",
                    cost: 4000,
                    unlockLevel: 5
                },
                description: "A projectile which explodes while airborne, creating a deadly rain of shrapnel. Not effective against heavy armor.",
                tags: ["orbital", "airburst", "shrapnel"]
            },
            {
                id: "Orbital_120mm_HE_Barrage",
                name: "Orbital 120mm HE Barrage",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital 120MM HE Barrage.svg",
                stats: {
                    cooldown: "180 sec",
                    cost: 4000,
                    unlockLevel: 5
                },
                description: "A precision artillery salvo over a small area, perfect for taking out concentrated enemy units.",
                tags: ["orbital", "HE", "artillery"]
            },
            {
                id: "Orbital_380mm_HE_Barrage",
                name: "Orbital 380mm HE Barrage",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital 380MM HE Barrage.svg",
                stats: {
                    cooldown: "240 sec",
                    cost: 7500,
                    unlockLevel: 8
                },
                description: "A prolonged barrage, wreaking extended destruction over a large area. Communication with teammates is advised.",
                tags: ["orbital", "HE", "artillery"]
            },
            {
                id: "Orbital_Walking_Barrage",
                name: "Orbital Walking Barrage",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital Walking Barrage.svg",
                stats: {
                    cooldown: "240 sec",
                    cost: 7500,
                    unlockLevel: 10
                },
                description: "A linear artillery barrage which moves at intervals, driving the enemy out from cover while allowing an advance.",
                tags: ["orbital", "walking", "artillery"]
            },
            {
                id: "Orbital_Laser",
                name: "Orbital Laser",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital Laser.svg",
                stats: {
                    cooldown: "300 sec",
                    cost: 10000,
                    unlockLevel: 15
                },
                description: "The Destroyer's laser cannon will sweep over the designated area, vaporizing all targets within the effective radius.",
                tags: ["orbital", "laser"]
            },
            {
                id: "Orbital_Napalm_Barrage",
                name: "Orbital Napalm Barrage",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital Napalm Barrage.svg",
                stats: {
                    cooldown: "240 sec",
                    cost: 10000,
                    unlockLevel: 18
                },
                description: "Launches a prolonged barrage of napalm shells over a wide area, setting a swath of land ablaze in mere moments.",
                tags: ["orbital", "napalm", "barrage"]
            },
            {
                id: "Orbital_Railcannon_Strike",
                name: "Orbital Railcannon Strike",
                type: "stratagem",
                icon: "assets/icons/Orbital Cannons/Orbital Railcannon Strike.svg",
                stats: {
                    cooldown: "210 sec",
                    cost: 10000,
                    unlockLevel: 20
                },
                description: "A high-velocity railcannon round fired at the largest target in close proximity to the beacon. Targeting is automatic.",
                tags: ["orbital", "railcannon", "strike"]
            },
            {
                id: "Eagle_Strafing_Run",
                name: "Eagle Strafing Run",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle Strafing Run.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 1500,
                    unlockLevel: 1
                },
                description: "A strafing run of the battlefield to clear small targets, delivered almost instantly. The strike starts from the beacon and moves away from the facing direction.",
                tags: ["hangar", "strafing", "run"]
            },
            {
                id: "Eagle_Airstrike",
                name: "Eagle Airstrike",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle Airstrike.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 4000,
                    unlockLevel: 1
                },
                description: "A barrage of bombs creating a non-targeted carpet of explosions. The strike is perpendicular to the facing direction.",
                tags: ["hangar", "airstrike"]
            },
            {
                id: "Eagle_Cluster_Bomb",
                name: "Eagle Cluster Bomb",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle Cluster Bomb.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 4000,
                    unlockLevel: 3
                },
                description: "A targeted air strike unable to destroy buildings, but efficient at clearing smaller targets. The strike is perpendicular to the facing direction.",
                tags: ["hangar", "cluster", "bomb"]
            },
            {
                id: "Eagle_Napalm_Airstrike",
                name: "Eagle Napalm Airstrike",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle Napalm Airstrike.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 5000,
                    unlockLevel: 5
                },
                description: "A barrage of napalm bombs creating a wall of fire that stops enemy advance. The strike is perpendicular to the facing direction.",
                tags: ["hangar", "napalm", "airstrike"]
            },
            {
                id: "Jump_Pack",
                name: "LIFT-850 Jump Pack",
                type: "stratagem",
                icon: "assets/icons/Hangar/Jump Pack.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 6000,
                    unlockLevel: 8
                },
                description: "Enables the user to jump higher than 'gravity' and 'safety' would normally allow. Must be charged before use.",
                tags: ["hangar", "jump_pack", "backpack"]
            },
            {
                id: "Eagle_Smoke_Strike",
                name: "Eagle Smoke Strike",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle Smoke Strike.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 4000,
                    unlockLevel: 8
                },
                description: "A barrage of smoke grenades creating a thick screen to block enemy vision. The strike is perpendicular to the facing direction.",
                tags: ["hangar", "smoke", "strike", "gas"]
            },
            {
                id: "Eagle_110mm_Rocket_Pods",
                name: "Eagle 110mm Rocket Pods",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle 110MM Rocket Pods.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 7500,
                    unlockLevel: 10
                },
                description: "A barrage of rocket pods released on the largest target near the stratagem beacon.",
                tags: ["hangar", "rocket", "pods"]
            },
            {
                id: "Eagle_500kg_Bomb",
                name: "Eagle 500kg Bomb",
                type: "stratagem",
                icon: "assets/icons/Hangar/Eagle 500KG Bomb.svg",
                stats: {
                    cooldown: "8 sec",
                    cost: 10000,
                    unlockLevel: 15
                },
                description: "A large bomb that obliterates almost any target close to impact. Ensure the area is clear.",
                tags: ["hangar", "bomb"]
            },
            {
                id: "M-102_Fast_Recon_Vehicle",
                name: "M-102 Fast Recon Vehicle",
                type: "stratagem",
                icon: "assets/icons/Hangar/Fast Recon Vehicle.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 25000,
                    unlockLevel: 25
                },
                description: "A lightly-armored reconnaissance vehicle mounted with a heavy machinegun.",
                tags: ["hangar", "recon", "vehicle"]
            },
            {
                id: "Orbital_Precision_Strike",
                name: "Orbital Precision Strike",
                type: "stratagem",
                icon: "assets/icons/Bridge/Orbital Precision Strike.svg",
                stats: {
                    cooldown: "90 sec",
                    cost: "Free",
                    unlockLevel: 1
                },
                description: "A single precision shot from the Destroyer's 'ATLAS' cannon.",
                tags: ["bridge", "precision", "strike"]
            },
            {
                id: "Orbital_Gas_Strike",
                name: "Orbital Gas Strike",
                type: "stratagem",
                icon: "assets/icons/Bridge/Orbital Gas Strike.svg",
                stats: {
                    cooldown: "75 sec",
                    cost: 4000,
                    unlockLevel: 1
                },
                description: "A projectile that releases a cloud of corrosive gas harmful to both organic and robotic lifeforms.",
                tags: ["bridge", "gas", "strike"]
            },
            {
                id: "Orbital_EMS_Strike",
                name: "Orbital EMS Strike",
                type: "stratagem",
                icon: "assets/icons/Bridge/Orbital EMS Strike.svg",
                stats: {
                    cooldown: "75 sec",
                    cost: 6000,
                    unlockLevel: 5
                },
                description: "A 'compliance weapon' that temporarily stuns all targets within the strike radius.",
                tags: ["bridge", "EMS", "strike"]
            },
            {
                id: "Orbital_Smoke_Strike",
                name: "Orbital Smoke Strike",
                type: "stratagem",
                icon: "assets/icons/Bridge/Orbital Smoke Strike.svg",
                stats: {
                    cooldown: "100 sec",
                    cost: 4000,
                    unlockLevel: 8
                },
                description: "Creates a large, thick smoke screen to block targets' line of sight.",
                tags: ["bridge", "smoke", "strike", "gas"]
            },
            {
                id: "HMG_Emplacement",
                name: "E/MG-101 HMG Emplacement",
                type: "stratagem",
                icon: "assets/icons/Bridge/HMG Emplacement.svg",
                stats: {
                    cooldown: "180 sec",
                    cost: 10000,
                    unlockLevel: 10
                },
                description: "A manned fortification offering superior firepower against lightly armored targets. Slow to turn.",
                tags: ["hmg", "emplacement"]
            },
            {
                id: "Shield_Generator_Relay",
                name: "FX-12 Shield Generator Relay",
                type: "stratagem",
                icon: "assets/icons/Bridge/Shield Generator Relay.svg",
                stats: {
                    cooldown: "90 sec",
                    cost: 9000,
                    unlockLevel: 10
                },
                description: "A stationary energy shield that provides cover against projectiles. Limited lifetime.",
                tags: ["shield", "relay"]
            },
            {
                id: "Tesla_Tower",
                name: "A/ARC-3 Tesla Tower",
                type: "stratagem",
                icon: "assets/icons/Bridge/Tesla Tower.svg",
                stats: {
                    cooldown: "120 sec",
                    cost: 8000,
                    unlockLevel: 15
                },
                description: "A turret that fires electrical charges at targets in close range. Remain prone to avoid friendly fire.",
                tags: ["tesla", "tower"]
            },
            {
                id: "Anti_Tank_Emplacement",
                name: "E/AT-12 Anti-Tank Emplacement",
                type: "stratagem",
                icon: "assets/icons/Urban Legends/Anti-Tank Emplacement.svg",
                stats: {
                    cooldown: "180 sec",
                    cost: 110,
                    unlockLevel: null
                },
                description: "A powerful manned gun emplacement capable of taking out armored targets at long ranges.",
                tags: ["emplacement", "anti_tank"],
                source: "Urban Legends"
            },
            {
                id: "Flame_Sentry",
                name: "A/FLAM-40 Flame Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Urban Legends/Flame Sentry.svg",
                stats: {
                    cooldown: "150 sec",
                    cost: 85,
                    unlockLevel: null
                },
                description: "An automated flamethrower turret. Warning: fuel canister prone to explosion when ruptured.",
                tags: ["flame", "sentry"],
                source: "Urban Legends"
            },
            {
                id: "Portable_Hellbomb",
                name: "B-100 Portable Hellbomb",
                type: "stratagem",
                icon: "assets/icons/Servants of Freedom/Hellbomb Portable.svg",
                stats: {
                    cooldown: "300 sec",
                    cost: 110,
                    unlockLevel: null
                },
                description: "A backpack with a mini version of the hellbomb that can be activated by you or your teammates.",
                tags: ["hellbomb", "portable", "backpack"],
                source: "Servants of Freedom"
            },
            {
                id: "LIFT-860",
                name: "LIFT-860 Hover Pack",
                type: "stratagem",
                icon: "assets/icons/Borderline Justice/LIFT-860 Hover Pack.png",
                stats: {
                    cooldown: "480 sec",
                    cost: 110,
                    unlockLevel: 8
                },
                description: "When activated, it propels the wearer in the air for around 6 seconds. ",
                tags: ["supply", "backpack"],
                compatibilityRules: {},
                source: "Borderline Justice"
            },
            {
                id: "Grenade_Launcher",
                name: "GL-21 Grenade Launcher",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Engineering Bay/Grenade Launcher.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 6000,
                    unlockLevel: 5
                },
                description: "A grenade launcher effective against armored infantry. Not intended for vehicle armor or fortified buildings.",
                tags: ["grenade_launcher"]
            },
            {
                id: "Laser_Cannon",
                name: "LAS-98 Laser Cannon",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Engineering Bay/Laser Cannon.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 4000,
                    unlockLevel: 5
                },
                description: "A laser weapon firing a continuous beam. Requires heat sink replacement if overheated.",
                tags: ["laser", "cannon"]
            },
            {
                id: "Incendiary_Mines",
                name: "MD-I4 Incendiary Mines",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Incendiary Mines.svg",
                stats: {
                    cooldown: "120 sec",
                    cost: 4000,
                    unlockLevel: 8
                },
                description: "Deploys a defensive incendiary minefield that sets terrain and targets alight when triggered.",
                tags: ["mines", "incendiary"]
            },
            {
                id: "Guard_Dog_Rover",
                name: "AX/LAS-5 Guard Dog Rover",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Guard Dog Rover.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 7500,
                    unlockLevel: 10
                },
                description: "An autonomous drone equipped with a laser rifle for 360° cover. Returns to backpack to cool down.",
                tags: ["drone", "guard_dog", "backpack"]
            },
            {
                id: "Arc_Thrower",
                name: "ARC-3 Arc Thrower",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Arc Thrower.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 7000,
                    unlockLevel: 15
                },
                description: "Projects an arc of lightning at close range. Charges to project bolts and may discharge through multiple targets.",
                tags: ["arc", "thrower"]
            },
            {
                id: "MD-17_AntiTank_Mines",
                name: "MD-17 Anti-Tank Mines",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Anti-Tank Mines.svg",
                stats: {
                    cooldown: "120 sec",
                    cost: 7000,
                    unlockLevel: 15
                },
                description: "Scatters powerful anti-tank mines that deal heavy, armor-penetrating damage.",
                tags: ["mines", "anti_tank"]
            },
            {
                id: "LAS-99_Quasar_Cannon",
                name: "LAS-99 Quasar Cannon",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Engineering Bay/Quasar Cannon.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 7500,
                    unlockLevel: 18
                },
                description: "Charges up to fire a powerful, explosive energy burst with a long cooldown.",
                tags: ["quasar", "cannon"]
            },
            {
                id: "Shield_Generator_Pack",
                name: "SH-32 Shield Generator Pack",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Shield Generator Pack.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 10000,
                    unlockLevel: 20
                },
                description: "Encloses the wearer in a spherical shield that blocks high-speed projectiles. Limited lifetime.",
                tags: ["shield", "backpack"]
            },
            {
                id: "Gas_Minefield",
                name: "MD-8 Gas Mines",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Gas Mine.svg",
                stats: {
                    cooldown: "120 sec",
                    cost: 12000,
                    unlockLevel: 20
                },
                description: "Deploys mines that release gas on activation, temporarily blinding and slowing enemies.",
                tags: ["mines", "gas"]
            },
            {
                id: "Machine_Gun_Sentry",
                name: "A/MG-43 Machine Gun Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Robotics Workshop/Machine Gun Sentry.svg",
                stats: {
                    cooldown: "90 sec",
                    cost: 1500,
                    unlockLevel: 1
                },
                description: "An agile automated machine gun turret that fires at targets even if allies are in the crossfire.",
                tags: ["robotics", "sentry", "machine_gun"]
            },
            {
                id: "Gatling_Sentry",
                name: "A/G-16 Gatling Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Robotics Workshop/Gatling Sentry.svg",
                stats: {
                    cooldown: "150 sec",
                    cost: 4000,
                    unlockLevel: 5
                },
                description: "An automated turret with an extremely high rate of fire. Caution: does not check for friendly units.",
                tags: ["robotics", "sentry", "gatling"]
            },
            {
                id: "Mortar_Sentry",
                name: "A/M-12 Mortar Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Robotics Workshop/Mortar Sentry.svg",
                stats: {
                    cooldown: "180 sec",
                    cost: 7000,
                    unlockLevel: 8
                },
                description: "A turret firing powerful high-arc shells. Effective at long ranges and striking targets behind cover.",
                tags: ["robotics", "sentry", "mortar"]
            },
            {
                id: "Guard_Dog",
                name: "AX/AR-23 Guard Dog",
                type: "stratagem",
                icon: "assets/icons/Robotics Workshop/Guard Dog.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 7500,
                    unlockLevel: 10
                },
                description: "An autonomous drone equipped with a Liberator Penetrator assault rifle for 360° cover. Returns to backpack to rearm.",
                tags: ["robotics", "guard_dog", "backpack"]
            },
            {
                id: "Autocannon_Sentry",
                name: "A/AC-8 Autocannon Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Robotics Workshop/Autocannon Sentry.svg",
                stats: {
                    cooldown: "150 sec",
                    cost: 6000,
                    unlockLevel: 13
                },
                description: "An automated cannon turret firing anti-tank ammunition over long ranges. Sacrifices agility for power.",
                tags: ["robotics", "sentry", "autocannon", "backpack"]
            },
            {
                id: "Rocket_Sentry",
                name: "A/MLS-4X Rocket Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Robotics Workshop/Rocket Sentry.svg",
                stats: {
                    cooldown: "150 sec",
                    cost: 7500,
                    unlockLevel: 15
                },
                description: "A powerful automated turret effective against armored targets; it primarily aims at larger enemies.",
                tags: ["robotics", "sentry", "rocket"]
            },
            {
                id: "EMS_Mortar_Sentry",
                name: "A/M-23 EMS Mortar Sentry",
                type: "stratagem",
                subtype: "sentry",
                icon: "assets/icons/Robotics Workshop/EMS Mortar Sentry.svg",
                stats: {
                    cooldown: "180 sec",
                    cost: 8000,
                    unlockLevel: 20
                },
                description: "A turret firing static field generators that slow enemy advance.",
                tags: ["robotics", "sentry", "EMS"]
            },
            {
                id: "EXO-45_Patriot",
                name: "EXO-45 Patriot Exosuit",
                type: "stratagem",
                icon: "assets/icons/Robotics Workshop/Patriot Exosuit.svg",
                stats: {
                    cooldown: "600 sec",
                    cost: 20000,
                    unlockLevel: 25
                },
                description: "A heavily armored walking exosuit, equipped with fourteen rockets and a mini-gun preloaded with 1000 ammo.",
                tags: ["exosuit", "patriot"]
            },
            {
                id: "EXO-49_Emancipator",
                name: "EXO-49 Emancipator Exosuit",
                type: "stratagem",
                icon: "assets/icons/Robotics Workshop/Emancipator Exosuit.svg",
                stats: {
                    cooldown: "600 sec",
                    cost: 20000,
                    unlockLevel: 25
                },
                description: "A heavily armored walking exosuit, equipped with dual autocannons preloaded with 100 rounds each.",
                tags: ["exosuit", "emancipator"]
            },
            {
                id: "TX-41_Sterilizer",
                name: "TX-41 Sterilizer",
                type: "stratagem",
                subtype: "supply_weapon",
                icon: "assets/icons/Chemical Agents/Sterilizer.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 85,
                    unlockLevel: null
                },
                description: "Atomizes caustic chemicals into a fine mist that liquifies sensitive electronics and tissues. Blinds and slows enemies.",
                tags: ["chemical", "sterilizer", "gas"],
                source: "Chemical Agents"
            },
            {
                id: "Guard_Dog_Dog_Breath",
                name: "AX/TX-13 Guard Dog Dog Breath",
                type: "stratagem",
                icon: "assets/icons/Chemical Agents/Guard Dog Breath.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 110,
                    unlockLevel: null
                },
                description: "A drone that defends its user by firing caustic gas at nearby enemies. Returns to backpack to refill.",
                tags: ["chemical", "dog_breath", "gas", "backpack"],
                source: "Chemical Agents"
            },
            {
                id: "SH-51_Directional_Shield",
                name: "SH-51 Directional Shield",
                type: "stratagem",
                icon: "assets/icons/Urban Legends/Directional Shield.svg",
                stats: {
                    cooldown: "300 sec",
                    cost: 75,
                    unlockLevel: null
                },
                description: "A one-handed device deploying a wide energy barrier in front of the user. It blocks high-speed projectiles from the outside while allowing shooting through.",
                tags: ["shield", "directional"]
            },
            {
                id: "B-1",
                name: "B-1 Supply Pack",
                type: "stratagem",
                icon: "assets/icons/Engineering Bay/Supply Pack.svg",
                stats: {
                    cooldown: "480 sec",
                    cost: 4400,
                    unlockLevel: null
                },
                description: "The Supply Pack allows Helldivers to carry supplies to supplement yourself or the team's ammunition, grenades and stims.",
                tags: ["ammo", "backpack"],
            }
        ],
        boosters: [
            {
                id: "hellpod_space_optimization",
                name: "Hellpod Space Optimization",
                type: "booster",
                icon: "assets/icons/Hellpod_Space_Optimization_Booster_Icon.svg",
                stats: {
                    effect: "Helldivers come out of the Hellpod fully stocked on Ammo, Grenades and Stims",
                    cost: 15,
                    currency: "Medals"
                },
                tags: ["ammo", "grenades", "stims", "mobilize"],
                compatibilityRules: {}
            },
            {
                id: "vitality_enhancement",
                name: "Vitality Enhancement",
                type: "booster",
                icon: "assets/icons/Vitality_Enhancement_Booster_Icon.svg",
                stats: {
                    effect: "Allows all Helldivers to resist injury",
                    cost: 20,
                    currency: "Medals"
                },
                tags: ["vitality", "mobilize"],
                compatibilityRules: {}
            },
            {
                id: "uav_recon_booster",
                name: "UAV Recon Booster",
                type: "booster",
                icon: "assets/icons/UAV_Recon_Booster_Booster_Icon.svg",
                stats: {
                    effect: "Increases all Helldivers' effective radar range",
                    cost: 40,
                    currency: "Medals"
                },
                tags: ["uav", "recon", "mobilize"],
                compatibilityRules: {}
            },
            {
                id: "stamina_enhancement",
                name: "Stamina Enhancement",
                type: "booster",
                icon: "assets/icons/Stamina_Enhancement_Booster_Icon.svg",
                stats: {
                    effect: "Increases all Helldivers' stamina capacity and recovery",
                    cost: 75,
                    currency: "Medals"
                },
                tags: ["stamina", "mobilize"],
                compatibilityRules: {}
            },
            {
                id: "muscle_enhancement",
                name: "Muscle Enhancement",
                type: "booster",
                icon: "assets/icons/Muscle_Enhancement_Booster_Icon.svg",
                stats: {
                    effect: "Allows Helldivers to traverse difficult terrain with ease",
                    cost: 70,
                    currency: "Medals"
                },
                tags: ["muscle", "mobilize"],
                compatibilityRules: {}
            },
            {
                id: "increased_reinforcement_budget",
                name: "Increased Reinforcement Budget",
                type: "booster",
                icon: "assets/icons/Increased_Reinforcement_Budget_Booster_Icon.svg",
                stats: {
                    effect: "Increases the number of available reinforcements",
                    cost: 150,
                    currency: "Medals"
                },
                tags: ["reinforcement", "mobilize"],
                compatibilityRules: {}
            },
            {
                id: "flexible_reinforcement_budget",
                name: "Flexible Reinforcement Budget",
                type: "booster",
                icon: "assets/icons/Flexible_Reinforcement_Budget_Booster_Icon.svg",
                stats: {
                    effect: "Reduces time until new reinforcements are granted",
                    cost: 75,
                    currency: "Medals"
                },
                tags: ["reinforcement", "steeled_veterans"],
                compatibilityRules: {}
            },
            {
                id: "localization_confusion",
                name: "Localization Confusion",
                type: "booster",
                icon: "assets/icons/Localization_Confusion_Booster_Icon.svg",
                stats: {
                    effect: "Increases the time between enemy encounters",
                    cost: 18,
                    currency: "Medals"
                },
                tags: ["localization", "cutting_edge"],
                compatibilityRules: {}
            },
            {
                id: "expert_extraction_pilot",
                name: "Expert Extraction Pilot",
                type: "booster",
                icon: "assets/icons/Expert_Extraction_Pilot_Booster_Icon.svg",
                stats: {
                    effect: "Lowers the time for the extraction shuttle to reach the beacon",
                    cost: 55,
                    currency: "Medals"
                },
                tags: ["extraction", "democratic_detonation"],
                compatibilityRules: {}
            },
            {
                id: "motivational_shocks",
                name: "Motivational Shocks",
                type: "booster",
                icon: "assets/icons/Motivational_Shocks_Booster_Icon.svg",
                stats: {
                    effect: "Allows Helldivers to recover faster after being slowed",
                    cost: 15,
                    currency: "Medals"
                },
                tags: ["motivational", "polar_patriots"],
                compatibilityRules: {},
                source: "Polar Patriots"
            },
            {
                id: "experimental_infusion",
                name: "Experimental Infusion",
                type: "booster",
                icon: "assets/icons/Expert_Extraction_Pilot_Booster_Icon.svg",
                stats: {
                    effect: "Restores health and temporarily increases movement speed and damage reduction",
                    cost: 80,
                    currency: "Medals"
                },
                tags: ["experimental", "viper_commandos"],
                compatibilityRules: {},
                source: "Viper Commandos"
            },
            {
                id: "firebomb_hellpods",
                name: "Firebomb Hellpods",
                type: "booster",
                icon: "assets/icons/Firebomb_Hellpods_Booster_Icon.svg",
                stats: {
                    effect: "Lines Hellpods with volatile incendiaries that detonate upon impact",
                    cost: 60,
                    currency: "Medals"
                },
                tags: ["firebomb", "freedoms_flame"],
                compatibilityRules: {},
                source: "Freedom's Flame"
            },
            {
                id: "dead_sprint",
                name: "Dead Sprint",
                type: "booster",
                icon: "assets/icons/Dead_Sprint_Booster_Icon.svg",
                stats: {
                    effect: "Allows Helldivers to keep sprinting even when out of stamina, draining health instead",
                    cost: 35,
                    currency: "Medals"
                },
                tags: ["dead_sprint", "truth_enforcers"],
                compatibilityRules: {},
                source: "Truth Enforcers"
            },
            {
                id: "armed_resupply_pods",
                name: "Armed Resupply Pods",
                type: "booster",
                icon: "assets/icons/Armed_Resupply_Pods_Booster_Icon.svg",
                stats: {
                    effect: "Mounts a modified AR-23 Liberator to resupply pods, doubling as automatic turrets",
                    cost: 55,
                    currency: "Medals"
                },
                tags: ["armed_resupply", "urban_legends"],
                compatibilityRules: {},
                source: "Urban Legends"
            },
            {
                id: "sample_extricator",
                name: "Sample Extricator",
                type: "booster",
                icon: "assets/icons/Borderline Justice/Sample Extricator.png",
                stats: {
                    effect: "When equipped, all Large Enemies will have a chance of dropping samples upon death.",
                    cost: 65,
                    currency: "Medals"
                },
                tags: ["samples", "borderline_justice"],
                compatibilityRules: {},
                source: "Borderline Justice"
            }
        ]
    },
    config: {
        loadoutStructure: {
            primary_weapon: { required: true },
            secondary_weapon: { required: true },
            armor: { required: true },
            grenades: { required: true },
            stratagems: { required: true, max: 4 },
            booster: { required: false }
        },
        modes: {
            full_random: {},
            smart_pick: {
                archetypes: ["terminids", "automatons", "illuminates"],
                compatibility: true
            }
        }
    }
};

export default loadoutData;
