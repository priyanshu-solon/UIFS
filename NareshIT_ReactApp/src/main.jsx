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
import { FormDemo } from './components/ReactForms/reactForm.jsx';
import { FormikDemo } from './components/ReactForms/formikForm.jsx';
import { ValidationDemo } from './components/ReactForms/formikFormV.jsx';
import { FormYup } from './components/ReactForms/formikYup.jsx';
import { FormYup2 } from './components/ReactForms/formikYup2.jsx';
import { FormYup3 } from './components/ReactForms/formikYup3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='d-flex'>
    <FormDemo/>
    <FormikDemo/>
    <ValidationDemo/>
    </div>
    <br />
    <div className='d-flex'>
    <FormYup/>
    <FormYup2/>
    <FormYup3/>
    </div>
  </StrictMode>,
)
