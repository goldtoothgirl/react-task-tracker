// ra
// import React from 'react'
import PropTypes from 'prop-types'

//onClick passed in from Header.js
const Button = ({ color, text, onClick}) => {
  
   
//taken out beacuse it now in header
    //   const onClick = (e) => {
//     console.log('click')

//   }
//pass event object
//   const onClick = (e) => { //const onClick = () => {
//     console.log(e)
    
//   }
  
    return (
    //add event to button, set to function onCLick
  <button 
    onClick={onClick} 
    style={{backgroundColor: color}}
    className='btn'
    >
        {text}
    </button>
  )
  
//   (
//     <div>Button</div>
//   )
}

Button.defaultProps = {
    color:'steelblue'
}

// lower case, then upper case
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button