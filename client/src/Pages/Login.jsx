import { set, useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/auth";
import { useState } from "react";
import imgLogin from '../assets/imgLogin.jpg';
import Spinner from "../Components/Spinner";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
     const [error, setError] = useState(false);

    const onSubmit = handleSubmit( async (data) => {
        try{
            setLoading(true);
            const response = await loginAdmin(data);
            loginAdmin(data);
            if(response.status === 200){
                login(response.data);

                navigate('/home');
                setLoading(false);
                setError(false);
            }else {
                setError(true);
                setLoading(false);
            }
        } catch (err){
            setError(true);
            setLoading(false);
        }
        
    })

  return (
    <>
        {loading && <Spinner />}
        <section className="flex flex-row justify-center items-center min-h-screen text-white " style={{ backgroundColor: '#f94545'}}>
            <figure className="w-auto flex justify-start" >
                <img style={{height: "100vh"}} src={imgLogin} alt="" />
            </figure>
            <div className="w-50 m-5 p-5 rounded-lg shadow-md max-w-md w-full text-black flex justify-center align-middle flex-col" style={{ backgroundColor: '#e71b1b'}}>
                <h3 className="text-3xl font-bold mb-4 text-white text-center">Iniciar Sesión</h3>
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 w-full">
                    <div>
                        <label htmlFor="userName" className="block "style={{ color: '#1f1f1f'}}>Username</label>
                        <input
                            type="text"
                            {...register("userName", { required: true })} 
                            placeholder="Ingresa tu usuario"
                            id="userName"
                            required
                            className="p-3 form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block" style={{ color: '#1f1f1f'}}>Contraseña</label>
                        <input
                            type="password"
                            {...register("password", { required: true })} 
                            placeholder="Ingresa tu contraseña"
                            id="password"
                            required
                            className="p-3 form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 text-black"
                        />
                    </div>
                    {error && <div className="text-white">Usuario o contraseña incorrectos</div>}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login