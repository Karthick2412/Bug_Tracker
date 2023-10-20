import { FaUserEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

import './Tablestyle.css'
import { useState } from 'react';

export default function Table(props){
const theading=props.theading;
const dataKey=props.dataKey;
const tdarr=props.tdarr;
const dataset=props.dataset;
const tableListURL=props.url.list;
const deleteURL=props.url.delete

const [listData,setListData]=useState(dataset)
async function deleteHandler(userId){
  const deleteConfirmation=window.confirm('Are you sure want to delete');
  if(deleteConfirmation){
    const response=await fetch(deleteURL+userId,{
      method:'DELETE'
    })
    
    const response2=await fetch(tableListURL);

  if(!response2.ok){

  }
  else{
    const resData=await response2.json();
    setListData(resData.data)
  }
  }
}


    return(
    <>
    

  <table className="table table-hover tablecontent">
  <thead>
    <tr className="table-Warning">
      {theading.map(thead=>
        <th key={thead}>{thead}</th>
      )}
    </tr>
  </thead>
  <tbody>
    {listData.map((user)=>(
      <tr key={user[dataKey]}>
        {tdarr.map(tddata=>
          <td key={tddata}>{user[tddata]}</td>
          )}
        <td>
          {/* <button type="button" class="btn btn-primary"> EDIT</button> */}
          <Link to={user[dataKey]} state={{ userIdstate: user[dataKey] }}><button type="button" className="btn btn-secondary" ><FaUserEdit/></button></Link>
           <button type="button" className="btn btn-danger" onClick={() => deleteHandler(user[dataKey])}><AiTwotoneDelete/></button> 
          </td>
      </tr>
    ))}
  </tbody>
</table>
  </>
    )
}