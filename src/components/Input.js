import React from 'react';
import classes from './input.module.css';

const Input = (props) => {

    return (
      <div className={classes.InputDiv}>
        <label className={classes.LabelStyle}>{this.props.labelname}</label>
        <input className={classes.InputElement}  ref={this.props.inputelement} {...this.props}/>
        <p>
          {this.props.typeHint}
        </p>
      </div>
    )
}

export default Input;
