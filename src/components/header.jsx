import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./../style/header.css";
import logo_pokemon_270 from "./../assets/logo_pokemon.png";
import logo_pokemon_84 from "./../assets/logo_pokemon_small.png";
import { Counter } from "./counter";
import { DeckClear } from "./deck-clear-button";

export function Header() {
  return (
    <Navbar className="navbar-dark sticky-top bg-dark navbar navbar-expand pt-3 navbar-shadow">
      <ul className="navbar-nav justify-content-start col-4">
        <li className="nav-item ms-4">
          <Navbar.Brand href="https://www.pokemon.com/fr/" target="_blank" title="official fr Pokemon website">
            <picture>
              <source srcSet={`${logo_pokemon_84} 84w`} media="(max-width: 600px)"/>
              <img srcSet={`${logo_pokemon_270} 270w`} height="42" alt="Pokemon" />
            </picture>
          </Navbar.Brand>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-navbar li-home" to="/">
            {/* SVG from https://icons.getbootstrap.com/icons => house-fill.svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <h3 className="h3-header justify-content-center col-4">Pokedex React</h3>
      <ul className="navbar-nav justify-content-end col-4">
        <DeckClear />
        <Counter />
      </ul>
    </Navbar>
  );
}
