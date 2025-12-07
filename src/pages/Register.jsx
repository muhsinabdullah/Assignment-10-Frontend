import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import {updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const { registerWithEmailAndPassword, setUser, handleGoogleSignin } = useContext(AuthContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        const upperCase =/[A-Z]/;
        const lowerCase =/[a-z]/;
        if(pass.length){
            return alert('Password must have 6 letter');
        }
        if(!upperCase.test(pass)){
            return alert('Password must have Uppercase letter');
        }
        if(!lowerCase.test(pass)){
            return alert('Password must have Lowercase letter');
        }



        registerWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential)
                }).catch((err) => {
                    console.log(err)
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const googleSignin=()=>{
        handleGoogleSignin()
        .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleOnSubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your full Name" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input" placeholder="Past Photo URL" />
                            <div><Link to="/forgetPass" className="link link-hover">Forgot password?</Link></div>
                            <button onClick={googleSignin} className="btn"><FcGoogle /> Signup with google</button>
                            <div><span>Already have an account?</span> <Link className='text-blue-500' to={'/login'}>Login</Link></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;