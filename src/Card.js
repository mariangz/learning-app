import AddCardButton from './AddCardButton';

export default function Card({ title, dataList }) {
	return (
		<div className='card'>
			<h1 className='card card__title'>{title}</h1>
			<div className='card card__body'>{dataList}</div>
			<AddCardButton />
		</div>
	);
}
