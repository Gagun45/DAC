import React from 'react'
import Card from './Card'
import { MAX_BOARD_CAPACITY } from './App'
import { SPECIES } from './assets/Races'


export default function Board({ clearBoard, isCardVisible, toggleCard, boardHeroes, deleteHero, pushRace }) {

  return (
    <div className='board'>
      <div className='board-grid'>
        {boardHeroes.map((hero, index) => {

          return (

            <>
              <div key={index}
                className={`hero-item-board ${hero.cost}`}
              >{hero.icon ? (<img className='hero-item-board-icon' onClick={() => deleteHero(hero)} src={hero.icon} />) : <span className='name'>{hero.name}</span>}
                <div className='races'>
                  {hero.races.map(r => {
                    return (<img className='hero-item-board-race' src={SPECIES.find(item => item.name == r).raceIcon} />)
                  })}
                </div>
                <Card isCardVisible={isCardVisible} pushRace={pushRace} hero={hero} />
              </div>
            </>
          )
        })}
      </div>
      <div className={`board-btns ${boardHeroes.length||'hide'}`}>
        <span>{boardHeroes.length&&`[${boardHeroes.length} / ${MAX_BOARD_CAPACITY}]`}</span>
        <button onClick={toggleCard}>{isCardVisible ? "Hide Card" : "Show Card"}</button>
        <button onClick={clearBoard}>Clear Board</button>
      </div>
    </div>
  )
}
