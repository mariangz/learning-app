import AddCardButton from './AddCardButton';

export default function Column({ title, dataList }) {
	return (
		<div className='column'>
			<h1 className='column column__title'>{title}</h1>
			<div className='column column__body'>{dataList}</div>
			<AddCardButton />
		</div>
	);
}
