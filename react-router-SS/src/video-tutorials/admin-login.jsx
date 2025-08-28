import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";


export function AdminLogin(){


    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            admin_id : '',
            password: ''
        },
        onSubmit : (admin)=>{
              axios.get('http://localhost:3000/admin')
              .then(response=>{
                   var adminuser = response.data.find(item=> item.admin_id===admin.admin_id);
                   if(adminuser){
                        if(adminuser.password===admin.password){
                            navigate('/admin-dashboard');
                        }
                        else {
                             alert('Invalid Password');
                        }
                   } else {
                      alert('Invalid Admin ID');
                   }
              })
        }
    })

    return(
        <div className="bg-light p-3 w-25">
            <h2>Admin Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Admin Id</dt>
                    <dd><input type="text" name="admin_id" onChange={formik.handleChange} className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="password" onChange={formik.handleChange} className="form-control"/></dd>
                </dl>
                <button type="submit" className="btn btn-warning mx-2">Login</button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>
        </div>
    )
}