import './index.css';
import React from 'react';
export default function List() {
  return (
    <>
      <ul>
        <li>No Idea</li>
        <li>Learning</li>
        <li>Project</li>
        <li>Ready :D </li>
      </ul>
      {React.createElement('p', {}, 'Hi, testing. This is not JSX')}
    </>
  );
}
