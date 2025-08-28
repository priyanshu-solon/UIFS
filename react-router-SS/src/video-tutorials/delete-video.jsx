import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function DeleteVideo(){

    const [categories, setCategories] = useState([{category_id:0, category_name:null}]);
    const [video, setVideo] = useState({
            title: null,
            description:null,
            url:null,
            likes:0,
            views:0,
            dislikes:0,
            category_id:0,
            comments:null
        })

    let navigate = useNavigate();
    let params = useParams();

    function LoadCategories(){
        axios.get(`http://localhost:3000/categories`)
        .then(response=>{
            response.data.unshift({category_id:-1, category_name:'Select Category'});
            setCategories(response.data);
        })
    }

    function LoadVideo(){
        axios.get(`http://localhost:3000/videos/${params.id}`)
        .then(response=>{
             setVideo(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadVideo();
    },[])

    function handleYesClick(){
        axios.delete(`http://localhost:3000/videos/${params.id}`)
        .then(()=>{console.log('deleted')});
        alert('Deleted Successfully..');
        navigate('/admin-dashboard');
    }

    return(
        <div className="bg-light p-2 w-25">
            <h2>Delete Video</h2>
            <h4>Are you sure, Want to Delete?</h4>
             <dl>
                <dt>Title</dt>
                <dd>{video.title}</dd>
                <dt>Preview</dt>
                <dd>
                    <iframe src={video.url} width="300" height="200"></iframe>
                </dd>
             </dl>
             <button onClick={handleYesClick} className="btn btn-danger mx-2">Yes</button>
            <Link className="btn btn-warning" to="/admin-dashboard"> No </Link>
        </div>
    )
}