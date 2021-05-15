import React from 'react';
import './styles.css';

export default function FlatCard ({ title, value, percentage }) {
  return (
    <div className="flatCard">
      <strong>{ title }</strong>
      <span>{ value }</span>
      <span>{ percentage }</span>
    </div>
  )
}