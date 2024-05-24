import { useState } from "react";
import styles from "../styles/Login.module.css"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const {login} = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username) return;
    login(username);
    setUsername('');
    navigate('/', {replace: true});
  }
    return (
    <div>
    <h1>login</h1>
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
  