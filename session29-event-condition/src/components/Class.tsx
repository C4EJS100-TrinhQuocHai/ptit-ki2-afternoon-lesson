import React, { Component } from 'react'

export default class Class extends Component {
    // khai báo các phương thức
    handleClick=()=>{
        console.log("sự kiện click khi click vào button!");
    }
    // truyền để lấy tham số 
    handleUpdate=(userId:any)=>{
        console.log(userId);
    }
  render() {
    return (
      <div>
        Class
        <button onClick={this.handleClick}>click</button>
        <p onClick={()=>this.handleUpdate(11)}> minh thu </p>
      </div>
    )
  }
}
