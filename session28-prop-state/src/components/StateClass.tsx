import React, { Component } from 'react'

interface ClassComponent {
    name:string,
    address:string,
    age:number,
    count:number,
}
interface Test {
    data:string
}
export default class StateClass extends Component<Test,ClassComponent> {
    constructor(props:Test){
        super(props)
        this.state={
            name:"hoa",
            address:"hà nội",
            age:25,
            count:1
        }
    }
    // nơi khai báo những phương thức;
    // khi muốn cập nhật state ở bên trong class thì dùng this.setState;
    // setState ({});
    handleClick=()=>{
        this.setState({

            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>StateClass
        <p> xin chào {this.state.name}</p>
        <p> giá trị count ban đầu {this.state.count}</p>
        <button onClick={this.handleClick}> increase </button>
      </div>
    )
  }
}
