import "./login.css"
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleLogin = () => {
        if (email === "admin@example.com" && password === "12345678") {
            alert("Login Successful!");
          } else {
            setShowAlert(true);  
          }
    };

    return (
        <>
            <div className="container">
                <div className="login-card">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                    
                    <input type="password" placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                    
                    <button onClick={handleLogin}>Login</button>
                </div>
                {showAlert && (
                    <div className="alert-dialog">
                        <div className="alert-content">
                            <h3>Login Failed</h3>
                            <p>Invalid email or password. Please try again.</p>
                        </div>
                    </div>
                )}
            </div>

            
        </>
    )

}

export default Login