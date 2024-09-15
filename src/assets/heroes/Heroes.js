import { ones } from "./ones/onecost"
import { twos } from "./twos/twocost"
import { threes } from "./threes/threecost"
import { fours } from "./fours/fourcost"
import { fives } from "./fives/fivecost"

let prevHeroes = [...ones, ...twos, ...threes, ...fours, ...fives]

let newPrevHeroes = [...prevHeroes]
prevHeroes = newPrevHeroes.map(hero=>{
    switch(hero.cost){
        case 'one': return {...hero, costNumber: 1}
        case 'two': return {...hero, costNumber: 2}
        case 'three': return {...hero, costNumber: 3}
        case 'four': return {...hero, costNumber: 4}
        case 'five': return {...hero, costNumber: 5}
    }
})

export const HEROES = prevHeroes.map((hero, index) =>({...hero,id: index}))