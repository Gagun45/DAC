import React from 'react'
import Card from './Card'
import { MAX_BOARD_CAPACITY } from '../../App'
import { SPECIES } from '../../assets/Races'
import {v4 as uuidv4} from 'uuid'


export default function Board({ clearBoard, isCardVisible, toggleCard, boardHeroes, deleteHero, pushRace }) {

  return (
    <div className='board w-full min-h-max bg-[rgba(255,255,255,0.4)] h-0 flex flex-col items-center gap-[20%] opacity-1
    has-[.hero-item-board]:flex-grow
    has-[.hero-item-board]:h-max
    lg:flex-grow
    lg:pt-[48px]
    '>
      <div className='p-2 board-grid w-5/6 flex flex-wrap justify-center gap-2
      has-[.hero-item-board]:mb-[1em]
      lg:gap-6
      '>
        {boardHeroes.map((hero) => {

          return (

            <>
              <div key={hero.name}
                className={`hero-item-board animate-opacity0to1 rounded-t-3xl flex flex-col items-center justify-start overflow-hidden flex-wrap p-[0.2rem] gap-[0.2rem] w-[28%] md:w-[14%] lg:w-[18%]
                  ${hero.cost}`}
              >{hero.icon ? (<img key={uuidv4()} className='shadow-md shadow-black rounded-t-3xl w-full aspect-[2/1] cursor-pointer' onClick={() => deleteHero(hero)} src={hero.icon} />) : <span className='name'>{hero.name}</span>}
                <div key={uuidv4()} className='flex my-auto gap-[0.2rem] flex-wrap justify-center w-full'>
                  {hero.races.map(r => {
                    return (<img key={uuidv4()} className='shadow-sm shadow-black w-[25%] aspect-[3/2]' src={SPECIES.find(item => item.name == r).raceIcon} />)
                  })}
                </div>
                <Card isCardVisible={isCardVisible} pushRace={pushRace} hero={hero} />
              </div>
            </>
          )
        })}
      </div>
      <div className={`flex items-center gap-4 mb-2 mt-auto ${boardHeroes.length||'hidden'}`}>
        <button className='board-btn' onClick={toggleCard}>{isCardVisible ? "Hide Card" : "Show Card"}</button>
        <span className='min-w-[max-content]'>{boardHeroes.length&&`[${boardHeroes.length} / ${MAX_BOARD_CAPACITY}]`}</span>
        <button className='board-btn' onClick={clearBoard}>Clear Board</button>
      </div>
    </div>
  )
}
