import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Assignment/Footer/Footer';
import Header from './Assignment/Home/Header';
import Home from './Assignment/Home/Home.js/Home';
import Purchase from './Assignment/Purchase/Purchase';
import Login from './Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
