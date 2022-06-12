import { useState } from 'react';
import { useSelector } from "react-redux";
import { Badge } from 'react-bootstrap'
import { DeckList } from './deck-list-modal';
import logo_pokeball from './../assets/icon_pokeball_medium.png'
import './../style/counter.css'

export function Counter() {
    const [show, setShow] = useState(false);

    const { pokedeck } = useSelector((state) => ({ ...state.pokeReducer }));

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <li className="nav-item me-4">
            {/* trigger modal */}
            <button className="pokebutton" onClick={handleShow}>
                <img
                    src={logo_pokeball}
                    width="36"
                    height="36"
                    className="d-inline-block align-top navbar-pokeball"
                    alt="Pokeball"
                />
            </button>
            <DeckList show={show} handleClose={handleClose} />
            <Badge className='position-absolute translate-middle rounded-pill bg-primary'>
                <small>{pokedeck.length}</small>
            </Badge>
        </li>
    );
}




