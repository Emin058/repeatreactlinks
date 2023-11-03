
import { Outlet,Link } from "react-router-dom"

const Layout = () => {
  return(
    <div>
    <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/blogs">Blogs</Link>
      </li>
      <li>
       <Link to="/contacts">ContactUs</Link>
      </li>
    </ul>
    <Outlet/>
    </div>
  )
  }
  
  export default Layout