import React from "react";
import "./Login.css";
import Register from "./Register";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      email: null,
      password: null,
      isLoggedIn: false,
      register: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick = () => {
    this.setState({register: true});
  };

  handleChange = (event) => {
    this.setState({email: event.target.value});
    this.setState({password: event.target.value});
  };

  render() {
    if(!this.state.register){
    return(
      
    <div className="login">
  			<h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
 			 
    			<input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
    			<input type="password" placeholder="Password" name="password"  onChange={this.handleChange} />
    			<button type="submit" className="btn btn-primary btn-block btn-large">Login</button> <br/>
   				
/*           <button className="btn btn-primary btn-block btn-large" 
           onClick={this.handleClick}>Register</button>*/
   			 </form>
	</div>
  
    );
    }else{
      return(
        <Register/>
      );
    }
  }
}
export default Login;