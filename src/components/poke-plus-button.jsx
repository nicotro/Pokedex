import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../services/PokeService";
import "./../style/PokePlusButton.css";

export function PokePlusButton(props) {
  const [detail, setDetail] = useState({});
  const id = props.id;
  const btnStyle = props.btnStyle;

  useEffect(() => {
    getDetail(id).then((res) => {
      setDetail({ ...res.data });
    });
  }, []);

  const dispatch = useDispatch();
  const addToDeck = () => {
    const pokeAdd = {
      image: props.image,
      name: detail.name,
      height: detail.height,
      weight: detail.weight,
    };
    dispatch({
      type: "ADDTODECK",
      payload: pokeAdd,
    });
    props.update(true)
  };

  return (
    <div className={btnStyle} onClick={addToDeck}>
      {/* SVG from https://icons.getbootstrap.com/icons => plus-circle.svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-plus-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </div>
  );
}
