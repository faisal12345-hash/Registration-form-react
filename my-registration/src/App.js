import React ,{Component} from "react";
import './App.css';
import Register from "./Component/Register"
import Greet from "./Component/Greet"

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegister: false,
       name:null,
       password:null,
       email:null
    };
  }

  registrationHandler=(event)=> {
    event.preventDefault();
    console.log(event.target);
    const name =event.target.name.value;
    const email =event.target.email.value;
    const password =event.target.password.value;

    this.setState({name,email,password,isRegister:true})


  };
  render() {
    return (
      <div>
        {
          this.state.isRegister ? 
          <Greet  name={this.state.name}
          email={this.state.email}/> : 
          <Register submit={this.registrationHandler} />
        }
      </div>
    )
  }
}

export default App
