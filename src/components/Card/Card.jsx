import React from 'react';
import './styles.css';

export default function Card ({ title, value, percentage }) {
  return (
    <div className="card">
      <strong>{ title }</strong>
      <span>{ value }</span>
      <span>{ percentage }</span>
    </div>
  )
}