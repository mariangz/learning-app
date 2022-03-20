import plus from './images/plus.svg';
export default function AppForm(props) {
  const {
    entry,
    showInput,
    onFormSubmit,
    onShowInputClick,
    onEntryChange,
    onCancelClick,
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
            placeholder='Enter the title of the task...'
            value={entry}
            className='AddCardButton__input'
            id={id}
          />
          <p id={id} className='validation-msg'>
            {validation}
          </p>
          <div className='AddCardButton__btn-container'>
            <button
              onClick={onCancelClick}
              className='AddCardButton__btn cancel'
              id={id}
            >
              Cancel
            </button>
            <button type='submit' className='AddCardButton__btn save' id={id}>
              Save
            </button>
          </div>
        </form>
      </>
    );
  } else {
    btn = (
      <button
        onClick={onShowInputClick}
        className='AddCardButton__btn add'
        id={id}
      >
        <img src={plus} className='AddCardButton__icon' alt='' />
        <p className='AddCardButton__text'>Add Task</p>
      </button>
    );
  }
  return btn;
}
