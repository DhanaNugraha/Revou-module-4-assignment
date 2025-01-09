import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex justify-around pt-[2%] pb-[2%]">
        <Link to="/">Home</Link>
        <Link to="/ShoppingCart">Cart</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
    </div>
  )
}

export default NavBar