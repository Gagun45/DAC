import Synergy from './Synergy'


export default function Synergies({activeSynergies, wizards, countAS, demonHunters, demons}) {

    return (
        <div className='bg-[rgba(122,228,255,0.4)] w-full h-0 flex justify-center items-end gap-[1em] flex-wrap opacity-0 transition-opacity duration-[400ms] ease-in-out
        has-[.synergy]:h-auto
        has-[.synergy]:opacity-100
        has-[.synergy]:p-[1em]
        has-[.synergy]:border-black
        has-[.synergy]:border
        '>
            {
                activeSynergies.map((synergy, index) => {
                    if (synergy.active) return <Synergy demonHunters={demonHunters} demons={demons} countAS={countAS} wizards={wizards} key={index} synergy={synergy} />
                })
            }
        </div>
    )
}
