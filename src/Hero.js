import React from 'react'

export default function Hero({ hero, pickHero, boardHeroes }) {

    let id = hero.id
    let includesBoard = false
    boardHeroes.map(h => {
      if (h.id == id) includesBoard = true
    })
  const classTag = `hero-item-picker ${includesBoard && 'picked'} ${hero.pool==false&&'outOfPool'}`
  return (
    <div className={classTag} onClick={() => pickHero(hero)}>
      <span>{hero.name}</span>
      <span>({hero.races.join(' ')})</span>
    </div>
  )
}
