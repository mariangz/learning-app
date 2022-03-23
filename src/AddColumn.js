import plus from './images/plus.svg';

export default function AddButton(props) {
  let btn;
  if (props.showInputColumn) {
    btn = (
      <>
        <form
          onSubmit={props.onColumnSubmit}
          className='AddCardButton__container addBtnContainer'
          id={props.id}
        >
          <input
            onChange={props.onColumnChange}
            placeholder='Enter title of column...'
            value={props.columnTitle}
            className='AddCardButton__input inputColumn'
            id={props.id}
          />
          <p className='validation-msg'>{props.validationColumn}</p>
          <div className='AddCardButton__btn-container'>
            <button
              type='button'
              onClick={props.onCancelColumnClick}
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
        onClick={props.onShowInputColumnClick}
        className='AddCardButton__btn addColumn'
        id={props.id}
      >
        <img src={plus} className='AddCardButton__icon' alt='' />
        New Column
      </button>
    );
  }
  return btn;
}
