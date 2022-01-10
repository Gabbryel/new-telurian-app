import { Fragment } from "react";
import Title from '../Title/Title';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return(
    <Fragment>
      <h3 id='out'>OUT NOW</h3>
      <Title />
      <button id='enter-btn'><Link to="/about-telurian-2" className="light-grey title-shadow">ENTER</Link></button>
    </Fragment>
  )
}

export default HomePage;