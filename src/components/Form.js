import React from 'react';
 import '../css/form.css'

const ExampleForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputName" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
  
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      {/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExampleForm;
