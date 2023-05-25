import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [mailerror, setMailError] = useState('');
    const [passerror, setPassError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const name = data.displayName;
        const photoURL = data.photoURL;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateUser(user, name, photoURL)
                    .then(() => {
                        navigate(from, { replace: true })
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log(errorMsg)
                if (errorMsg == 'Firebase: Error (auth/email-already-in-use).') {
                    setMailError('Email is already is in use..!')
                    return
                }
                else if (errorMsg == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setPassError('Password Length Must be 6 character long')
                    return
                }
                else {
                    setError('')
                }
            })
    };
    return (
        <div>
            <div>
                <h3 className='text-center mt-5 text-4xl font-bold'>Please Register</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="hero">
                        <div className="hero-content">

                            <div className="card">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Display Name:</span>
                                        </label>
                                        <input type="text" placeholder="Name" {...register("displayName", { required: true })} className="input input-bordered w-96" />
                                        {errors.displayName?.type === 'required' && <p className='text-red-600 mt-2'>*Display name is required</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" {...register("email", { required: true })} className="input input-bordered w-96" />
                                        {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>*Email is required</p>}
                                        {mailerror && <p className='text-red-600 mt-2'>{mailerror}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" {...register("password", { required: true, maxLength: 20 })} className="input input-bordered" />
                                        {passerror && <p className='text-red-600 mt-2'>{passerror}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="Photo URL" {...register("photoURL")} className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
