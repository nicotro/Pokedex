import { useSelector } from 'react-redux';
import './../style/moves.css'

export function Moves(props) {
    const { selected } = useSelector((state) => ({
        ...state.pokeReducer,
    }));

    return (
        <div className="moves">
            <h4>Moves</h4>
            <p>{selected.moves.map((m, i) => (<span className='text-pills text-moves' key={i}>{m.move.name} </span>))}</p>
        </div>
    );
}

