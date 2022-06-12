import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/header';
import { Home } from './containers/home';
import { Detail } from './containers/detail';
import './style/App.css';

function App() {
  return (
    <div className="App mx-auto">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
