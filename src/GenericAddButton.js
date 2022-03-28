import { useState } from 'react';
import clsx from 'clsx';
import plus from './images/plus.svg';

export default function GenericAddButton(props) {
  const { onFormSubmit, id, validation, labelName = 'lol' } = props;
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [entry, setEntry] = useState('');

  const onEntryChange = (event) => {
    const e = event.target;
    setEntry(e.value);
  };

  const toggleForm = () => {
    setFormIsVisible(!formIsVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(entry);
    if (!entry) return;
    setEntry('');
    setFormIsVisible(false);
  };

  return (
    <>
      {formIsVisible ? (
        <form
          onSubmit={handleSubmit}
          className='AddCardButton__container'
          id={id}
        >
          <input
            onChange={onEntryChange}
            placeholder={`Enter title of ${labelName}...`}
            value={entry}
            className='AddCardButton__input'
            id={id}
          />
          <p id={id} className='validation-msg'>
            {validation}
          </p>
          <div className='AddCardButton__btn-container'>
            <button
              type='button'
              onClick={toggleForm}
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
      ) : (
        <button
          onClick={toggleForm}
          className={clsx({
            'AddCardButton__btn add': true,
            addColumn: labelName === 'Column',
          })}
          id={props.id}
        >
          <img src={plus} className='AddCardButton__icon' alt='' />
          Add {labelName}
        </button>
      )}
    </>
  );
}
