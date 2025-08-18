import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { HooksData } from './components/taskHook/hook-data.jsx';

// import { ContextDemo } from './components/ContextApi/context-demo.jsx';
// import {NetflixIndex} from './components/Netflix/netflix-index.jsx'
// import { DataBinding } from './components/Data-Binding/data-binding.jsx';
// import { XMLHttp } from './components/APIcalls/xmlHttp.jsx';
// import { FetchPromise } from './components/APIcalls/fetchPromise.jsx';
// import { AxiosCall } from './components/APIcalls/axiosCall.jsx';
// import { EventBinding } from './components/Event-Binding/eventOne.jsx';
// import { EventBindingT } from './components/Event-Binding/eventTwo.jsx';
// import { MouseMove } from './components/Event-Binding/eventFlag.jsx';
// import { EMICalculator} from './components/Event-Binding/emiCalc.jsx';
// import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx';
// import { FormDemo } from './components/ReactFormikYup/reactForm.jsx';
// import { FormikDemo } from './components/ReactFormikYup/formikForm.jsx';
// import { ValidationDemo } from './components/ReactFormikYup/formikFormV.jsx';
// import { FormYup } from './components/ReactFormikYup/formikYup.jsx';
// import { FormYup2 } from './components/ReactFormikYup/formikYup2.jsx';
// import { FormYup3 } from './components/ReactFormikYup/formikYup3.jsx';
// import { FormikE } from './components/ReactFormikYup/formikE.jsx';
// import { FormikE2 } from './components/ReactFormikYup/formikE2.jsx';
// import { FormEasy } from './components/ReactFormikYup/formikEasy.jsx';
// import HookForm from './components/ReactHookForm/reactHF.jsx';
// import HookFormV from './components/ReactHookForm/reactHFV.jsx';
// import { FormNew } from './components/controlledComponents/formNew.jsx';
// import { ControlledDemo } from './components/controlledComponents/controlledDemo.jsx';
// import { ConditionDemo } from './components/ConditionalRendering/conditionalRender.jsx';
// import { ConditionDemo2 } from './components/ConditionalRendering/conditionalRender2.jsx';
// import { ConditionDemo3 } from './components/ConditionalRendering/conditionalRender3.jsx';
// import { Login } from './components/Login/login.jsx';
// import { ToggleTable } from './components/ToggleTable/toggleTable.jsx';
// import { LifeCycleDemo } from './components/LifeCycle/Lifecycle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <HooksData/>
    </>
  </StrictMode>,
)
