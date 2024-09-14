import React from 'react'
import Card from './Card'
import { MAX_BOARD_CAPACITY } from './App'

export default function Board({ clearBoard, isCardVisible, toggleCard, boardHeroes, deleteHero, pushRace }) {
  
  return (
    <div className='board'>
      <div className='board-grid'>
        {boardHeroes.map((hero, index) => {

          return (

            <div key={index}
              onClick={() => deleteHero(hero)}
              className={`hero-item-board ${hero.cost}`}
            ><span className='name'>{hero.name}</span> <span className='races'>({hero.races.join(' ')})</span>
              <Card isCardVisible={isCardVisible} pushRace={pushRace} hero={hero} />
            </div>
          )
        })}
      </div>
      <div className='board-btns'>
          <span>{boardHeroes.length ? `[${boardHeroes.length} / ${MAX_BOARD_CAPACITY}]` : null}</span>
          <button onClick={toggleCard}>{isCardVisible ? "Hide Card" : "Show Card"}</button>
          <button onClick={clearBoard}>Clear Board</button>
        </div>
    </div>
  )
}
