import React from 'react';
import { Form, Link } from 'react-router-dom';

//form invalid column style in input
//is-invalid

import './UserFormStyle.css'

console.log("I AM INSIDE USERFORM");
function UserForm(props){
  

  const userDetail=props.userDetails
  
    return <>
    <div className="card">
    <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Basic Info</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
    <div className="card-body">
<Form method='post'>
    <div className="form-group row">
    <div className="col-md-5 mb-4">
      <label htmlFor="firstname">First name</label>
      <input type="text" className="form-control " id="firstname" name='firstName' placeholder="First name" defaultValue={userDetail ? userDetail.firstName :''} required/>
      {/* <div className="valid-feedback">
        Looks good!
      </div> */}
    </div>
    <div className="col-md-5 mb-4 rightsideInput">
      <label htmlFor="lastname">Last name</label>
      <input type="text" className="form-control " id="lastname" name='lastName' placeholder="Last name" defaultValue={userDetail ? userDetail.lastName :''} required/>
      {/* <div className="valid-feedback">
        Looks good!
      </div> */}
    </div>
 
    <div className="col-md-6 mb-4">
      <label htmlFor="validationServerUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" className="form-control " id="validationServerUsername" name='userName' placeholder="Username" aria-describedby="inputGroupPrepend3"/>
        {/* <div className="invalid-feedback">
          Please choose a username.
        </div> */}
      </div>
    </div>
    <div className="col-md-6 mb-1 my-4 mx-9">
    {/* <a href="#" class="btn btn-primary btn-lg active mb-2" role="button" aria-pressed="true">Generate</a> */}
    <button type="submit" class="btn btn-outline-dark mb-2 my-2">Generate</button>
      {/* <div className="valid-feedback">
        Looks good!
      </div> */}
    </div>
  </div>
  <div className="form-group row">
    <div className="col-md-5 mb-4">
      <label htmlFor="validationServer03">Mail ID</label>
      <input type="text" className="form-control " id="validationServer03" name='email' placeholder="Mail Id" defaultValue={userDetail ? userDetail.email :''} required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-5 mb-4 rightsideInput">
      <label htmlFor="validationServer04">Role Type</label>
      <input type="text" className="form-control " id="validationServer04" name='roleType' placeholder="Role Type" defaultValue={userDetail ? userDetail.roleType :''} required/>
      {/* <div className="invalid-feedback">
        Please provide a valid state.
      </div> */}
    </div>
    {!userDetail ? <><div className="col-md-5 mb-4">
      <label htmlFor="validationServer05">Password</label>
      <input type="password" className="form-control " id="validationServer05" name='password' placeholder="Password"/>
    </div>
    <div className="col-md-5 mb-4 rightsideInput">
      <label htmlFor="validationServer05">Confirm Password</label>
      <input type='password' className="form-control " id="validationServer05" name='confirmPassword' placeholder="Confirm Password"/>
    </div></>:<></>}
    
  </div>
<div className='submitButton'>
<Link to='/users'><button className="btn btn-primary" type="submit">Cancel</button></Link>
  <button className="btn btn-primary" type="submit">Save</button>
  </div>
</Form>
</div>
</div>
        </>
    
}
export default UserForm;