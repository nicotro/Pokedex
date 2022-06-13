import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { pokestore } from './redux/store/pokestore';
// import backgroundImage from './assets/background_pokedex_large.jpg'
// import backgroundImage from './assets/background_cards01_large.jpg'
import backgroundImage from './assets/background_cards01_large_dark.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="bg-image" style={{backgroundImage: `url(${backgroundImage})`}} >
    <Provider store={pokestore}>
      <App />
    </Provider>
  </div>
);

