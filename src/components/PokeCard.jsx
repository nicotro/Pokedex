import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardBack from "./../assets/background_card_medium.jpg";
import defaultImage from "./../assets/default_pokeball_medium.png";
import { CardDetailButton } from "./card-detail-button";
import { ManageDeckControls } from "./manage-deck-controls";
import "./../style/card.css";
import { getDetail } from "../services/PokeService";

export function PokeCard(props) {
  const [inDeck, setInDeck] = useState(0)

  const id = props.id;
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`;
  const { pokedeck } = useSelector((state) => ({ ...state.pokeReducer }));

  //get type from details for the filter function
  const dispatch = useDispatch();



  useEffect(() => {
    setInDeck(0);
    pokedeck.forEach(p => {
      if (props.name == p.name)
        setInDeck(inDeck + 1);
    });

    // getDetail(id)
    //   .then((res) => {
    //     console.log(res.data.types);
    //     dispatch({
    //       type: "SETTYPE",
    //       payload: res.data.types,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: "SETTYPE",
    //       payload: "",
    //     });
    //   });

  }, []);

  const defaultPicture = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3">
      <Card className="mx-auto pokecard w-100">
        <Card.Img
          src={cardBack}
          alt="Card image"
          className="mx-auto mb-3 pokecard-img shadow"
          style={{ width: "10rem" }}
        />
        <Card.Body className="card-info">
          <Card.Title>
            <img
              onError={defaultPicture}
              src={image}
              style={{ marginTop: "10px" }}
            />
          </Card.Title>
          <Card.Text className="card-id">#{props.id + 1}</Card.Text>
          <Card.Text className="card-name">{props.name}</Card.Text>
        </Card.Body>
        <div className="pokecard-overlay m-0">
          <div className="container h-50 pt-4 px-0 mt-3">
            <Link to={"/detail/" + props.id}>
              <CardDetailButton />
            </Link>
          </div>
          <div className="container h-50 pt-2 px-0">
            <ManageDeckControls id={props.id} image={image} name={props.name} />
          </div>
        </div>
      </Card>
    </div>
  );
}
