import React from 'react';
import './Button.css';


export default function Button(props) {
  const onClick = () => props.onClick(props.increment);
  return (
  <button type="button" className="btn" onClick={onClick}>
    {props.increment}
  </button>)
}