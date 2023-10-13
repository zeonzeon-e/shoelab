import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './screen/Mainpage';
import CommunityPage from './screen/CommunityPage';
import CustomPage from './screen/Custompage';
import OrderPage from './screen/OrderPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/community' element={<CommunityPage />} />
          <Route path='/coustom' element={<CustomPage />} />
          <Route path='/order' element={<OrderPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
