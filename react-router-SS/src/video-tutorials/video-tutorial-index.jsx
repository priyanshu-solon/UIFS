import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './video-tutorial-index.css';
import { VideoTutorialHome } from './video-tutorial-home';
import { AdminLogin } from './admin-login';
import { AdminDashboard } from './admin-dashboard-';

export function VideoTutorialIndex(){
    return(
        <div className="container-fluid bg-image">
            <BrowserRouter>
                <header className='text-white text-center'>
                    <div className='fs-1  fw-bold'> Video Tutorials </div>
                    <div> [React, Java, AWS] </div>
                </header>
                <section className='mt-4'>
                    <Routes>
                        <Route path='/' element={<VideoTutorialHome />} />
                        <Route path='admin-login' element={<AdminLogin />} />
                        <Route path='admin-dashboard' element={<AdminDashboard />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}