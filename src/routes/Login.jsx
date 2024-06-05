import { useState } from "react";
import styles from "../styles/Login.module.css"
import { useAuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [username, setUsername] = useState('');
  const {login} = useAuthContext();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username) return;
    login(username);
    setUsername('');
    navigate(from, {replace: true});
  }
    return (
    <div>
      <Header>
      <h1>login</h1>
      </Header>
    <div className={styles.formWrapper}>
    <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="user" className={styles.inputLabel}>User Name</label>
    <input 
    type="text" 
    id="user" 
    value={username} 
    onChange={(e) => setUsername(e.target.value)}
    />
    <button>Login</button>
    </form>
    </div>
    </div>
    );
  };
  
  export default Login;
  