import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reconcilation from './components/Reconcilation';
import Comparision from './components/Comparision';
import Header from './components/layouts/Header';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Reconcilation/>}/>
        <Route path="/comparisionpage" element={<Comparision/>}/>
      </Routes>
    </Router>
  );
}

export default App;
