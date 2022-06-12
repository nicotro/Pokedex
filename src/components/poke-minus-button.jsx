import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../services/PokeService";
import "./../style/PokePlusButton.css";

export function PokeMinusButton(props) {
  const [detail, setDetail] = useState({});
  const id = props.id;
  const btnStyle = props.btnStyle;

  useEffect(() => {
    getDetail(id).then((res) => {
      setDetail({ ...res.data });
    });
  }, []);

  const dispatch = useDispatch();
  const removeFromDeck = () => {
    dispatch({
      type: "REMOVEFROMDECK",
      payload: detail.name,
    });
    props.update(true)
  };
  
  return (
    <div className={btnStyle} onClick={removeFromDeck}>
      {/* SVG from https://icons.getbootstrap.com/icons => dash-circle.svg */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </div>
  );
}
