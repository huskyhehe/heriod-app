import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../services/fake-services';
import '../css/register-login.css';

function Register() {

    const [registerData, setRegisterData] = useState({
        username:'',
        email:'',
        password: '',
        acess: 'user',
        profile: {},
    });

    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    

    function onChange(e) {        
        setRegisterData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    function clearMsg() {
        setSuccessMsg('');
        setErrorMsg('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        clearMsg();
        setIsLoading(true);
        const username = registerData.username;
        fetchRegister({ username })
        .then(userInfo => {
            setTimeout(() => {
                setIsLoading(false);
                setSuccessMsg(prevMsg => `Welcome ${userInfo.username}! Successully registered, continue to `);
            }, 2000);   
        })
        .catch(warning=> {            
            setTimeout(() => {
                const error = warning.error;
                if (error === 'userExists') {
                    setErrorMsg(prevMsg => 'The user already exists. Please go to')
                } else {
                    setErrorMsg(prevError => "Service error. Please Refresh.")
                }
                setIsLoading(false);
            }, 2000);    
        });
    }

    return (
        <main id="main">
            <div className="register__wrapper">         
                <form className="form__content" onSubmit={handleSubmit}>
                    <label htmlFor="username">User Name *</label>
                    <input
                        type="text"
                        name="username"
                        className="account__input"
                        placeholder="create a username"
                        onChange={onChange}
                        value={registerData.username}
                        required
                    />

                    <label htmlFor="password">Password *</label>
                    <input
                        type="password"
                        name="password"
                        className="account__input"
                        placeholder="create a password"
                        onChange={onChange}
                        value={registerData.password}
                        required
                    />
                    
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        name="email"
                        className="account__input"
                        placeholder="user@example.com"
                        onChange={onChange}
                        value={registerData.email}
                        required
                    />
                    
                    <button 
                        type="submit"
                        className="register__submit"
                        disabled={!registerData.username || !registerData.password || !registerData.email }
                    >
                        Register
                    </button>  

                    <div className="skip__option">
                        <p className="skip__text">Already Registered? Go to</p>
                        <Link to='heriod-app/login' className="redirect__link">Log in</Link>
                    </div>      
                </form>

                {isLoading && <i className="gg-spinner"></i>}
                    
                { successMsg && 
                <div className="msg">
                    <p className="msg__text">{successMsg}</p>
                    <Link to='heriod-app/login' className="redirect__link">Login</Link>
                </div>
                }                     
                { errorMsg && 
                <div className="msg">
                    <p className="msg__text">{errorMsg}</p>
                    { errorMsg.includes('exists') &&
                    <Link to='heriod-app/login' className="redirect__link">Login</Link> 
                    }
                </div>
                }   
            </div>
        </main>        
    )
}

export default Register;
