import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokeCard } from "../components/PokeCard";
import { PokeFilter } from "../components/pokefilter";
import { getAll } from "../services/PokeService";
import loadingBall from "./../assets/icon_pokeball_loading.svg";
import "./../style/home.css";

export function Home() {
  const { pokemonsList, filteredList, loaded } = useSelector((state) => ({
    ...state.pokeReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemonsList.length === 0) {
      const data = getAll()
        .then((res) => {
          dispatch({
            type: "LOADPOKEMONS",
            payload: { list: res.data.results, loaded: true }
          });
        })
        .catch((err) => {
          //   console.log("axios error:", err);
          dispatch({
            type: "LOADPOKEMONS",
            payload: { list: [], loaded: false }
          });
        });
    }
  }, [loaded]);

  return (
    <div className="container home-bg pt-4">
      {!loaded
        ?
        (
          <div className="loading-ball">
            <img src={loadingBall} alt="loading..." className="loading-anim" />
          </div>
        )
        :
        (
          <>
            <div className="row mx-auto mb-4">
              <div className="col-md-4 col-sm-6 col-8 mx-auto">
                <PokeFilter />
              </div>
            </div>
            <div className="row mx-auto">
              {
              filteredList.length===0
              ?
              pokemonsList.map((p, i) => (
                <PokeCard key={i} name={p.name} id={i} />
              ))
              :
              filteredList.map((p, i) => (
                <PokeCard key={i} name={p.name} id={i} />
              ))
              }
            </div>
          </>
        )
      }
    </div>
  );
}
