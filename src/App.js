import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reconcilation from './components/pages/Reconcilation';
import Comparision from './components/pages/Comparision';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reconcilation/>}/>
        <Route path="/comparisionpage" element={<Comparision/>}/>
      </Routes>
    </Router>
  );
}

export default App;
