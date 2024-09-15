import React from 'react'

export default function Hero({ hero, pickHero, boardHeroes, highlightRace, highlightedSpecies }) {

    let id = hero.id
    let includesBoard = false
    boardHeroes.map(h => {
      if (h.id == id) includesBoard = true
    })
  const classTag = `hero-item-picker ${includesBoard && 'picked'} ${hero.pool==false&&'outOfPool'}`
  return (
    <div className={classTag} onClick={() => pickHero(hero)}>
      <div className='hero-title'>
        {hero.icon&&(<img key={hero.name} src={hero.icon} width={60} height={40}/>)}
        <span>{hero.name}</span>
      </div>
      <div className='hero-race-div'>
      {hero.races.map(r=>{
        let matchedRace = highlightedSpecies.find(item=> item.name==r)
        let imgClassTag = `hero-race-img ${matchedRace.highlighted ? 'highlighted' : 'passive'}`
        return (<img onClick={e=>{
          e.stopPropagation()
          highlightRace(matchedRace)
          console.log(highlightedSpecies)
        }
        } className={imgClassTag}  src={matchedRace.raceIcon} width={30} height={30}/>)
      })}
      </div>
    </div>
  )
}
