import { useState, useMemo } from "react";

interface Product {
  id: number,
  name: string,
  price: number,
  quantity: number,
}
let cart: Product[] = [
  {
    id: 1,
    name: "iphone16",
    price: 5000,
    quantity: 5
  },
  {
    id: 1,
    name: "iphone17",
    price: 6000,
    quantity: 6
  },
  {
    id: 1,
    name: "iphone18",
    price: 7000,
    quantity: 7
  },
]


export default function UseMemo() {
  const [count, setCount] = useState<number>(0);
  const [myCart, setMyCart] = useState<Product[]>(cart);
  /* 
    ở đây có logic tính toán như sau
  */
  // đi tính toán giá phải trả

  let price = useMemo(() => {
    let payment = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity
    }, 0);
    return payment
  }, [myCart])
  // khai báo hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    let newProduct: Product = {
      id: 11,
      name: "iphone20",
      price: 8000,
      quantity: 2,
    }
    // thêm 
    myCart.push(newProduct);
    setMyCart([...myCart]);
  }
  return (
    <div>
      UseMemo
      {/* memory : ghi nhớ 
          sinh ra giải quyết vấn đề gì? 
          đây là hook trong reactjs
          sinh ra giúp ghi nhớ lại những tính toán phức tạp và chỉ tính toán lại 
          khi cần thiết
      */}
      <p> giá phải trả {price}</p>
      <button onClick={() => setCount(count + 1)}>changeCount</button>
      <button onClick={addToCart}>add product</button>
    </div>
  )
}
