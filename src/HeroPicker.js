import React from 'react'
import Hero from './Hero'

export default function HeroPicker({heroes, pickHero, boardHeroes, highlightRace, highlightedSpecies}) {
  return (
    <div className='hero-picker'>
        {
          <div className='flex-column ones'>
            <div className='grid-caption'>1 cost</div>
            {heroes.filter(hero=>hero.cost=='one').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='flex-column twos'>
            <div className='grid-caption'>2 cost</div>
          {heroes.filter(hero=>hero.cost=='two').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='flex-column threes'>
            <div className='grid-caption'>3 cost</div>
          {heroes.filter(hero=>hero.cost=='three').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='flex-column fours'>
            <div className='grid-caption'>4 cost</div>
         { heroes.filter(hero=>hero.cost=='four').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='flex-column fives'>
            <div className='grid-caption'>5 cost</div>
          {heroes.filter(hero=>hero.cost=='five').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
    </div>
  )
}