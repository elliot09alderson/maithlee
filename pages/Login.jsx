import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Call the login function passed from App
    navigate("/dashboard");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
