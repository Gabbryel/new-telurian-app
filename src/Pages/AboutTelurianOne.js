import { Fragment } from "react";
import {Link} from 'react-router-dom';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Title from "../Title/Title";
import AboutContainer from "../AboutContainer/AboutContainer";
import ItemsContainer from "../ItemsContainer/ItemsContainer";

const AboutTelurianOne = () => {
  return(
    <Fragment>
      <HamburgerMenu />
      <Title />
      <AboutContainer />
      <ItemsContainer/>
      <button id='order-here'><Link to="/order">ORDER HERE</Link></button>
    </Fragment>
  )
}

export default AboutTelurianOne;