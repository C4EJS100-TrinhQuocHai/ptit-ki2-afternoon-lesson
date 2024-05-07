import React, { Component } from 'react'
import Child from './components/Child';
interface Props{
}
interface State{
  name:string,
  age:number,
  count:number,
  isActive:boolean,
}
export default class App extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      // chứa những dữ liệu
      name:"minh thu",
      age:20,
      count:0,
      isActive:true,
    }
    console.log("giai đoạn khởi tạo!");
  }
  // phương thức thay đổi state
  // khi muốn thay đổi state đối với class component thì dùng this.setState
  handleClick=()=>{
    this.setState({count:this.state.count+1})
  }
  componentDidMount(): void {
    console.log("component didmount được gọi!");
    /* 
      chạy sau khi component render lần đầu tiên
      các thành phần của component được gắn vào DOM
      có thể thực hiện các tương tác với DOM
      nơi lí tưởng để callAPI lấy data render ra component

     */
    // thường làm gì?
  }
  componentWillMount(): void {
    console.log("component willmount được gọi!");
    // thường làm gì ở đây
    /* 
      chạy trước render cho nên ở component có thể tính toán lại state hoặc props
      nhưng nên lưu ý thời gian mà chuyển sang render nhanh 
     */
  }
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any):boolean {
    console.log(111111111);
    return true
  }
  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
    console.log("phương thức componentWillUpdate được gọi");
    /* 
      Chạy trước re-render nên thằng cũng có thể dùng tính toán lại
      state hoặc props
     */
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("phương thức componentDidUpdate được gọi");
    /* 
     chạy sau khi component re-render
     các phần tử của component nó được gắn kết vào DOM cho nên có
     thể dùng để tương tác với DOM
     */
  }

  
  // tạo phương thức remove khỏi dom
  handleRemove=()=>{
    this.setState({
      isActive:!this.state.isActive
    })
  }
  render() {
   
    
    console.log("component bắt đầu re-render");
    // không được setSate ở đây vì sao?
    // component nó re-render liên tục ==> chạy vô hạn!
    // 
    return (
      <div>App
        {this.state.name}
        {/* 
           tạo class component
           life cycle (vòng đời của 1 component==> chỉ áp dụng với class
            trải qua 4 giai đoạn
            1. giai đoạn khởi tạo (initial)
             khởi tạo state,props
            2. giai đoạn mounting (gắn vào thêm vào)
             cung cấp các phương thức mặc định(có sẵn rồi )
             sau khi giai đoạn khởi tạo xong thì tiếp đến chạy vào phương thức
             componentWillmount()==> component render ==> componentDidmount()
            3. giai đoạn updating (thay đổi)
            - xảy ra khi nào khi state hoặc props thay đổi thì chạy vào giai đoạn
            update
            - cung cấp các phương thức
              1.shouldComponentUpdate
              ==> bắt buộc phải return true/false
              ==> nếu không khai báo hàm thì mặc định là true
              2.componentWillUpdate()
              3.componentDidUpdate()
            4. giai đoạn unmouting (gỡ bỏ xóa bỏ)
             xảy ra khi nào?
             khi component bị xóa bỏ khỏi dom
           )
         */}
        {this.state.isActive ?<Child></Child> :""}
         <button onClick={this.handleRemove}>remove Child</button>
         <p>giá trị biến count: {this.state.count}</p>
         <button onClick={this.handleClick}>count</button>
      </div>
    )
  }
}

