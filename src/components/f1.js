import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state = {
            username : '',
            email : '',
            password : '',
            errors :{},
            submitted : false,
        }
    }

    handleForm = (event) => {
        event.preventDefault();
        let errors = {};
        if(this.state.username === ''){
            errors.username = "Username is requried";
        }
        if(this.state.email === ''){
            errors.email = "Email is requried";
        }
        if(this.state.password === '' || this.state.password.length  < 8){
            errors.password = "Password is requried & it should be atleast 8 chars";
        }else if (!/\d/.test(this.state.password)) {
            errors.password = 'Password must contain at least one digit';
        }
        this.setState({ errors: errors }); 

        if(Object.keys(errors).length === 0){
            console.log('Form submitted Sucessfully');
            this.setState({submitted : true})
        }
        if (this.state.password.includes(this.state.username)) {
            errors.password = 'Password should not contain the username';
          }
    }
    render() {
        return (
          <form className='container my-5' onSubmit={this.handleForm}>
              <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                  type="text"
                  value={this.state.username}
                  onChange={(e) => (this.setState({username: e.target.value}))}
                  className="form-control"
                  />
                  {this.state.errors.username && <p className='text-danger '>{this.state.errors.username}</p>} 
              </div>
              <div className="mb-3">
                  <label className="form-label">
                  Email address
                  </label>
                  <input
                  type="email"
                  value={this.state.email}
                  onChange={(e) => (this.setState({email: e.target.value}))}
                  className="form-control"
                  />
                  {this.state.errors.email && <p className='text-danger '>{this.state.errors.email}</p>}
              </div>
              <div className="mb-3">
                  <label className="form-label">
                  Password
                  </label>
                  <input
                  type="password"
                  value={this.state.password}
                  onChange={(e) => (this.setState({password: e.target.value}))}
                  className="form-control"
                  />
                  {this.state.errors.password && <p className='text-danger '>{this.state.errors.password}</p>}
              </div>
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>
              {
                  this.state.submitted && <h5 className='text-success'>Form submitted Succesfully</h5>
              }
          </form>
  
        )
      }
  }
  
  export default Form;