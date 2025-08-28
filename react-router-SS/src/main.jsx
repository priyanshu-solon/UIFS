import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { VideoTutorialHome } from './video-tutorials/video-tutorial-home.jsx'
import { VideoTutorialIndex } from './video-tutorials/video-tutorial-index.jsx'

createRoot(document.getElementById('root')).render(
  
    <VideoTutorialIndex/>
  
)
