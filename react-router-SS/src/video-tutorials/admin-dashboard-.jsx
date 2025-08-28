import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function AdminDashboard(){

    const [videos, setVideos] = useState([{id:0, title:null, description:null, url:null, likes:0, views:0, dislikes:0, comments:null, category_id:0}]);
    const [cookies, setCookie, removeCookie] = useCookies(['admin_id']);
    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('admin_id');
        navigate('/admin-login');
    }

    function LoadVideos(){
        axios.get(`http://localhost:3000/videos`)
        .then(response=>{
            setVideos(response.data);
        })
    }

    useEffect(()=>{
          if(cookies['admin_id']===undefined){
              navigate('/admin-login');
          }
          else {
            LoadVideos();
          }
    },[])

    return(
        <div className="bg-light p-2">
            <h3 className="d-flex justify-content-between"> <span>{cookies['admin_id']} - Dashboard</span> <button onClick={handleSignout} className="btn btn-link">Signout</button> </h3>
            <div className="mt-2">
                <Link to="/add-video" className="btn btn-success bi bi-camera-video my-2"> Add Video </Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map(video=>
                                <tr key={video.id}>
                                    <td>{video.title}</td>
                                    <td>
                                        <iframe width="200" height="100" src={video.url}></iframe>
                                    </td>
                                    <td>
                                        <Link to={`/edit-video/${video.id}`} className="btn btn-warning bi bi-pen-fill"></Link>
                                        <Link to={`/delete-video/${video.id}`} className="btn btn-danger bi bi-trash-fill mx-2"></Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}