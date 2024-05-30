
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Notfound from './components/Notfound';
import About from './components/about/About';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <div>
      REACT ROUTER DOM
      {/* 
         là 1 thư viện.
         tạo một bộ định tuyến cho trang web của mình tức là nó sẽ cho phép
         react element được hiển thị ứng với các đường dẫn URL
         cách dùng:
         cài đặt: npm i react-router-dom
         dùng component browserRouter để cung cấp bộ định tuyến cho toàn app.d

       */}
      <Routes>
        <Route path='' element={<Home></Home>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/news' element={<News></News>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  )
}
