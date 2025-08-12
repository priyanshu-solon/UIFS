import './login.css';
import { useCaptcha } from '../../hooks/use-captcha';
import { useFetch } from '../../hooks/use-fetch';

export function Login(){

    const code = useCaptcha();

    const categories = useFetch('https://fakestoreapi.com/products/categories');

    return(
        <>
           <div className='d-flex justify-content-center'>
              <form className="login-form mt-4 rounded rounded-2">
                <h2 className='bi bi-person-circle'> User login</h2>
                <dl>
                  <dt>User Name</dt>
                  <dd><input type="text" className='form-control' /></dd>
                  <dt>Password</dt>
                  <dd><input type="password" className='form-control' /></dd>
                  <dt>Verify Code <button className='btn bi bi-arrow-clockwise'></button> </dt>
                  <dd>{code}</dd>
                </dl>
                <button className='btn btn-warning w-100'>Login</button>
                <ul>
                  {
                    categories.map(category=> <li key={category}>{category}</li>)
                  }
                </ul>
            </form>
           </div>
        </>
    )
}