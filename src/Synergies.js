import React, { useState, useEffect } from 'react'
import Synergy from './Synergy'


export default function Synergies({activeSynergies, wizards, countAS, demonHunters, demons}) {

    return (
        <div className='synergies'>
            {
                activeSynergies.map((synergy, index) => {
                    if (synergy.active) return <Synergy demonHunters={demonHunters} demons={demons} countAS={countAS} wizards={wizards} key={index} synergy={synergy} />
                })
            }
        </div>
    )
}
