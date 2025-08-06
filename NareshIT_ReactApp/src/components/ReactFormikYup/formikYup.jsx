// Uses Formik with Yup validation schema.
// Validation is defined declaratively using Yup, making it more scalable and maintainable.
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function FormYup(){  
    const formik = useFormik({initialValues: {UserName: '',Mobile: '',City: ''},
         validationSchema: yup.object({
             UserName: yup.string().required('User Name Required').min(4,'Name too short'),
             Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile')
         }) ,
         onSubmit: (user)=>{
             console.log(user);
         }
    })
    return(
        <div className="container-fluid">
            <h2>Yup Register User</h2>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange}  name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option value="-1">Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
