import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function AddVideo(){

    const [categories, setCategories] = useState([{category_id:0, category_name:null}]);
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: '',
            description:'',
            url:'',
            likes:0,
            views:0,
            dislikes:0,
            category_id:0,
            comments:''
        },
        onSubmit: (video) => {
            var parsedVideo = {
                title: video.title,
                description:video.description,
                url:video.url,
                likes: parseInt(video.likes),
                views: parseInt(video.views),
                dislikes:parseInt(video.dislikes),
                category_id:parseInt(video.category_id),
                comments: video.comments
            }
            axios.post('http://localhost:3000/videos', parsedVideo)
            .then(()=>{
                console.log('video added');
            })
            alert('Video Added Successfully..');
            navigate('/admin-dashboard');
        }
    })

    useEffect(()=>{
        axios.get(`http://localhost:3000/categories`)
        .then(response=>{
            response.data.unshift({category_id:-1, category_name:'Select Category'});
            setCategories(response.data);
        })
    },[])

    return(
        <div className="bg-light p-2 w-50">
            <h2>Add Video</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl className="row">
                    <dt className="col-6">Title</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} type="text" name="title" /></dd>
                    <dt className="col-6">Description</dt>
                    <dd className="col-6"><input type="text" onChange={formik.handleChange} name="description" /></dd>
                    <dt className="col-6">Url</dt>
                    <dd className="col-6"><input type="text" onChange={formik.handleChange} name="url" /></dd>
                    <dt className="col-6">View</dt>
                    <dd className="col-6"><input type="number" onChange={formik.handleChange} name="views" /></dd>
                    <dt className="col-6">Likes</dt>
                    <dd className="col-6"><input type="number" onChange={formik.handleChange} name="likes" /></dd>
                    <dt className="col-6">Dislikes</dt>
                    <dd className="col-6"><input type="number" onChange={formik.handleChange} name="dislikes" /></dd>
                    <dt className="col-6">Category</dt>
                    <dd className="col-6">
                        <select name="category_id" onChange={formik.handleChange}>
                          {
                            categories.map(category=>
                                <option key={category.category_id} value={category.category_id}>
                                    {category.category_name}
                                </option>
                            )
                          }
                        </select>
                    </dd>
                    <dt className="col-6">Comments</dt>
                    <dd className="col-6"><input type="text" onChange={formik.handleChange} name="comments" /></dd>
                </dl>
                <button className="btn btn-warning mx-2" type="submit"> Add </button>
                <Link className="btn btn-warning" to="/admin-dashboard">Cancel</Link>
            </form>
        </div>
    )
}