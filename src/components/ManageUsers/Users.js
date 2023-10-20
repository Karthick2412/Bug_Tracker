import { Link, useLoaderData } from 'react-router-dom';
import React from 'react';
import { IoMdPersonAdd } from "react-icons/io";

import Table from '../Table';


export default function Users() {

  const ManageUsers = useLoaderData();
  const theading = ['User Name', 'Role Type', 'Email', 'Created At','Updated At','Actions'];
  const tdarr=['userName','roleType','email','createdAt','updatedAt'];
  const dataKey='user_id';
  const tableTitle='List of users';
  const URL={
    list:"http://localhost:8080/admaru/api/manageuser",
    delete:"http://localhost:8080/admaru/api/manageuser/delete/",
  };
  return (
    <>
    <h2 className='tableheading'>{tableTitle}</h2>
    <span className='addItem'><h3>Add User</h3><Link to={'create'}><button type="button" className="btn btn-secondary" ><IoMdPersonAdd/></button></Link></span>
    <Table theading={theading} dataset={ManageUsers} dataKey={dataKey} tdarr={tdarr} url={URL}/>
   </>
  );
}

export async function loader(){
  const response=await fetch('http://localhost:8080/admaru/api/manageuser');

  if(!response.ok){

  }
  else{
    const resData=await response.json();
    return resData.data;
  }
}
