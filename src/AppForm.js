import plus from './images/plus.svg';
export default function AppForm(props) {
  let btn;
  if (props.showInput[props.id]) {
    btn = (
      <>
        <form
          onSubmit={props.onFormSubmit}
          className='AddCardButton__container'
          id={props.id}
        >
          <input
            onChange={props.onEntryChange}
            placeholder='Enter title of task...'
            value={props.entry}
            className='AddCardButton__input'
            id={props.id}
          />
          <p id={props.id} className='validation-msg'>
            {props.validation}
          </p>
          <div className='AddCardButton__btn-container'>
            <button
              type='button'
              onClick={props.onCancelClick}
              className='AddCardButton__btn cancel'
              id={props.id}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='AddCardButton__btn save'
              id={props.id}
            >
              Save
            </button>
          </div>
        </form>
      </>
    );
  } else {
    btn = (
      <button
        onClick={props.onShowInputClick}
        className='AddCardButton__btn add'
        id={props.id}
      >
        <img src={plus} className='AddCardButton__icon' alt='' />
        Add Task
      </button>
    );
  }
  return btn;
}
