import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reqApiSports } from '../services/apiSports';
// import { reqApiSportsMock } from '../services/apiSports';
import styles from '../styles/Login.module.css';
import LoginLeftBlock from '../components/LoginLeftBlock';
import LoginRightBlock from '../components/LoginRightBlock';

function Login() {
  const [token, setToken] = useState('');
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  const saveTokenOnLocalStorage = (tokenToLocalStorage) => {
    localStorage.setItem('token', JSON.stringify(tokenToLocalStorage));
  };

  const LOGIN_ENDPOINT = 'https://v3.football.api-sports.io/status';
  // const LOGIN_ENDPOINT = 'http://localhost:3001/status';

  const login = async () => {
    const responseAuth = await reqApiSports(LOGIN_ENDPOINT, token);
    // const responseAuth = await reqApiSportsMock(LOGIN_ENDPOINT, token);

    if (Object.keys(responseAuth.data?.errors).length > 0 || responseAuth.error) {
      setErrors(JSON.stringify(responseAuth.data?.errors.token));
      return false;
    }

    saveTokenOnLocalStorage(token);
    navigate({ pathname: '/datafilter' });
  };

  const onChangeInput = (value) => {
    setToken(value);
    setErrors(undefined);
  };

  return (
    <section className={ styles.sectionMain }>
      <LoginLeftBlock />
      <LoginRightBlock
        value={ token }
        onChange={ ({ target }) => onChangeInput(target.value) }
        onClick={ login }
        errors={ errors }
      />

    </section>
  );
}

export default Login;
