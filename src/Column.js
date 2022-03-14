import { useState } from 'react';
export default function Column({ title, tasksList, children }) {
	return (
		<div className='column'>
			<h1 className='column__title'>{title}</h1>
			<div className='column__body'>
				<ul>{tasksList}</ul>
			</div>
			{children}
		</div>
	);
}
