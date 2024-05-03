import Header from './components/Header/Header';
import './App.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
