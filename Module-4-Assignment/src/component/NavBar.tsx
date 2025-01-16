import { Link, useNavigate, useLocation } from "react-router-dom";
// import toast, {Toaster} from "react-hot-toast";

const NavBar = () => {
  const navigate = useNavigate()
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  const location = useLocation()

  const buttonStyling = "border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1em] py-[0.8em] rounded-lg border-solid border-transparent hover:border-[#646cff]"

  const currentPageButtonStyling = "border text-[1em] font-medium bg-blue-400 cursor-pointer transition-[border-color] duration-[0.25s] px-[1em] py-[0.8em] rounded-lg border-solid border-transparent hover:border-[#646cff]"

  const checkLocation = (path:any) => {
    return location.pathname === path
    ? currentPageButtonStyling
    : buttonStyling
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
    alert("Successfully logged out")
  }

  
  

  return (
    <div className="flex justify-around pt-[2%] pb-[2%] border-b border-solid">
      <h1>Shop Free</h1>
      <Link className={checkLocation("/")} to="/">Home</Link>
      <Link className={checkLocation("/ShoppingCart")} to="/ShoppingCart">Cart</Link>
      {isLoggedIn ? (
        <button onClick={handleLogout} className={buttonStyling}>Logout</button>
      ) : (
        <Link className={checkLocation("/Login")} to="/Login">Login</Link>
      )}
      <Link className={checkLocation("/Register")} to="/Register">Register</Link>
    </div>
  );
};

export default NavBar;
