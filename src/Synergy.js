import BrickGrid from "./BrickGrid"
import Brick from "./Brick"

export default function Synergy({ countAS, synergy, wizards, demonHunters, demons}) {

  let race = {...synergy}

  if (demons>1 && demonHunters<2) {
    countAS-=1
    if (race.name=='Demon') race={...race, active: 0}
  }
  

  if (wizards>=2) wizarded(race)
    
  function twoWizards(r) {
      if (r.name=='Druid') return
      if (r.stages[2]) {r.stages = [r.stages[0], r.stages[1]-1, r.stages[2]-1]}
      else if (r.stages[1]&&r.stages[1]>2) {r.stages = [r.stages[0], r.stages[1]-1]}
  }

  function wizarded(r) {
    twoWizards(r)
    if (wizards>=3) { 
      if (countAS==1){
        if (r.name!='Wizard'&&r.active>=r.stages[0]) r.active=r.stages.slice(-1)[0]
      } else return
    }
  }

  return (
    <div className="synergy">
      <div className={race.active >= race.stages[0] ? 'active' : null}>{race.name}: {race.active}</div>
      <BrickGrid stages={race.stages} active={race.active}/>
    </div>
  )
}
