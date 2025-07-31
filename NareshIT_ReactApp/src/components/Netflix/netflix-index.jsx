import './netflix-index.css';
import { NetflixHeader } from './netflix-header';
import { NetflixSection } from './netflix-section';

export function NetflixIndex(){
    return(
        <div className="banner">
          <div className='shade'>
              <NetflixHeader />
              <NetflixSection />
          </div>
        </div>
    )
}
