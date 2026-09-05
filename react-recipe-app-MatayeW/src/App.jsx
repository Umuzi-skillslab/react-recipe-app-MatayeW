
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <>

    <Navbar />

    <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/recipes" element={<h1>Recipes</h1>} />
    <Route path="/meal-planner" element={<h1>Meal Planner</h1>} />
    <Route path="/favorites" element={<h1>Favorites</h1>} />
    </Routes>

    </>
  );
}

export default App;
