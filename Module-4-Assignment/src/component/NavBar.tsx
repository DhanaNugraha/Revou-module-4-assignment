import { Link, useNavigate, useLocation } from "react-router-dom";
// import toast, {Toaster} from "react-hot-toast";

const NavBar = () => {
  const navigate = useNavigate()
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  const location = useLocation()

  const checkLocation = (path:any) => {
    return location.pathname === path
    ? "navbarCurrentPageContentStyling"
    : "navbarContentStyling"
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
    alert("Successfully logged out")
  }

  return (
    <div className="navbarContainer">
      <div className="shopLogoContainer">
        <img src="\src\assets\shopping-bag.svg" alt="Shopping Bag" className="w-[3em]"/>
        <h1 className="text-orange-600">Shop Free</h1>
      </div>
      <Link className={checkLocation("/")} to="/">Home</Link>
      <Link className={checkLocation("/ShoppingCart")} to="/ShoppingCart"><img src="\src\assets\cart.svg" alt="Cart"  className="w-[2em]"/></Link>
      {isLoggedIn ? (
        <button onClick={handleLogout} className={checkLocation("/Login")}>Logout</button>
      ) : (
        <div className="navBarLoginButtons">
          <Link className={checkLocation("/Login")} to="/Login">Login</Link>
          <Link className={checkLocation("/Register")} to="/Register">Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
