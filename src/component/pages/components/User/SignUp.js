import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import { auth } from '../../../../firebase'
import useInsertUser from './GetMutationUser';
import LoadingSvg from '../LoadingSvg';
import '../../../assets/css/UserRegistration.scss'

export default function Signup() {

    const history = useHistory();

    /* Validation error */
    const baseError = {
        displayname: "",
        email: "",
        confirmpassword: "",
        username: "",
    }

    /* useState */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [getUser, setUser] = useState(true);
    const [loading, setLoading] = useState(false);
    const [getToast, setToast] = useState(false);
    const [message, setMessage] = useState('');

    /* Insert user to database */
    const {insertUser, loadingInsertUser} = useInsertUser();
    const insertUserOne = (id_pengguna, email, fullName) => {
        insertUser({variables: {
            id_pengguna: id_pengguna,
            email: email,
            name: fullName,
            // username: username,
        }})
    }

    /* Runs when auth state changed on user */
    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            console.log("user", user)
            console.log("getUser", getUser)
            if (user) {
                setUser(true)
                history.push({
                    pathname: `/`
                })
            } else {
                setUser(false)
            }
          });
    })

    /* Validation useState */
    const [err, setErr] = useState(baseError)
    const regexName = /^[A-Za-z ]*$/;
    // const regexUserName = / ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let errName =  err.displayname;
        let errEmail = err.email;
        let errConfirmPassword = err.confirmpassword

        if (name === "displayname") {
            if(value === "") {
                errName = "Fill your full name!"
            } else if (regexName.test(value)) {
                errName = ""
            } else {
                errName = "Full name are only alphabetical!"
            }
            setErr({...err, [name]: errName})
            setName(value)
        }
        if (name === "email"){
            if (value === "") {
                errEmail = "E-mail cannot be empty!"
            } else if (!(regexEmail.test(value))) {
                errEmail = "Invalid E-mail format!"
            } else if (regexEmail.test(value)) {
                errEmail = ""
            }

            setErr({...err, [name]: errEmail})
            setEmail(value)
        }

        if (name === "confirmpassword") {
            if (value !== password ) {
                errConfirmPassword = "Password doesn't match!"
            } else {
                errConfirmPassword = ""
            }

            setErr({...err, [name]: errConfirmPassword})
            setConfirmPassword(value)
        }
    }

    /* Register using firebase auth */
    const signUp = (event) => {
        event.preventDefault();
        
        if ((err.displayname || err.email || err.confirmpassword === '') && (fullName && email && confirmPassword !== '')) {
            setLoading(true)
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                auth.user.updateProfile({fullName: fullName})
                insertUserOne(auth.user.uid, email, fullName)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                setToast(true)
                setMessage(error.message)
            });
        } else {
            setToast(true)
            setMessage("Please check your full name, email, password shouldn't be empty!")
        }
    };

    return (
        <div className="bg">
        <div className="jumbotron1 login-page">
            {loading? 
                <LoadingSvg/>
            :
                <>
                    <form className="container col-md-2 col-sm-8 signup font-signika mx-auto card-signup border-0 shadow">
                        <h1 className="signin-text">Sign Up</h1>
                            <div className="row g-3 fill-signup">

                                {/* Fullname input */}
                                <div className="contact-form">
                                    <label htmlFor="validationDefault01" className="form-label my-1">Full Name</label>
                                    <input name='displayname' type="text" className="form-control form-signin-input" id="validationDefault01" value={fullName}
                                        onChange={handleInput} required/>
                                    <span className="error-msg">{err.displayname}</span><br/>
                                </div>

                                {/* Email input */}
                                <div className="contact-form mt-0">
                                    <label htmlFor="validationDefault02" className="form-label my-1">Email</label>
                                    <input name='email' type="email" className="form-control form-signin-input" id="validationDefault02" value={email}
                                        onChange={handleInput} required/>
                                    <span className="error-msg">{err.email}</span><br/>
                                </div>

                                {/* Password input */}
                                <div className="contact-form mt-0">
                                    <label htmlFor="validationDefault03" className="form-label my-1">Password</label>
                                    <input name='password' type="password" className="form-control form-signin-input" id="validationDefault03" value={password}
                                        onChange={(event) => setPassword(event.target.value)} required/>
                                </div>

                                {/* Password confirm input */}
                                <div className="contact-form">
                                    <label htmlFor="validationDefault04" className="form-label my-1">Confirm Password</label>
                                    <input name='confirmpassword' type="password" className="form-control form-signin-input" id="validationDefault04" value={confirmPassword}
                                        onChange={handleInput} required/>
                                    <span className="error-msg">{err.confirmpassword}</span><br/>
                                </div>

                                <div className="col-12">
                                    <button className="mt-2 btn signin-btn" type="submit" onClick={signUp}>SIGN UP</button>
                                </div>
                            </div>
                            <h6 className="mt-4 switch-log text-center">Already have an account? <Link to='/login' className="text-success">Log in</Link></h6>
                    </form>
                    
                </>
            }
            <ToastContainer position="bottom-center" className="mb-5 border-0">
                <Toast show={getToast} onClose={() => setToast(false)} className="border-0" bg="danger" delay={5000} autohide>
                        <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>  
        </div>
        </div>
    )
}