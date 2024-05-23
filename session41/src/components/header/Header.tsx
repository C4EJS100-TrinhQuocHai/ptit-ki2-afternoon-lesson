import "./header.scss"
export default function Header() {
  /* 
    Quy tắt đặt tên cho các className đối với việc dùng scss
    quy tắc BEM ( Block-Element-Modifier)
   */
  return (
    <div className="header">
        Header
        <div className="logo">
            logo
        </div>
        <div className="navigation">
            <a className="home" href="">Home</a>
            <a className="about" href="">About</a>
            <a className="contact" href="">Contact</a>
        </div>
    </div>
  )
}
