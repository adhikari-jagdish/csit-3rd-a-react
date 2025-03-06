import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Movies from './components/movies';
import NavBar from './components/nav-bar';

//comment
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
     
    </Routes>
  );
}

export default App
