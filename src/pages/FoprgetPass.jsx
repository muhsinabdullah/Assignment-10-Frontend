import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useParams } from 'react-router';
import auth from '../firebase/firebase.config';


const FoprgetPass = () => {

    const { email } = useParams();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formEmail = e.target.email.value;
        sendPasswordResetEmail(auth, formEmail)
        .then(() => {
           window.open('https://mail.google.com/mail/u/0/')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='flex justify-center items-center flex-col my-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h2 className='text-center font-medium'>Forget Password</h2>
                <div className="card-body"></div>
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input defaultValue={email} name='email' type="email" className="input" placeholder="Your Name" />
                    <button className="btn btn-neutral mt-4">Send for Reset Link</button>
                </form>
            </div>
        </div>
    );
};

export default FoprgetPass;