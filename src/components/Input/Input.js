import React from 'react';
import classes from './input.module.css';

const Input = (props) => {

    return (
      <div className={classes.InputDiv}>
        <label className={classes.LabelStyle}>{props.labelname}</label>
        <input className={classes.InputElement}  ref={props.inputelement} {...props}/>
        <p>
          {props.typeHint}
        </p>
      </div>
    )
}

export default Input;
