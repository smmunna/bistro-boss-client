import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();

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
                        navigate('/')
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch(error => {
                console.log(error)
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
                                        <input type="text" placeholder="Name" {...register("displayName")} className="input input-bordered w-96" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" {...register("email")} className="input input-bordered w-96" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
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
