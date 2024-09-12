import React from 'react'

export default function Hero({ hero, pickHero, boardHeroes }) {
  const classTag = boardHeroes.includes(hero) ? "hero-item-picker picked" : "hero-item-picker"
  return (
    <div className={classTag} onClick={() => pickHero(hero)}>
      <span>{hero.name}</span>
      <span>({hero.races.join(' ')})</span>
    </div>
  )
}
