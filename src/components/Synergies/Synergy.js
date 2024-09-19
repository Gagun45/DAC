import BrickGrid from "./BrickGrid"

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
    <div className="synergy w-0 flex flex-col gap-[0.2em] items-center justify-end animate-width10percent max-w-[100px]">
      <BrickGrid stages={race.stages} active={race.active}/>
      <img className={`w-3/5 aspect-[3/2] ${race.active >= race.stages[0] ? 'opacity-100 outline-2 outline-black' : 'opacity-50'}` }src={race.raceIcon}/>
    </div>
  )
}
