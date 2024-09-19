import React, { useState } from 'react'
import { SPECIES } from '../../assets/Races'

export default function Card({isCardVisible, hero, pushRace }) {

    const excluded = ['Human', 'Mech', 'Pandaren', 'Druid']

    let new_species = SPECIES.filter(s=>!excluded.includes(s.name))

    const [cardRace, setCardRace] = useState(new_species[0].name)

    return (
        <div className={isCardVisible ? 'w-[100%] lg:justify-center flex justify-start items-center gap-[0.25rem]' : 'hidden'}
        onClick={e => {
            e.stopPropagation()
        }} >
            <select className='w-[80%] max-w-[100px] text-center text-xs flex-grow outline-none border-none rounded-[1em]' value={cardRace} onChange={
                e => setCardRace(e.target.value)
            }
            >
                {new_species.map((race, index) => (<option key={index}>{race.name}</option>))}
            </select>
            <div className='ml-auto lg:ml-0 font-bold cursor-pointer lg:hover:shadow-xl lg:shadow-black ' 
            onClick={e => {
                e.stopPropagation()
                pushRace(hero, cardRace)
            }}>+</div>
        </div>

    )
}
