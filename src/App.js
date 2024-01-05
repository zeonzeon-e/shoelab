import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import MainPage from './screen/Mainpage';
import CommunityPage from './screen/CommunityPage';
import CustomPage from './screen/Custompage';
import OrderPage from './screen/OrderPage';
import LoginPage from './screen/LoginPage';
import DetailPage from './screen/ItemDetailPage';
import OrderDetailPage from './screen/OrderDetailPage';
import JoinPage from './screen/JoinPage';
import MyPage from './screen/MyPage';
import WritePage from './screen/Writepage';

function App() {



  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/variable/woff2/SUITE-Variable.css" rel="stylesheet"></link>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />

          <Route path='/board' element={<CommunityPage />} />
          <Route path='/board/:id'/>
          <Route path='/custom' element={<CustomPage />} />
          <Route path='/order' element={<OrderPage />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/join' element={<JoinPage/>}/>
          <Route path='/board/detail/:idx' element={<DetailPage />}/>
          <Route path='/order/detail' element={<OrderDetailPage />}/>
          <Route path='/mypage' element={<MyPage />}/>
          <Route path='/write' element={<WritePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
