// import React from 'react'

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

  return (
    //This is getting passed in as a prop to Button.js
    // className rather than class
    <header className='header'>
        {/* inline style, double braces style={{color: 'red', backgroundColor:'black'}} */}
        <h1 >{title}</h1>
        {/* <button className='btn'>Add</button> moved to Button.js*/}
        {/* set to function onCLick */}
        {/* have onClick as prop */}
        {/* calls funtion abouve const onClick = () => {
        console.log('Click')
    } */}
        <Button color='green' text='Add' onClick= {onClick}/>
        {/* <Button color='red' text='Hello1'/>
        <Button color='blue' text='Hello2'/> */}
    </header>
  )
}

Header.defaultProps = {
    //set to object
    title: 'Task Tracker',
}

//set to object , lowercase
Header.propTypes = { 
    //uppercase, is it required?
    title: PropTypes.string.isRequired,

}


{/* CSS in JS 
<h1 style={headingStyle}>{title}</h1>
const headingStyle = {
    color: 'red', backgroundColor:'black'
} */}

export default Header