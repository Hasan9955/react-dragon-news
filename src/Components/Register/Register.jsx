import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Register = () => {

    const {createUser } = useContext(AuthContext)

   


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)


        //register and create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <div className='p-3'>
            <Navbar></Navbar>
            <form onSubmit={handleRegister} className="bg-[#F3F3F3] rounded-lg p-5 card-body mx-auto md:w-1/2 mt-5">
                <h2 className="text-3xl text-center m-10 font-bold">Register your account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className='m-5 text-lg font-medium text-center'>Already Have An Account  <Link className='text-red-500 font-bold' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;