import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './video-tutorial-index.css';
import { VideoTutorialHome } from './video-tutorial-home';
import { AdminLogin } from './admin-login';
import { AdminDashboard } from './admin-dashboard-';
import { AddVideo } from './add-video';
import { EditVideo } from './edit-video';
import { DeleteVideo } from './delete-video';
import { UserLogin } from './user-login';
import { UserRegister } from './user-register';
import { UserDashboard } from './user-dashboard';

export function VideoTutorialIndex(){
    return(
        <div className="container-fluid bg-image">
            <BrowserRouter>
                <header className='text-white text-center'>
                    <div className='fs-1  fw-bold'> <Link className='btn btn-light' to="/"><span className='bi bi-house-door'></span></Link> Video Tutorials </div>
                    <div> [React, Java, AWS] </div>
                </header>
                <section className='mt-4'>
                    <Routes>
                        <Route path='/' element={<VideoTutorialHome />} />
                        <Route path='admin-login' element={<AdminLogin />} />
                        <Route path='admin-dashboard' element={<AdminDashboard />} />
                        <Route path='add-video' element={<AddVideo />} />
                        <Route path='edit-video/:id' element={<EditVideo />} />
                        <Route path='delete-video/:id' element={<DeleteVideo />} />
                        <Route path='user-login' element={<UserLogin />} />
                        <Route path='user-register' element={<UserRegister />} />
                        <Route path='user-dashboard' element={<UserDashboard />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}