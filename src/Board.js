import React from 'react'
import Card from './Card'

export default function Board({boardHeroes, deleteHero, pushRace}) {
  return (
    <div className='board'>
        {boardHeroes.map((hero, index)=>{
            return (
                
                <div key={index}
                onClick={()=>deleteHero(hero)}
                className='hero-item-board'
                >{hero.name} ({hero.races.join(' ')})
                <Card pushRace={pushRace} hero={hero}/>
                </div>
            )
        })}
    </div>
  )
}
