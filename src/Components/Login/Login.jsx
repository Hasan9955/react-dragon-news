
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
        .then(result => {
            console.log(result)
            navigate(location?.state ? location.state : '/')

        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <div className='p-3'>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit} className="bg-[#F3F3F3] rounded-lg p-5 card-body mx-auto md:w-1/2 mt-5">
                <h2 className="text-3xl text-center m-10 font-bold">Login your account</h2>
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
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className='m-5 text-lg font-medium text-center'>Don’t Have An Account  <Link className='text-red-500 font-bold' to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;