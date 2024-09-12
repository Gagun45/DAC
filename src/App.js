import HeroPicker from './HeroPicker';
import Board from './Board';
import Synergies from './Synergies';
import './App.css';
import { useState, useEffect} from 'react';
import { HEROES } from './assets/Heroes';
import { SPECIES } from './assets/Races';



function App() {

  const [boardHeroes, setBoardHeroes] = useState([])
  const [finalActiveSynergies, setFinalActiveSynergies] = useState([])
  const [wizards, setWizards] = useState(0)
  const [countAS, setCountAS] = useState(0)
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
  useEffect(()=>{
    let w = finalActiveSynergies.find(r=>r.name=='Wizard')
    if (w) setWizards(w.active)
    let d = finalActiveSynergies.find(r=>r.name=='Demon')
    let dh = finalActiveSynergies.find(r=>r.name=='Demon Hunter')
    if (d&&d.active>1) {
      if (dh&&dh.active>=2){
        d.active=1
      } else d.active=0
      
    }
    setCountAS(finalActiveSynergies.filter(r=>(r.name!='Wizard'&&r.active>=r.stages[0])).length)
  }, [finalActiveSynergies])


  function pickHero(hero) {
    if (boardHeroes.includes(hero)) {
      const newHeroes = boardHeroes.filter(item => item !== hero)
      setBoardHeroes(newHeroes)
    }
    else setBoardHeroes(prevHeroes => ([...prevHeroes, hero]))
  }

  function deleteHero(hero) {
    const newHeroes = boardHeroes.filter(item => item !== hero)
    setBoardHeroes(newHeroes)
  }

  return (
    <div className='container'>
      <HeroPicker heroes={HEROES} pickHero={pickHero} boardHeroes={boardHeroes}/>
      <Board boardHeroes={boardHeroes} deleteHero={deleteHero} />
      <Synergies activeSynergies={finalActiveSynergies} wizards={wizards} countAS={countAS}/>
    </div>
  );
}

export default App;
