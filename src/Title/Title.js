import React from 'react';
import './Title.scss';
import {useLocation, Link} from 'react-router-dom';


const Title = () => {
    const {pathname} = useLocation();

    return(
        <div className='landing-page__title'>
            {
            pathname === '/' ? <h1 id='title' className='anor title-shadow light-grey'><Link to="/" >TELURIAN <span className='abw title-shadow golden'>2</span></Link></h1>
            : pathname === '/about-telurian-1' ? <h1 id='title-var-1' className='anor grey'><Link to="/about">TELURIAN 1</Link></h1>
            : pathname === '/about-telurian-2' || pathname === '/order' || pathname === '/merch' ? <h1 id='title-var-1' className='anor grey'><Link to="/">TELURIAN 2</Link></h1>
            : pathname === '/about-telurian' || pathname === '/about-tellurium' ? <h1 id='title-var-1' className='anor light-grey'><Link to="/about">TELURIAN</Link></h1>
            : pathname === '/tdd-gallery' || pathname === '/tace-gallery' ? <h1 id='title-var-1' style={{fontFamily: 'Anor', paddingTop: '0em'}}><Link to="/">TELURIAN</Link></h1>
            : <h1 id='title-var-1' style={{fontFamily: 'Abw', paddingTop: '0em'}}><Link to="/">TELURIAN</Link></h1>
            }
            {pathname === '/about-telurian-2' || pathname === '/' || '/order' ? <h2 className='light-grey subtitle-shadow'>THE NEW SOUND OF MINIMAL</h2> : <h2>THE ROMINIMAL EXPERIENCE</h2>}
        </div>
    );
}

export default Title;