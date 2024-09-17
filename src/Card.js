import React, { useState } from 'react'
import { SPECIES } from './assets/Races'

export default function Card({isCardVisible, hero, pushRace }) {

    const excluded = ['Human', 'Mech', 'Pandaren', 'Druid']

    let new_species = SPECIES.filter(s=>!excluded.includes(s.name))

    const [cardRace, setCardRace] = useState(new_species[0].name)

    return (
        <div className={isCardVisible ? 'card' : 'hidden'}
        onClick={e => {
            e.stopPropagation()
        }} >
            <select className='w-[125px] outline-none border-none py-[0.3em] px-[0.5em] rounded-[1em]' value={cardRace} onChange={
                e => setCardRace(e.target.value)
            }
            >
                {new_species.map((race, index) => (<option key={index}>{race.name}</option>))}
            </select>
            <span className='w-[1.75em] aspect-square font-bold rounded-[50%] cursor-pointer bg-cyan-300 text-center
            hover:bg-green-500
            ' onClick={e => {
                e.stopPropagation()
                pushRace(hero, cardRace)
            }}>+</span>
        </div>

    )
}
