import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import RandomCats from './components/RandomCats'
import RandomDogs from './components/RandomDogs'
import Four0Four from './components/404'

function Container() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/randomCats" element={<RandomCats />} />
        <Route path="/randomDogs" element={<RandomDogs />} />
        <Route path="*" element={<Four0Four />} />
      </Routes>
    </div>
  );
}

export default Container;
