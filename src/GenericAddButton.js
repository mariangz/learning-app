import { useState } from 'react';
import clsx from 'clsx';
import plus from './images/plus.svg';

export default function GenericAddButton(props) {
  const { onFormSubmit, id, labelName = 'lol' } = props;
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [entry, setEntry] = useState('');
  // const [entry, setEntry] = useState({});
  const [validation, setValidation] = useState(true);

  const onEntryChange = (event) => {
    const e = event.target;
    setEntry(e.value);
  };

  const toggleForm = () => {
    setFormIsVisible(!formIsVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!entry) {
      setValidation(!validation);
      return;
    }
    onFormSubmit(entry);

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
          <p className='validation-msg'>
            {validation ? '' : `Enter a ${labelName}`}
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
