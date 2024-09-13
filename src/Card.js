import React, { useState } from 'react'
import { SPECIES } from './assets/Races'

export default function Card({ hero, pushRace }) {

    const excluded = ['Human', 'Mech', 'Pandaren', 'Druid']

    let new_species = SPECIES.filter(s=>!excluded.includes(s.name))

    const [cardRace, setCardRace] = useState(new_species[0].name)

    return (
        <div onClick={e => {
            e.stopPropagation()
        }} >
            <select value={cardRace} onChange={
                e => setCardRace(e.target.value)
            }
            >
                {new_species.map((race, index) => (<option key={index} >{race.name}</option>))}
            </select>
            <span onClick={e => {
                e.stopPropagation()
                pushRace(hero, cardRace)
            }}>+</span>
        </div>

    )
}
