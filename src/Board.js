import React from 'react'
import Card from './Card'
import { MAX_BOARD_CAPACITY } from './App'
import { SPECIES } from './assets/Races'


export default function Board({ clearBoard, isCardVisible, toggleCard, boardHeroes, deleteHero, pushRace }) {

  return (
    <div className='board min-w-[250px] w-full bg-[rgba(255,255,255,0.4)] h-auto flex-grow flex flex-col items-center flex-wrap gap-[20%] opacity-0 transition-opacity duration-300 ease-in-out
    has-[.hero-item-board]:opacity-100
    has-[.hero-item-board]:p-[2em]
    '>
      <div className='board-grid min-w-[150px] w-4/5 flex flex-wrap justify-center gap-[3em]
      has-[.hero-item-board]:mb-[1em]
      '>
        {boardHeroes.map((hero, index) => {

          return (

            <>
              <div key={index}
                className={`hero-item-board flex flex-col items-center justify-center rounded-[1em] overflow-hidden flex-wrap gap-[1em] min-w-[200px] max-w-[30%] p-[1em] animate-scaleAnimation
                  ${hero.cost}`}
              >{hero.icon ? (<img className='min-w-[40px] w-full aspect-[2/1] cursor-pointer' onClick={() => deleteHero(hero)} src={hero.icon} />) : <span className='name'>{hero.name}</span>}
                <div className='flex gap-[0.5em] flex-wrap justify-center min-w-[100px] w-full'>
                  {hero.races.map(r => {
                    return (<img className='w-[50px] aspect-[3/2] outline-1 outline-black animate-scaleAnimation50' src={SPECIES.find(item => item.name == r).raceIcon} />)
                  })}
                </div>
                <Card isCardVisible={isCardVisible} pushRace={pushRace} hero={hero} />
              </div>
            </>
          )
        })}
      </div>
      <div className={`flex items-center gap-[1em] ${boardHeroes.length||'hidden'}`}>
        <button className='board-btn hover:bg-[rgb(130,130,255)]' onClick={toggleCard}>{isCardVisible ? "Hide Card" : "Show Card"}</button>
        <span className='min-w-[max-content]'>{boardHeroes.length&&`[${boardHeroes.length} / ${MAX_BOARD_CAPACITY}]`}</span>
        <button className='board-btn hover:bg-[rgb(160,98,16)]' onClick={clearBoard}>Clear Board</button>
      </div>
    </div>
  )
}
