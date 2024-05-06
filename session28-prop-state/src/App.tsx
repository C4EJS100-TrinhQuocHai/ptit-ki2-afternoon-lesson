
import Functional from './components/Functional'
import Class from './components/Class'
import StateClass from './components/StateClass';
import StateFunction from './components/StateFunction';

export default function App() {
  const fullName: string ="rikkei education";
  const students: string[]=["thu","hoa","ngọc"];
  const numbers:number[]=[5,6,7,8,9];
  const data:string="ngoc";
  const age:number=25;
  return (
    <div>
      App
      {/* 
       props và state
       1. props : properties
        dùng để truyền dữ liệu từ component cha sang component con
        thế nào được gọi là component cha
        2. state
          - dùng để quản lý dữ liệu bên trong component
       */}
      <Functional name={fullName} students={students}></Functional>
      <Class age={age} numbers={numbers}></Class>
      <StateFunction></StateFunction>
      <StateClass data={data}></StateClass>
    </div>
  )
}
