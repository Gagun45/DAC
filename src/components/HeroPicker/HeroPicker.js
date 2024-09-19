import React from 'react'
import Hero from './Hero'

export default function HeroPicker({ heroes, pickHero, boardHeroes, highlightRace, highlightedSpecies }) {
  return (
    <div className='hero-picker-container w-[90%] justify-center items-center'>
      <div className='hero-picker'>
        {
          <div className='border border-black'>
            <div className='grid-caption one'>1 cost</div>
            {heroes.filter(hero => hero.cost == 'one').map((hero, index) => (
              <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes} />
            ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption two'>2 cost</div>
            {heroes.filter(hero => hero.cost == 'two').map((hero, index) => (
              <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes} />
            ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption three'>3 cost</div>
            {heroes.filter(hero => hero.cost == 'three').map((hero, index) => (
              <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes} />
            ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption four'>4 cost</div>
            {heroes.filter(hero => hero.cost == 'four').map((hero, index) => (
              <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes} />
            ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption five'>5 cost</div>
            {heroes.filter(hero => hero.cost == 'five').map((hero, index) => (
              <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes} />
            ))}
          </div>
        }
      </div>
      <div className='stickyHeroes mx-auto opacity-100 rounded-b-full transition-opacity duration-500 hidden lg:flex bg-lime-400 items-center justify-center w-[80%] text-center h-[37px]'>CHOOSE A HERO</div>
    </div>
  )
}