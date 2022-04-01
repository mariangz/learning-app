import { useState } from 'react';
import clsx from 'clsx';
import plus from './images/plus.svg';

export default function GenericAddButton(props) {
  const { onFormSubmit, id, labelName } = props;
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [entry, setEntry] = useState('');
  const [validation, setValidation] = useState(true);

  const onEntryChange = (event) => {
    setEntry(event.target.value);
  };

  const toggleForm = () => {
    setFormIsVisible(!formIsVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!entry.trim()) {
      setValidation(!validation);
      return;
    }
    setValidation(true);
    onFormSubmit(entry);

    setEntry('');
    setFormIsVisible(!validation);
  };

  return (
    <>
      {formIsVisible ? (
        <form onSubmit={handleSubmit} className='form' id={id}>
          <input
            onChange={onEntryChange}
            placeholder={`Enter title of ${labelName}...`}
            value={entry}
            className={clsx({ input: true, error: !validation })}
            id={id}
            maxLength='15'
            required
          />
          <p className='validation-msg'>
            {validation ? '' : `Enter a ${labelName}`}
          </p>
          <div className='button-container'>
            <button
              type='button'
              onClick={() => {
                toggleForm();
                setValidation(true);
              }}
              className='button'
              id={id}
            >
              Cancel
            </button>
            <button type='submit' className='button save' id={id}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={toggleForm}
          className={clsx({
            button: true,
            add: true,
            addColumn: labelName === 'Column',
          })}
          id={props.id}
        >
          <img src={plus} className='icon' alt='' />
          Add {labelName}
        </button>
      )}
    </>
  );
}
