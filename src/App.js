import HeroPicker from './HeroPicker';
import Board from './Board';
import Synergies from './Synergies';
import './App.css';
import { useState, useEffect } from 'react';
import { HEROES } from './assets/Heroes';
import { SPECIES } from './assets/Races';



function App() {

  const [boardHeroes, setBoardHeroes] = useState([])
  const [finalActiveSynergies, setFinalActiveSynergies] = useState([])
  const [wizards, setWizards] = useState(0)
  const [countAS, setCountAS] = useState(0)
  const [demons, setDemons] = useState(0)
  const [demonHunters, setDemonHunters] = useState(0)
  let allRaces, newSynergies

  useEffect(() => {
    let DEFAULT_SYNERGIES = JSON.parse(JSON.stringify(SPECIES))
    allRaces = []
    allRaces = boardHeroes.map(hero => hero.races).flat()
    newSynergies = DEFAULT_SYNERGIES
    allRaces.map(race => {
      newSynergies.map(synergy => {
        if (synergy.name == race) synergy.active += 1
      })
    })
    setFinalActiveSynergies(newSynergies)
  }, [boardHeroes])
  useEffect(() => {
    let w = finalActiveSynergies.find(r => r.name == 'Wizard')
    if (w) setWizards(w.active)
    let d = finalActiveSynergies.find(r => r.name == 'Demon')
    if (d) setDemons(d.active)
    let dh = finalActiveSynergies.find(r => r.name == 'Demon Hunter')
    if (dh) setDemonHunters(dh.active)

    setCountAS(finalActiveSynergies.filter(r => (r.name != 'Wizard' && r.active >= r.stages[0])).length)
  }, [finalActiveSynergies])


  function pickHero(hero) {

    let id = hero.id
    let includesBoard = false
    boardHeroes.map(h => {
      if (h.id == id) includesBoard = true
    })

    if (includesBoard) {
      const newHeroes = boardHeroes.filter(item => item.id !== hero.id)
      setBoardHeroes(newHeroes)
    } else setBoardHeroes(prevHeroes => ([...prevHeroes, hero]))
  }

  //   if (boardHeroes.includes(hero)) {
  //     const newHeroes = boardHeroes.filter(item => item !== hero)
  //     setBoardHeroes(newHeroes)
  //   }
  //   else setBoardHeroes(prevHeroes => ([...prevHeroes, hero]))
  // }


  function deleteHero(hero) {
    const newHeroes = boardHeroes.filter(item => item !== hero)
    setBoardHeroes(newHeroes)
  }

  function pushRace(hero, race) {
    setBoardHeroes(boardHeroes.map(h => {
      if (h == hero && !h.races.includes(race)) { return { ...hero, races: [...h.races, race] } }
      else return h
    }))
  }

  return (
    <div className='container'>
      <HeroPicker heroes={HEROES} pickHero={pickHero} boardHeroes={boardHeroes} />
      <Board boardHeroes={boardHeroes} deleteHero={deleteHero} pushRace={pushRace} />
      <Synergies activeSynergies={finalActiveSynergies} demonHunters={demonHunters} demons={demons} wizards={wizards} countAS={countAS} />
    </div>
  );
}

export default App;
