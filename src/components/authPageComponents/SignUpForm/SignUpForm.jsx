import { Component } from 'react';
import { signUp } from '../../../utilities/users-service';
import './SignUpForm.css';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again'});
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="signup-login-div">
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>NAME</label>
            <input className="auth-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>EMAIL</label>
            <input className="auth-input" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>PASSWORD</label>
            <input className="auth-input" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>CONFIRM</label>
            <input className="auth-input" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" className="auth-button" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}