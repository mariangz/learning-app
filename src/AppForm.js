import plus from './images/plus.svg';
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
            Save
          </button>
        </form>
      </>
    );
  } else {
    btn = (
      <button onClick={onShowInputClick} className='AddCardButton__btn' id={id}>
        <img src={plus} className='AddCardButton__icon' alt='' />
        <p className='AddCardButton__text'>Add Task</p>
      </button>
    );
  }
  return btn;
}
