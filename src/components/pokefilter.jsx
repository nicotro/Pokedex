import { Form } from 'react-bootstrap'
import { useDispatch} from 'react-redux';

export function PokeFilter() {

    const pokeTypes = [
        'normal',
        'fire',
        'water',
        'grass',
        'electric',
        'ice',
        'fighting',
        'poison',
        'ground',
        'flying',
        'psychic',
        'bug',
        'rock',
        'ghost',
        'dark',
        'dragon',
        'steel',
        'fairy'];


    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({
            type: "FILTER",
            payload: { filter: e.target.value>=0?pokeTypes[e.target.value]:"ALL" }
          });

    };

    return (
        <div>
            <Form.Select onChange={handleChange}>
                <option value="-1">Select a type</option>
                {pokeTypes.map((p, i) => (
                    <option key={i} value={i}>{p}</option>
                ))}
            </Form.Select>
        </div>
    );
}

