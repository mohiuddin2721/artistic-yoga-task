import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyAccount from './component/account/MyAccount';
import Home from './component/home/Home';
import Footer from './component/shared/Footer';
import NavLine from './component/shared/NavLine';

function App() {
  return (
    <div>
      <NavLine />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/account' element={<MyAccount />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
