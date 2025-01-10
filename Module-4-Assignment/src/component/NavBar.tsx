import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Login");
    alert("Successfully logged out")
  }

  const logoutButtonStyling = "border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1.2em] py-[0.6em] rounded-lg border-solid border-transparent hover:border-[#646cff]"

  return (
    <div className="flex justify-around pt-[2%] pb-[2%]">
      <Link to="/">Home</Link>
      <Link to="/ShoppingCart">Cart</Link>
      {isLoggedIn ? (
        <button onClick={handleLogout} className={logoutButtonStyling}>Logout</button>
      ) : (
        <Link to="/Login">Login</Link>
      )}
      <Link to="/Register">Register</Link>
    </div>
  );
};

export default NavBar;
