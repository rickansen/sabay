import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="loginCont">
      <div className="logoNameCont">
        <img className="img" src="/images/s.png" />
        <span className="logoName">SABAY</span>
      </div>
      <Link to="/">
        <div className="buttonLogin">
          <span>SIGNUP</span>
        </div>
      </Link>

      <Link to="/">
        <div className="buttonLogin">
          <span>LOGIN</span>
        </div>
      </Link>
    </div>
  );
}

// logoNameCont

export default Login;
