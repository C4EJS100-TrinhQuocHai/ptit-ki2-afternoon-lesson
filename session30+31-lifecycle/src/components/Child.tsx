import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(): void {
        console.log("phương thức componentWillUnmount");
        /* 
         chạy cuối cùng khi phần tử xóa khỏi dom
         nên thằng này thường dùng để clear time-out... xóa khỏi bộ nhớ
         */
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}

