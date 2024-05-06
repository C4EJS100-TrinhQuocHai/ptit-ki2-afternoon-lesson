import React, { Component } from 'react'

export default class ClassComponent extends Component<any,any> {
    constructor(props:any){
        super(props);
        // đi khai báo các giá trị 
        this.state={
            name:"minh thu",
            address:"hà nội",
            cart:[{
                id:1,
                product:"iphone15",
                quantity:5
            }],
            age:20
        }
    }
  render() {
    return (
      <div>ClassComponent
         <p> xin chào {this.state.name}</p>
         <p> địa chỉ ở {this.state.address} </p>
         <ul>
            {this.state.cart.map((item:any,index:number)=>{
                return <li key={index}>{item.product}</li>
            })}
         </ul>
      </div>
    )
  }
}
