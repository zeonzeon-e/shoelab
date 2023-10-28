import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import MainPage from './screen/Mainpage';
import CommunityPage from './screen/CommunityPage';
import CustomPage from './screen/Custompage';
import OrderPage from './screen/OrderPage';
import LoginPage from './screen/LoginPage';

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/variable/woff2/SUITE-Variable.css" rel="stylesheet"></link>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />

          <Route path='/community' element={<CommunityPage />} />
          <Route path='/community/:id'/>
          <Route path='/custom' element={<CustomPage />} />
          <Route path='/order' element={<OrderPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
