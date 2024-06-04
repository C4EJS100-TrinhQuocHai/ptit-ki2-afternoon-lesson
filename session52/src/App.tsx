
import { Route, Routes, useNavigate } from 'react-router-dom'
import Products from './components/products/Products'
import ProductDetail from './components/product-detail/ProductDetail'
import NotFound from './components/not-found/NotFound'
import Cart from './components/cart/Cart'

export default function App() {
    const navigate= useNavigate();
  return (
    <div>App
      <br />
      <p onClick={()=>navigate("/cart")}>giỏ hàng</p>
      {/* 
        Tạo danh sách sản phẩm ở trong component Products
        Tạo component Product từng sản phẩm
          + nút bấm xem chi tiết sản phẩm
        Tạo component ProductDetail chi tiết từng sản phẩm.

        Các bước làm:
        B1: 
       */}
       <Routes>
        <Route path='' element={<Products></Products>}>
          <Route path='/productDetail/:productId' element={<ProductDetail></ProductDetail>}>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}>
          </Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
       </Routes>
       {/* <Products></Products> */}
      
    </div>
  )
}
