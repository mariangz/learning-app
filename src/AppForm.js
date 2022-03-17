export default function AppForm(props) {
	const {
		entry,
		showInput,
		onFormSubmit,
		onShowInputClick,
		onEntryChange,
		id,
		validation,
	} = props;
	let btn;
	if (showInput[id]) {
		btn = (
			<>
				<form
					onSubmit={onFormSubmit}
					className='AddCardButton__container'
					id={id}
				>
					<input
						onChange={onEntryChange}
						placeholder='Task'
						value={entry}
						className='AddCardButton__input'
						id={id}
					/>
					<p id={id} className='validation-msg'>
						{validation}
					</p>
					<button type='submit' className='AddCardButton__btn' id={id}>
						Enter
					</button>
				</form>
			</>
		);
	} else {
		btn = (
			<button onClick={onShowInputClick} className='AddCardButton__btn' id={id}>
				+ Add a Task
			</button>
		);
	}
	return btn;
}
