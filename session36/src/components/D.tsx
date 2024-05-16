
import { useContext } from "react"
import { SetUseContext } from "./UseContext"
export default function D() {
    const getDate = useContext(SetUseContext);
  return (
    <div>
        D
        <p>name:{getDate}</p>
    </div>
  )
}
