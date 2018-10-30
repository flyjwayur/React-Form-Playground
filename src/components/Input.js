import React from 'react';
import classes from './input.module.css';

const Input = (props) => {
  return (
    <div className={classes.InputDiv}>
      <label className={classes.LabelStyle}>{props.label}</label>
      <input className={classes.InputElement} {...props}/>
    </div>
    
  )
}

export default Input;