import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import logo from '../../assets/login.png'
import { UserContext } from '../../context/UserContext';
//import { getUsers } from '../../Service';

const Login = () => {
  const [incorrectUser, setIncorrectUser] = useState(false);
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setUser(data);
    localStorage.setItem('currentUser', JSON.stringify(data));
    navigate('/');

    //TODO validar usuario con mockapi
    /* if(validateUser(data.username, data.password)){
      setUser(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      navigate('/');
      setIncorrectUser(false);
    }
    else {
      setIncorrectUser(true);
    } */
  }

  return (
    <div className='sign-in-container'>
      {
        incorrectUser ? <span className='incorrect-user'>Incorrect username or password.</span> : <span></span>
      }
    <img src={logo} className='img-login'/>
      <span>You can log in with your username and password</span>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        
        <input
          className='input-form'
          type="text"
          placeholder='Username'
          {...register('username', {
              required : 'You must enter an username'
            }
          )
        } />
        <p>{errors.username?.message}</p>
        <input
          className='input-form'
          type='password'
          placeholder='Password'
          {...register(
              'password',
              {
                required : 'You must enter a password'
              }
            )
          }
        />
        <p>{errors.password?.message}</p>
         <button className='btn-form' type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login