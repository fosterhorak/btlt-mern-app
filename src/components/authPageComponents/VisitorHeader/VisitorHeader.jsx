import './VisitorHeader.css';

export default function VisitorHeader() {

  return (
    <div>
        <h3>WELCOME TO </h3>
        <br/><br/>
        <h1> LOGO TO GO HERE</h1>
        <br/><br/><br/>
        <h2>BETTER THAN LAST TIME</h2> 
        <br/>
        <hr className='hr'/>
        <br/>
        <h3>PLEASE <span className="auth" >LOG IN</span> OR <span>SIGN UP</span> AS A NEW USER!</h3>
    </div>
  );
}