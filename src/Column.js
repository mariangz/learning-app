import clsx from 'clsx';
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
  const [showBtns, setShowBtns] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setNewTitle(newTitle);
    setEditVisible(false);
    onUpdateColumn(newTitle, index);
  }
  return (
    <div className='column'>
      {editVisible ? (
        <form className='title-container input' onSubmit={handleFormSubmit}>
          <input
            type='text'
            className='AddCardButton__btn input'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            type='button'
            className='input-btns cancel-btn'
            onClick={() => setEditVisible(false)}
          >
            <img src={cancel} alt='' />
          </button>
          <button className='input-btns save' type='submit'>
            <img src={save} alt='' />
          </button>
        </form>
      ) : (
        <div
          className='title-container'
          onMouseEnter={() => setShowBtns(true)}
          onMouseLeave={() => setShowBtns(false)}
        >
          <h2 className='column__title'>{title}</h2>
          {showBtns && (
            <>
              <button
                type='button'
                className='edit-btns edit-btn'
                onClick={() => setEditVisible(true)}
              >
                <img src={edit} alt='' />
              </button>
              <button
                type='button'
                className='edit-btns'
                onClick={() => {
                  onRemoveColumn(title);
                }}
              >
                <img src={trash} alt='' />
              </button>
            </>
          )}
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
