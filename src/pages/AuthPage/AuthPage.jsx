import { useState } from 'react';
import SignUpForm from '../../components/authPageComponents/SignUpForm/SignUpForm';
import LoginForm from '../../components/authPageComponents/LoginForm/LoginForm';
import VisitorHeader from '../../components/authPageComponents/VisitorHeader/VisitorHeader';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <VisitorHeader />
    <div className="auth-page">
      {showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      <button className='switch-form' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
    </div>
    </>
  );
}