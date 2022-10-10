import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
// import { LocationContext, L } from '../../context/LocationContext';
import './Login.css'
import logo from '../../assets/login.png'

const Login = () => {

//  const { setCurrentUser } = useContext(LocationContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    //localStorage.setItem('currentUser', JSON.stringify(data))
    // setCurrentUser(data)
    navigate('/')
  }

  return (
    <div className='sign-in-container'>
    <img src={logo} className='img-login'/>
      <span>Ingresa con tu usuario y contraseña</span>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        
        <input
          className='input-form'
          type="text"
          placeholder='Nombre de usuario'
          {...register('username', {
              required : 'Debe ingresar su nombre de usuario'
            }
          )
        } />
        <p>{errors.username?.message}</p>
        <input
          className='input-form'
          type='password'
          placeholder='Contraseña'
          {...register(
              'password',
              {
                required : 'Debe ingresar su contraseña'
              }
            )
          }
        />
        <p>{errors.password?.message}</p>
         <button className='btn-form' type='submit'>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login