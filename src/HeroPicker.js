import React from 'react'
import Hero from './Hero'

export default function HeroPicker({heroes, pickHero, boardHeroes, highlightRace, highlightedSpecies}) {
  return (
    <div className='py-[1em] px-0 max-w-[90%] my-0 mx-auto text-white flex text-[1.1rem] flex-wrap justify-center gap-[2em] border-collapse'>
        {
          <div className='border border-black'>
            <div className='grid-caption one'>1 cost</div>
            {heroes.filter(hero=>hero.cost=='one').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption two'>2 cost</div>
          {heroes.filter(hero=>hero.cost=='two').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption three'>3 cost</div>
          {heroes.filter(hero=>hero.cost=='three').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption four'>4 cost</div>
         { heroes.filter(hero=>hero.cost=='four').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
        {
          <div className='border border-black'>
            <div className='grid-caption five'>5 cost</div>
          {heroes.filter(hero=>hero.cost=='five').map((hero, index)=>(
            <Hero key={index} highlightRace={highlightRace} highlightedSpecies={highlightedSpecies} hero={hero} pickHero={pickHero} boardHeroes={boardHeroes}/>
          ))}
          </div>
        }
    </div>
  )
}