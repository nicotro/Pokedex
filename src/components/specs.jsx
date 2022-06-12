import { useSelector } from 'react-redux';
import './../style/specs.css'

export function Specs(props) {

    const { selected } = useSelector((state) => ({
        ...state.pokeReducer,
    }));

    return (
        <div className="specs">
            <div className='specs-text'>
                            <h4>height:</h4>
                            <p>{selected.height}</p>
                            <h4>weight:</h4>
                            <p>{selected.weight}</p>
                            <h4>XP:</h4>
                            <p>{selected.base_experience}</p>
                            <h4>abilities:</h4>
                            <p>{selected.abilities.map((a, i) => (<span className='text-pills abilities' key={i}>{a.ability.name} </span>))}</p>
                            <h4>type:</h4>
                            <p>{selected.types.map((a, i) => (<span className='text-pills types' key={i}>{a.type.name} </span>))}</p>
            </div>
        </div>
    );
}
