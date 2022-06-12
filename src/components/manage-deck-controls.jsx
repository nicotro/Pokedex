import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PokeMinusButton } from "./poke-minus-button";
import { PokePlusButton } from "./poke-plus-button";
import "./../style/manageDeckControls.css"

export function ManageDeckControls(props) {
    const [inDeck, setInDeck] = useState(0)
    const [updatePlus, setUpdatePlus] = useState(false)
    const [updateMinus, setUpdateMinus] = useState(false)
    let counter = 0

    const { pokedeck } = useSelector((state) => ({ ...state.pokeReducer }));

    useEffect(() => {
        pokedeck.forEach(p => {
            if (props.name == p.name)
                counter++;
        });
        setInDeck(counter)
    }, [updatePlus, updateMinus, pokedeck]);

    const handleUpdatePlus = (childData) => {
        setUpdatePlus(childData);
        setInDeck(inDeck + 1);
    }

    const handleUpdateMinus = (childData) => {
        setUpdateMinus(childData);
        setInDeck(inDeck - 1);
    }

    return (
        <>
            {inDeck > 0 &&
                <>
                    <PokeMinusButton id={props.id} image={props.image} update={handleUpdateMinus} btnStyle="poke-plus poke-plus-minus" />
                    {/* <span>{inDeck}</span> */}
                    <span className="card-pill">{inDeck}</span>
                </>
            }
            <PokePlusButton id={props.id} image={props.image} update={handleUpdatePlus} btnStyle="poke-plus" />
        </>
    );
}

