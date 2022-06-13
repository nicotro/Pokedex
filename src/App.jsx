import { Routes, Route, HashRouter } from 'react-router-dom'
import { Header } from './components/header';
import { Home } from './containers/home';
import { Detail } from './containers/detail';
import './style/App.css';

function App() {
  return (
    <div className="App mx-auto">
        <HashRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
