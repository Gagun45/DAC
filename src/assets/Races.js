import beast from './icons/beast.png'
import druid from './icons/druid.png'
import warlock from './icons/warlock.png'
import human from './icons/human.png'
import assassin from './icons/assassin.png'
import warrior from './icons/warrior.png'
import demon from './icons/demon.png'
import mech from './icons/mech.png'
import dwarf from './icons/dwarf.png'
import knight from './icons/knight.png'
import hunter from './icons/hunter.png'
import elf from './icons/elf.png'
import mage from './icons/mage.png'
import dragon from './icons/dragon.png'
import elemental from './icons/elemental.png'
import undead from './icons/undead.png'
import shaman from './icons/shaman.png'
import naga from './icons/naga.png'
import satyr from './icons/satyr.png'
import orc from './icons/orc.png'
import goblin from './icons/goblin.png'
import aqir from './icons/aqir.png'
import god from './icons/god.png'
import pandaren from './icons/pandaren.png'
import ogre from './icons/ogre.png'
import monk from './icons/monk.png'
import priest from './icons/priest.png'
import wizard from './icons/wizard.png'
import demon_hunter from './icons/demon_hunter.png'
import kobold from './icons/kobold.png'
import centaur from './icons/centaur.png'
import tauren from './icons/tauren.png'
import harpy from './icons/harpy.png'
import draenei from './icons/draenei.png'
import troll from './icons/troll.png'
import faceless from './icons/faceless.png'







const RACES = [
    {
        name: 'Elf',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: elf
    },
    {
        name: 'Troll',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: troll
    },
    {
        name: 'Beast',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: beast
    },
    {
        name: 'Centaur',
        stages: [2, 4],
        active: 0,
        raceIcon: centaur
    },
    {
        name: 'Human',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: human
    },
    {
        name: 'Orc',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: orc
    },
    {
        name: 'Goblin',
        stages: [3, 6],
        active: 0,
        raceIcon: goblin
    },
    {
        name: 'Naga',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: naga
    },
    {
        name: 'Elemental',
        stages: [2, 4],
        active: 0,
        raceIcon: elemental
    },
    {
        name: 'God',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: god
    },
    {
        name: 'Ogre',
        stages: [2],
        active: 0,
        raceIcon: ogre
    },
    {
        name: 'Demon',
        stages: [1],
        active: 0,
        raceIcon: demon
    },
    {
        name: 'Tauren',
        stages: [2, 4],
        active: 0,
        raceIcon: tauren
    },
    {
        name: 'Draenei',
        stages: [2, 4],
        active: 0,
        raceIcon: draenei
    },
    {
        name: 'Undead',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: undead
    },
    {
        name: 'Dragon',
        stages: [3, 5],
        active: 0,
        raceIcon: dragon
    },
    {
        name: 'Pandaren',
        stages: [1, 2],
        active: 0,
        raceIcon: pandaren
    },
    {
        name: 'Harpy',
        stages: [2],
        active: 0,
        raceIcon: harpy
    },
    {
        name: 'Dwarf',
        stages: [2],
        active: 0,
        raceIcon: dwarf
    },
    {
        name: 'Faceless',
        stages: [1],
        active: 0,
        raceIcon: faceless
    },
    {
        name: 'Aqir',
        stages: [2, 4],
        active: 0,
        raceIcon: aqir
    },
    {
        name: 'Kobold',
        stages: [1, 2],
        active: 0,
        raceIcon: kobold
    },
    {
        name: 'Satyr',
        stages: [1],
        active: 0,
        raceIcon: satyr
    },

]
const CLASSES = [
    {
        name: 'Hunter',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: hunter
    },
    {
        name: 'Knight',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: knight
    },
    {
        name: 'Wizard',
        stages: [2, 4],
        active: 0,
        raceIcon: wizard
    },
    {
        name: 'Warlock',
        stages: [2, 4, 6],
        active: 0,
        raceIcon: warlock
    },
    {
        name: 'Shaman',
        stages: [3, 6],
        active: 0,
        raceIcon: shaman
    },
    {
        name: 'Priest',
        stages: [2, 4],
        active: 0,
        raceIcon: priest
    },
    {
        name: 'Warrior',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: warrior
    },
    {
        name: 'Druid',
        stages: [2, 4],
        active: 0,
        raceIcon: druid
    },
    {
        name: 'Mage',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: mage
    },
    {
        name: 'Mech',
        stages: [3, 6],
        active: 0,
        raceIcon: mech
    },
    {
        name: 'Assassin',
        stages: [3, 6, 9],
        active: 0,
        raceIcon: assassin
    },
    {
        name: 'Demon Hunter',
        stages: [2, 4],
        active: 0,
        raceIcon: demon_hunter
    },
    {
        name: 'Monk',
        stages: [2, 4],
        active: 0,
        raceIcon: monk
    },
]

export const SPECIES = [...RACES, ...CLASSES].sort((a, b)=>a.name.localeCompare(b.name)).map((r, index)=>{return {...r, highlighted: true, id: index+1}})