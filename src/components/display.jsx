import { Row, Col } from "react-bootstrap";
import defaultImage from "./../assets/default_pokeball_medium.png";
import { ManageDeckControls } from "./manage-deck-controls";
import { useSelector } from "react-redux";
import "./../style/display.css";

export function Display() {
  const { selected } = useSelector((state) => ({
    ...state.pokeReducer,
  }));
  const id = selected.id;

  const defaultPicture = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="display">
      <h4>{selected.name}</h4>
      <Row className="mx-4">
        <Col>
          <img
            onError={defaultPicture}
            src={selected.image[0]}
            className="display-img"
            alt="pokemon view 1"
          />
        </Col>
        <Col>
          <img
            onError={defaultPicture}
            src={selected.image[1]}
            className="display-img"
            alt="pokemon view 2"
          />
        </Col>
      </Row>
      <Row className="mx-4">
        <Col>
          <img
            onError={defaultPicture}
            src={selected.image[2]}
            className="display-img"
            alt="pokemon view 3"
          />
        </Col>
        <Col>
          <img
            onError={defaultPicture}
            src={selected.image[3]}
            className="display-img"
            alt="pokemon view 4"
          />
        </Col>
      </Row>
      <Row className="m-0 mb-1">
        <div className="mx-auto col-6 mb-4">
          <ManageDeckControls id={id - 1} image={selected.image[0]} name={selected.name} />
        </div>
      </Row>
    </div>
  );
}
