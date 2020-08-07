import React from 'react';
import styles from './Button.module.css';

export default function Button(props) {
  const onClick = () => props.onClick(props.increment);
  return (
    <button type='button' className={styles.btn} onClick={onClick}>
      {props.increment}
    </button>
  );
}
