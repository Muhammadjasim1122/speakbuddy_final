
import './login.css';
import LeftBox from './LeftBox';
import RightBox_login from './RightBox_login';

const Login = () => {
  

  return (
    <section className="vh-100 overflow-hidden">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row p-2 box-area">
          <LeftBox />
          <RightBox_login/>
        </div>
      </div>
    </section>
  );
};

export default Login; 