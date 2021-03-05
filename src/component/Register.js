import React from "react";
import "./Register.css";
import Login from "./Login";

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          surname: '',
          email: '',
          password: '',
          login: false,
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submit");
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam + ": " + val);
      }
    
      handleClick = () => {
        this.setState({login: true});
      };

    render(){
        if(!this.state.login){
        return(
            
            <div className="Register">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        onChange={this.myChangeHandler}/>
                        <br/> 
                    <input
                        type="text" 
                        name="surname" 
                        placeholder="Surname"
                        onChange={this.myChangeHandler}/>
                        <br/>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        onChange={this.myChangeHandler}/>
                        <br/>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="Password"
                        onChange={this.myChangeHandler}/>
                        <br/>
                    <br/><button
                        className="btn btn-primary btn-block btn-large" 
                        type="submit" 
                        >Register</button>
                    <br/>
                    <button className="btn btn-primary btn-block btn-large" onClick={this.handleClick}>Back</button>
                </form>
            </div>
        );
        }else{
            return(
                <Login/>
            );
        }
    }
}

export default Register;

/*<h3>Register</h3>
		<form action="/register" method="post">
			Name:&nbsp;<input type="text" name="name" value=""/><br>
			Surname:&nbsp;<input type="text" name="surname" value=""/><br>
			Email:&nbsp;<input type="text" name="email" value=""/><br/>
 			Password:&nbsp;<input type="text" name="password" value=""/><br>
			<br><input type="submit" value="Register"/>			
		</form>
*/