const RACES = [
    {
        name: 'Elf',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Troll',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Beast',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Centaur',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Human',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Orc',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Goblin',
        stages: [3, 6],
        active: 0
    },
    {
        name: 'Naga',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Elemental',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'God',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Ogre',
        stages: [2],
        active: 0
    },
    {
        name: 'Demon',
        stages: [1],
        active: 0
    },
    {
        name: 'Tauren',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Draenei',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Undead',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Dragon',
        stages: [3, 5],
        active: 0
    },
    {
        name: 'Pandaren',
        stages: [1, 2],
        active: 0
    },
    {
        name: 'Harpy',
        stages: [2],
        active: 0
    },
    {
        name: 'Dwarf',
        stages: [2],
        active: 0
    },
    {
        name: 'Faceless',
        stages: [1],
        active: 0
    },
    {
        name: 'Aqir',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Kobold',
        stages: [1, 2],
        active: 0
    },
    {
        name: 'Satyr',
        stages: [1],
        active: 0
    },

]
const CLASSES = [
    {
        name: 'Hunter',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Knight',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Wizard',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Warlock',
        stages: [2, 4, 6],
        active: 0
    },
    {
        name: 'Shaman',
        stages: [3, 6],
        active: 0
    },
    {
        name: 'Priest',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Warrior',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Druid',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Mage',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Mech',
        stages: [3, 6],
        active: 0
    },
    {
        name: 'Assassin',
        stages: [3, 6, 9],
        active: 0
    },
    {
        name: 'Demon Hunter',
        stages: [2, 4],
        active: 0
    },
    {
        name: 'Monk',
        stages: [2, 4],
        active: 0
    },
]

export const SPECIES = [...RACES, ...CLASSES].sort((a, b)=>a.name.localeCompare(b.name))