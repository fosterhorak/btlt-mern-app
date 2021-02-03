import './VisitorHeader.css';
import logo from '../../../logos/logo1.png';
export default function VisitorHeader() {

  return (
    <div>
        <h3>WELCOME TO </h3>
        <br/><br/>
        <img src={logo} alt="btlt-logo"/>
        <br/><br/>
        <hr className='hr'/>
        <br/>
        <h5>PLEASE <span className="auth" >LOG IN</span> OR <span className="auth" >SIGN UP</span> AS A NEW USER!</h5>
        <br/>
    </div>
  );
}