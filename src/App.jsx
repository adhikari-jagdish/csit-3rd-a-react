import { Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Movies from './components/movies';
import NavBar from './components/nav-bar';
import PageNotFound from './components/page_not_found';
import ContactUs from './components/contact-us/contact-us';
import Counter from './components/counter';
import Component1 from './components/component-1';
import ComponentUseContext from './components/component-use-state';
import Login from './components/login/login';

//comment
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/component-1" element={<Component1 />} />
        <Route path="/component-use-context" element={<ComponentUseContext />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App
