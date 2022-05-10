import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLogin } from '../services/fake-services';
import '../css/register-login.css';


function Login() {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    function onChange(e) {        
        setLoginData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,    
        }));
    };

    function clearMsg() {
        setSuccessMsg('');
        setErrorMsg('');
    }

    function handleSubmit(e) {    
        e.preventDefault();
        clearMsg();
        setIsLoading(true);
        const username = loginData.username;
        fetchLogin( username )
        .then( userInfo => {   
            setTimeout(() => {
                setIsLoading(false);            
                setSuccessMsg(prevMsg => `Hi ${userInfo.username}! Successully logged in. Skip to`)
            }, 2000);  
        })
        .catch( warning => {
            setTimeout(() => {
                const error = warning.error;
                if (error === 'invalidPassword') {
                setErrorMsg(prevError => 'Invalid password.');
                } else if (error === 'noSuchUser') {
                    setErrorMsg(prevError => 'No such user. Please go to');
                } else {
                    setErrorMsg(prevError => 'Service error. Please Refresh.')
                };
                setIsLoading(false);
            }, 2000); 
        })
    };


    return (
        <main id="main">
            <div className="login__wrapper">
                <form className="form__content" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="username">Username *</label>
                    <input
                        type="text"
                        name="username"
                        className="account__input"
                        placeholder="enter username"
                        onChange={onChange}
                        value={loginData.username}
                        required
                    />

                    <label htmlFor="password">Password *</label>
                    <input
                        type="password"
                        name="password"
                        className="account__input"
                        placeholder="enter password"
                        onChange={onChange}
                        value={loginData.password}
                        required
                    />

                    <button 
                        type="submit"
                        className="login__submit"
                        disabled={!loginData.username || !loginData.password}
                    >
                        Log in
                    </button>

                    <div className="skip__option">
                        <p>Haven't Registered? Go to</p>
                        <Link to='/register' className="redirect__link">Register</Link>
                    </div>
                </form>

                { isLoading && <i className="gg-spinner"></i> }
                
                { successMsg && 
                <div className="msg">
                    <p>{successMsg}</p>
                    <Link to='/' className="redirect__link">Homepage</Link>
                </div>
                }
                { errorMsg && 
                <div className="msg">
                    <p className="msg__text">{errorMsg}</p>
                    { errorMsg.includes('No such') &&
                    <Link to='/register' className="redirect__link">Register</Link>}
                </div>
                }          
            </div>            
        </main>
    );
}

export default Login;