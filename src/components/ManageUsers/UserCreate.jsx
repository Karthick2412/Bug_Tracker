import { json, redirect } from "react-router-dom";
import UserForm from "./UserForm";

function NewUser(){
    return(
        <>
        <UserForm/>
        </>
    )
}

export default NewUser;

export async function loader({request,params}){

    const data=await request.formData();

    const newUserObject={
        name:data.get('firstName'),
        lastName:data.get('lastName'),
        roleType:data.get('roleType'),
        email:data.get('email'),
    };

    const response=await fetch('http://localhost:8080/admaru/api/manageuser/new',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(newUserObject),
    });

    if(!response.ok){
        throw json({message:'Cound not create user'},{status:500});
    }

    return redirect('/users')

}