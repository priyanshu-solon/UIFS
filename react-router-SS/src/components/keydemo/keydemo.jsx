import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){


    const [users, setUsers] = useState([{user_id:null}]);
    const [msg, setMsg] = useState(null);
    const [validationClass, setValidationClass] = useState(null);

    useEffect(()=>{

         axios.get('users.json')
         .then(response => {
              setUsers(response.data);
         })

    },[])

    function VerifyUser(e){
         for(var user of users){
             if(user.user_id===e.target.value){
                  setMsg('User Id Taken - Try Another');
                  setValidationClass('text-danger');
                  break;
             } else {
                  setMsg('User Id Available');
                  setValidationClass('text-success');
             }
         }
    }


    return(
        <div className="container">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser} /></dd>
                <dd className={validationClass}>{msg}</dd>
            </dl>
        </div>
    )
}