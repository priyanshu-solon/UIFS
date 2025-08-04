import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {NetflixIndex} from './components/Netflix/netflix-index.jsx'
import { DataBinding } from './components/Data-Binding/data-binding.jsx';
import { XMLHttp } from './components/APIcalls/xmlHttp.jsx';
import { FetchPromise } from './components/APIcalls/fetchPromise.jsx';
import { AxiosCall } from './components/APIcalls/axiosCall.jsx';
import { EventBinding } from './components/Event-Binding/eventOne.jsx';
import { EventBindingT } from './components/Event-Binding/eventTwo.jsx';
import { MouseMove } from './components/Event-Binding/eventFlag.jsx';
import { EMICalculator} from './components/Event-Binding/emiCalc.jsx';
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx';
import { CarouselDemo } from './components/APIcalls/fakestore.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarouselDemo/>
  </StrictMode>,
)
