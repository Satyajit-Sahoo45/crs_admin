import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AdminHome() {

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("adminInfo"));

        if (user) {
            window.location.href = "/admindashboard";
        }
    }, []);

    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signup" ? "signin" : "signup")
    }

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })


    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    const loginInputHandler = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setLoginData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

    }

    const signupInputHandler = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setSignupData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const submitData = async (e) => {
        e.preventDefault();

        if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
            window.alert("please fill all the fields");
        }

        try {

            const config = {
                header: {
                    "Content-type": "application/json",
                },
            };

            const name = signupData.name
            const email = signupData.email
            const password = signupData.password

            const { data } = await axios.post(
                "/api/admin",
                { name, email, password },
                config
            );

            window.alert("Admin Registration Successfull");

            localStorage.setItem("amdinInfo", JSON.stringify(data))
            window.location.href = "/admindashboard"
        } catch (error) {
            window.alert("error occured! in sign up part")
        }

    }

    const loginDataCheck = async (e) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            window.alert("please fill all the field")
            return;
        }

        try {
            const email = loginData.email;
            const password = loginData.password;

            console.log(email + " " + password);

            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            };

            const { data } = await axios.post(
                "api/admin/adminlogin",
                { email, password },
                config
            );

            localStorage.setItem("adminInfo", JSON.stringify(data));
            window.location.href = "/admindashboard";


        } catch (error) {
            window.alert(error)
        }

    }


    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={loginDataCheck}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log In as Admin</h3>
                        <div className="text-center pointer">
                            Don't have a account for your organisation?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                SignUp
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Organisation Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control mt-1"
                                value={loginData.email}
                                placeholder="Organisation Email"
                                onChange={loginInputHandler}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control mt-1"
                                value={loginData.password}
                                placeholder="Enter password"
                                autoComplete="off"
                                onChange={loginInputHandler}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <a href="/"
                                type="submit"
                                className="btn btn-primary"
                            >
                                Login as Client
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    else {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={submitData}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Create an account for your organisation</h3>
                        <div className="text-center pointer">
                            Already registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Log In
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Organisation Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="e.g carX company"
                                onChange={signupInputHandler}
                                name="name"
                                value={signupData.name}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Organisation Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="carx10@gmail.com"
                                onChange={signupInputHandler}
                                name="email"
                                value={signupData.email}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                autoComplete="off"
                                onChange={signupInputHandler}
                                name="password"
                                value={signupData.password}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Confirm Password"
                                autoComplete="off"
                                onChange={signupInputHandler}
                                name="confirmPassword"
                                value={signupData.confirmPassword}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminHome