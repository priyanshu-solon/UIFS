import { useState } from "react";

export function FormDemo(){
    const [userDetails, setUserDetails] = useState({UserName:null, Mobile:null, City:null});

    function handleSubmit(e){
        e.preventDefault();
        alert('Form Submitted');
        console.log(userDetails);
    }

    function handleNameChange(e){
        setUserDetails(
            {
                UserName: e.target.value,
                Mobile: userDetails.Mobile,
                City: userDetails.City
            }
        )
    }

    function handleMobileChange(e){
        setUserDetails(
            {
                UserName: userDetails.UserName,
                Mobile: e.target.value,
                City: userDetails.City
            }
        )
    }

    function handleCityChange(e){
        setUserDetails(
            {
                UserName: userDetails.UserName,
                Mobile: userDetails.Mobile,
                City: e.target.value
            }
        )
    }

    return(
        <div className="container-fluid">
            <h2>React Register User</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                   <dt>User Name</dt>
                    <dd><input type="text" onChange={handleNameChange} name="UserName" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={handleMobileChange} name="Mobile" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={handleCityChange}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}