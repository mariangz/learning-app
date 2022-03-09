export default function AddCardButton() {
	return (
		<div className='AddCardButton__container'>
			<input onC className='AddCardButton__input' />
			<button
				className='AddCardButton__btn'
				onClick={() => console.log('haloo')}
			>
				+ Add a Card
			</button>
		</div>
	);
}
