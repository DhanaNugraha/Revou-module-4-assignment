import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginRegisterForm from "../component/LoginRegisterForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userFetched, setUserFetched] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/users"
      );
      const data = await response.json();
      setUserFetched(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    if (userFetched){
      // drawback -> search through all and does not stop when found
      userFetched.map((user:any) => {
        if (email === user.email && password === user.password){
          localStorage.setItem("token", "tokenValue");
          navigate("/ShoppingCart");
        }})
      if(!localStorage.getItem("token")) {
        alert("invalid email or password");
      }
    } else {
      alert("No user data found!");
    }
  };

  return (
    <LoginRegisterForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleLoginSubmit}
      formType = "Login"
    />
  );
};

export default Login;
