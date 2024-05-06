import ClassComponent from "./components/ClassComponent.tsx"
import Functional from "./components/Functional.tsx"
import Header from "./components/Header.tsx"

export default function App() {
  return (
    <div>
      App
      <Header></Header>
      {/* tao component body va footer
       */}
      <Functional></Functional>
      <ClassComponent></ClassComponent>
    </div>

  )
}
