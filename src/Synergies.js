import React, { useState, useEffect } from 'react'
import Synergy from './Synergy'


export default function Synergies({activeSynergies, wizards, countAS}) {

    return (
        <div className='synergies'>
            {
                activeSynergies.map((synergy, index) => {
                    if (synergy.active) return <Synergy countAS={countAS} wizards={wizards} key={index} synergy={synergy} />
                })
            }
        </div>
    )
}
