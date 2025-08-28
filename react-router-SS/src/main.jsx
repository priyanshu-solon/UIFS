import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { NetflixIndex } from './components/netflix/netflix-index.jsx'
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { EventBinding } from './components/event-binding/event-binding.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { MouseAnimation } from './components/mouse-animation/mouse-animation.jsx'
import { MouseMove } from './components/mouse-move/mouse-move.jsx'
import { KeyDemo } from './components/keydemo/keydemo.jsx'
import { EMICalculator } from './components/emi-calculator/emi-calculator.jsx'
import { ButtonDemo } from './components/button-demo/button-demo.jsx'
import { DebounceDemo } from './components/debounce-demo/debounce-demo.jsx'
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx'
import { StopWatch } from './components/stop-watch/stop-watch.jsx'
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
import { FormDemo } from './components/form-demo/form-demo.jsx'
import { FormikDemo } from './components/formik-demo/formik-demo.jsx'
import { FormNew } from './components/form-new/form-new.jsx'
import { ControlledDemo } from './components/controlled-demo/controlled-demo.jsx'
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx'
import { LifeCycleDemo } from './components/life-cycle-demo/life-cycle-demo.jsx'
import { ContextDemo } from './components/context-demo/context-demo.jsx'
import { FakestoreIndex } from './fakestore/fakestore-index.jsx'
import { ReducerDemo } from './components/reducer-demo/reducer-demo.jsx'
import { PortfolioIndex } from './portfolio/portfolio-index.jsx'
import { ShoppingIndex } from './shopping/shopping-index.jsx'
import { VideoTutorialHome } from './video-tutorials/video-tutorial-home.jsx'
import { VideoTutorialIndex } from './video-tutorials/video-tutorial-index.jsx'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
  
    <CookiesProvider>
        <VideoTutorialIndex/>
    </CookiesProvider>
  
)
