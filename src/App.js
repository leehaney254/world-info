import { Routes, Route } from 'react-router-dom';
import Details from './Pages/Details';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
