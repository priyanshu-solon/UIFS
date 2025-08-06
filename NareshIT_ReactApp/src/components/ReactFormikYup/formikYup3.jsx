// Error messages are shown below each field if validation fails.

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function FormYup3(){
   const formik = useFormik({
        initialValues: {
           UserName: '', 
           Mobile: '',
           City: ''
        },
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
           <h2>Yup Validation Register User</h2>
           <form onSubmit={formik.handleSubmit} >
               <dl>
                  <dt>User Name</dt>
                   <dd><input type="text" {...formik.getFieldProps("UserName")}  name="UserName" /></dd>
                   <dd className="text-danger">{formik.errors.UserName}</dd>
                   <dt>Mobile</dt>
                   <dd><input type="text" {...formik.getFieldProps("Mobile")} name="Mobile" /></dd>
                   <dd className="text-danger">{formik.errors.Mobile}</dd>
                   <dt>City</dt>
                   <dd>
                       <select name="City" {...formik.getFieldProps("City")} >
                           <option value="-1">Select City</option>
                           <option>Delhi</option>
                           <option>Hyd</option>
                       </select>
                   </dd>
                   <dd className="text-danger">{formik.errors.City}</dd>
               </dl>
               <button disabled={(formik.isValid)?false:true} className="mx-2" type="submit">Register</button>
               <button  className={(formik.dirty)?'d-inline':'d-none'}  disabled={(formik.dirty)?false:true} type="submit">Save</button>
           </form>
       </div>
   )
}