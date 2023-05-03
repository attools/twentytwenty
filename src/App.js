import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reconcilation from './components/Reconcilation';
import Comparision from './components/Comparision';
import Header from './components/layouts/Header';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './actions/userAction';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser);
  }, [dispatch])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Reconcilation />} />
        <Route path="/comparisionpage" element={<Comparision />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
