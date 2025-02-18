import { useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginRegisterForm from "../component/LoginRegisterForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = async (event:any) => {
    event.preventDefault();
    try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/users",
          {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "new",
                email: email,
                password: password,
                avatar: "https://picsum.photos/800",
            }),
          }
        );
        if (response.ok){
          console.log("here")

          const response = await fetch(
            "https://api.escuelajs.co/api/v1/auth/login",
            {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  email: email,
                  password: password,
              }),
            }
          );

          const data = await response.json();

          // console.log("data", data)

          data.access_token
          ?  localStorage.setItem("access_token", data.access_token)
          : alert("Fail to register account, please try again later!")

          navigate("/")
          
        } else {
            const data = await response.json();
            // console.log("response", response)
            // console.log("Added email pass:", data);
            throw(data)
        }
      } catch (error:any) {
        console.error("Unable to crate account:", error.message);
        alert(`Unable to crate account: ${error.message}`)
      }
  }

  return (
    <LoginRegisterForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleRegisterSubmit}
      formType = "Register"
    />
  );
};

export default Register;
