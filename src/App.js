import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './screen/Mainpage';
import CommunityPage from './screen/CommunityPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/community' element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
