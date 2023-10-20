import UserForm from "./UserForm";
import { json,useLoaderData,useLocation,redirect } from "react-router-dom";

function UserEdit(){
    const userDetails=useLoaderData()
    let { state } = useLocation();
    //console.log("userDetails state is "+state.userIdstate)
    console.log("userDetails username "+userDetails.userName)
   // userDetails.firstName=userDetails.userName.split(" ")
   // console.log("userDetails "+userDetails.userName)
    console.log("userDetails lastName "+userDetails.lastName)
    console.log("userDetails email "+userDetails.email)

    const formObject={
        firstName:userDetails.userName,
        lastName:userDetails.lastName,
        email:userDetails.email,
        roleType:userDetails.roleType,
    };
    console.log("formObject ",formObject)
    return<>
    <UserForm userDetails={formObject}/>
    </>
}
export default UserEdit;

export async function loader({request,params}){
const userId=params.userId
const response = await fetch("http://localhost:8080/admaru/api/manageuser/"+userId);
if(!response.ok){
throw json({message:'Couldn not find fetch details of selected user.'},{
    status:500
})
}else{
    const resData=await response.json();
    return resData.data;
}
}

export async function action({request,params}){

    const data=await request.formData();
    const userId=params.userId
    const method=request.method;
    const newUserObject={
        name:data.get('firstName'),
        lastName:data.get('lastName'),
        roleType:data.get('roleType'),
        email:data.get('email'),
    };

    const response=await fetch('http://localhost:8080/admaru/api/manageuser/update/'+userId,{
        method:method,
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