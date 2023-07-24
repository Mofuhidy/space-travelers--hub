import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './components/Missions';
import Myprofile from './pages/Myprofile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
