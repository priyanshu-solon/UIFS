
import { useState } from "react";
import { useFormik } from "formik";

export function FormikDemo(){
    const formik = useFormik({
         initialValues: {
            UserName: null, 
            Mobile: null,
            City: null
         },
         onSubmit: (user)=>{
             console.log(user);
         }
    })

    return(
        <div className="container-fluid">
            <h2>Formik Register User</h2>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange}  name="UserName" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
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