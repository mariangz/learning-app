import { useState } from 'react';
import clsx from 'clsx';
import GenericAddButton from './GenericAddButton';
import trash from './images/trash.svg';
import edit from './images/edit.svg';
import cancel from './images/cancel.svg';
import save from './images/save.svg';
import next from './images/next.svg';
import prev from './images/prev.svg';

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
  onMovePrevColumnClick,
  onMoveNextColumnClick,
  last,
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
      <div className='button-container'>
        <button
          onClick={onMovePrevColumnClick}
          className={clsx({ hidden: index === 0 })}
        >
          <img src={prev} alt='' />
        </button>
        <button
          onClick={onMoveNextColumnClick}
          className={clsx({ hidden: last })}
        >
          <img src={next} alt='' />
        </button>
      </div>
      {editVisible ? (
        <form className='form column' onSubmit={handleFormSubmit}>
          <input
            type='text'
            className='input'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            maxLength='10'
          />
          <div className='button-container'>
            <button
              type='button'
              className='edit-button accent'
              onClick={() => setEditVisible(!editVisible)}
            >
              <img src={cancel} alt='' />
            </button>
            <button className='edit-button accent' type='submit'>
              <img src={save} alt='' />
            </button>
          </div>
        </form>
      ) : (
        <div className='header'>
          <h2 className='title'>{title}</h2>

          <div className='button-container'>
            <button
              type='button'
              className='edit-button accent'
              onClick={() => setEditVisible(true)}
            >
              <img src={edit} alt='' />
            </button>
            <button
              type='button'
              className='edit-button accent'
              onClick={() => {
                onRemoveColumn(title);
              }}
            >
              <img src={trash} alt='' />
            </button>
          </div>
        </div>
      )}
      <div className='body'>
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
