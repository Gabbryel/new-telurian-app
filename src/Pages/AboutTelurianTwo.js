import { Fragment } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Title from "../Title/Title";
import AboutContainer from "../AboutContainer/AboutContainer";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import {Link} from 'react-router-dom';
const AboutTelurianTwo = () => {
  return(
    <Fragment>
      <HamburgerMenu />
      <Title />
      <AboutContainer />
      <ItemsContainer/>
      <button id='order-here'><Link to="/order">ORDER HERE</Link></button>
      <div id='credits'>
        <p>A new <b>ZEBRA RECORDS</b> production in colaboration with <b>REBEL MUSIC</b> | Produced by <b>GRISHU & KEROSEN</b> | Production assistant: <b>ALEX HRISCU</b> Mix and mastering: <b>HARITON PĂTRAȘCU / RoSound Mastering Studio</b> | Art direction & concept: <b>GIANINY MUNTEANU / ReBelle Arte</b> Logo and graphics: <b>MERAKI ARTS</b> | Photo & Lights: <b>URDĂ PETRE</b> Photo editing: <b>ALEX ȚUȚURESCU</b> Video editing: <b>SEBI FRÂNCU</b> and <b>RAREȘ HRISCU</b> | Website: <b>GABRIEL URSACHE</b></p>
        <p>Printed in limited edition of 222 units. Released on 1st of December 2021.</p>
      </div>
    </Fragment>
  )

}

export default AboutTelurianTwo;