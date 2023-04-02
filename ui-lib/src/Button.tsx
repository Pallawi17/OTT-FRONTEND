import React from 'react';
import './assets/css/style.css';

interface ButtonProps{
title: string
}
export default function ({title}: ButtonProps){
  return(
    <button className="button">{title}</button>
  )
}