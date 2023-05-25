import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
    };

    return (
        <div>
            <div>
                <h3 className='text-center mt-5 text-4xl font-bold'>Please Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="hero">
                        <div className="hero-content">

                            <div className="card">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" {...register("email")} className="input input-bordered w-96" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='text-center'>
                    <p>Dont have any account? <Link to='/register' className='text-blue-700'>Register Now</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
