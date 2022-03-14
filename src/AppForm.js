export default function AppForm(props) {
	const { entry, showInput, onFormSubmit, onShowInputClick, onEntryChange } =
		props;
	// console.log(props);
	let btn;
	if (showInput) {
		btn = (
			<>
				<form onSubmit={onFormSubmit} className='AddCardButton__container'>
					<input
						onChange={onEntryChange}
						placeholder='Task'
						value={entry}
						className='AddCardButton__input'
					/>
					<button type='submit' className='AddCardButton__btn'>
						Enter
					</button>
				</form>
			</>
		);
	} else {
		btn = (
			<button onClick={onShowInputClick} className='AddCardButton__btn'>
				+ Add a Task
			</button>
		);
	}
	return btn;
}
