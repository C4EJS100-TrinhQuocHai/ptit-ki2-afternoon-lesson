
import { Link, NavLink, Outlet } from "react-router-dom"
import "./home.css"
export default function Home() {
    return (
        <div>
            <nav>
                {/* <Link to="/about">about</Link>
                <Link to="/news">news</Link>
            <Link to="/contact">contact</Link> */}
                <NavLink to="/about">about</NavLink>
                <NavLink to="/news">news</NavLink>
                <NavLink to="/contact">contact</NavLink>
                {/* sinh ra thêm navLink */}
            </nav>
            
            <Outlet></Outlet>
        </div>
    )
}
