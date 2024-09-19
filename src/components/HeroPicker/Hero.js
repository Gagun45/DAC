import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Hero({ hero, pickHero, boardHeroes, highlightRace, highlightedSpecies }) {

    let id = hero.id
    let includesBoard = false
    boardHeroes.map(h => {
      if (h.id == id) includesBoard = true
    })
  const classTag = `hero-item-picker ${hero.name=='Ringmaster'&&'ringmaster'} ${includesBoard && 'picked'} ${hero.pool==false&&'outOfPool'}`
  return (
    <div className={classTag} onClick={() => pickHero(hero)}>
      <div className='hero-title'>
        {hero.icon&&(<img className='w-[48px] aspect-[7/4]' key={uuidv4()} src={hero.icon}/>)}
        <span>{hero.name}</span>
      </div>
      <div className='hero-title'>
      {hero.races.map(r=>{
        let matchedRace = highlightedSpecies.find(item=> item.name==r)
        let imgClassTag = `hero-race-img ${matchedRace.highlighted ? 'highlighted' : 'passive'}`
        return (<img key={uuidv4()} onClick={e=>{
          e.stopPropagation()
          highlightRace(matchedRace)
        }
        } className={imgClassTag}  src={matchedRace.raceIcon} />)
      })}
      </div>
    </div>
  )
}
