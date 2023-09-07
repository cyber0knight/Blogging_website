import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { successNote, warningNote } from "../../components/toast";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../context/auth";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/signify.css";

const Signify = (props) => {
    //   const location = useLocation();
    //   const searchParams = new URLSearchParams(location.search);
    const initialForm = props.param;
    const [activeForm, setActiveForm] = useState(initialForm);
    const toggleForms = (form) => {
        setActiveForm(form);
    };

    useEffect(() => {
        if (initialForm === "login") {
            setActiveForm("login");
        } else if (initialForm === "register") {
            setActiveForm("register");
        }
    }, [initialForm]);

    //========= register ===============
    //=================================
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

    // form function
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://blogging-website-server.onrender.com/api/v1/auth/register", {
                userName,
                email,
                password,
                password2,
            });
            if (res && res.data.success) {
                successNote(res.data && res.data.message);
                successNote("login to enter");
                navigate("/login");
            } else {
                warningNote(res.data.message);
            }
        } catch (error) {
            // console.log(error);
            warningNote();
        }
    };

    //========= Login ===============
    //=================================
    const [lEmail, setLEmail] = useState("");
    const [lPassword, setLPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://blogging-website-server.onrender.com/api/v1/auth/login", {
                email: lEmail, // Use lEmail for email field
                password: lPassword, // Use lPassword for password field
            });
            if (res && res.data.success) {
                successNote(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate("/");
            } else {
                warningNote(res.data.message);
            }
        } catch (error) {
            // console.log(error);
            warningNote();
        }
    };

    //========= return ===============
    //=================================

    return (
        <div className="Signify row" style={{ minHeight: "100vh" }}>
            
            {/* ========= login ===============
            ================================= */}
            <div
                className={`login col-lg-3 col-md-5 col-sm-8 col-6 form-signin ${activeForm === "login" ? "active" : ""
                    }`}
                style={{ minHeight: "65vh", zIndex: activeForm === "login" ? 2 : 1 }}
                onClick={() => toggleForms("login")}
            >
                <form style={{ width: "95%" }} onSubmit={handleLogin}>
                    <div className="text-center">
                        <h1 className="h3 mb-3 fw-normal">Login</h1>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            autocomplete="off"
                            value={lEmail}
                            onChange={(e) => setLEmail(e.target.value)}
                            required
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={lPassword}
                            onChange={(e) => setLPassword(e.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">
                        Login
                    </button>
                </form>
            </div>

            {/* ========= register ===============
            ================================= */}

            <div
                className={`register col-lg-3 col-md-5 col-sm-8 col-6 form-signin ${activeForm === "register" ? "active" : ""
                    }`}
                style={{ minHeight: "65vh", zIndex: activeForm === "register" ? 2 : 1 }}
                onClick={() => toggleForms("register")}
            >
                <form style={{ width: "95%" }} onSubmit={handleRegister}>
                    <div className="text-center">
                        <h1 className="h3 mb-3 fw-normal">Register</h1>
                    </div>
                    <div className="form-floating">
                        <input
                            type="Text"
                            id="userName"
                            className="form-control"
                            placeholder="userName"
                            autocomplete="off"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            autoFocus
                        />
                        <label for="floatingInput">userName</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="name@example.com"
                            autocomplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                        />
                        <label>Confirm Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">
                        Register
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Signify;
