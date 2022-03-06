export default function Card({ title, dataList }) {
	return (
		<div className='card'>
			<h1>{title}</h1>
			{dataList}
		</div>
	);
}
