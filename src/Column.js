import { useState } from 'react';
import GenericAddButton from './GenericAddButton';
import trash from './images/trash.svg';
import edit from './images/edit.svg';
import cancel from './images/cancel.svg';
import save from './images/save.svg';

export default function Column({
  title,
  tasksList,
  children,
  onFormSubmit,
  index,
  entry,
  validation,
  onRemoveColumn,
  onUpdateColumn,
}) {
  const [editVisible, setEditVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  function handleFormSubmit(event) {
    event.preventDefault();
    setNewTitle(newTitle);
    setEditVisible(false);
    onUpdateColumn(newTitle, index);
  }
  return (
    <div className='column'>
      {editVisible ? (
        <form className='form column-container' onSubmit={handleFormSubmit}>
          <input
            type='text'
            className='AddCardButton__btn input'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            type='button'
            className='edit-buttons'
            onClick={() => setEditVisible(!editVisible)}
          >
            <img src={cancel} alt='' />
          </button>
          <button className='edit-buttons' type='submit'>
            <img src={save} alt='' />
          </button>
        </form>
      ) : (
        <div className='title column-container'>
          <h2 className='column__title'>{title}</h2>

          <div className='column-buttons-container'>
            <button
              type='button'
              className='edit-buttons'
              onClick={() => setEditVisible(true)}
            >
              <img src={edit} alt='' />
            </button>
            <button
              type='button'
              className='edit-buttons'
              onClick={() => {
                onRemoveColumn(title);
              }}
            >
              <img src={trash} alt='' />
            </button>
          </div>
        </div>
      )}
      <div className='column__body'>
        <ul>{tasksList}</ul>
      </div>
      {children}
      <GenericAddButton
        {...{
          onFormSubmit,
          entry,
          validation,
          labelName: 'Task',
        }}
      />
    </div>
  );
}
