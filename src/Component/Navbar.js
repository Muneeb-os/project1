import React from 'react';
import propTypes from 'prop-types'   
export default function Navbar(props) {
  return (
  <>
      <nav  style={props.mood}>
      <h2  style={props.mood}>{props.title}</h2>
      <ul>
        <li><a href="\"  style={props.mood}>{props.navHome}</a></li>
        <li><a href="\"  style={props.mood}>{props.navAbout}</a></li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.enableMood}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
</div>
    </nav>
  </>
  );
}
 Navbar.propTypes={
    title:propTypes.string,
    navAbout:propTypes.string.isRequired
 }