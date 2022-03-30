import clsx from 'clsx';
import { useState } from 'react';
import next from './images/next.svg';
import prev from './images/prev.svg';
import trash from './images/trash.svg';
import edit from './images/edit.svg';
import cancel from './images/cancel.svg';
import save from './images/save.svg';

export default function List({
  item,
  onPrevClick,
  onNextClick,
  last,
  column,
  onRemoveTask,
  onUpdateTask,
  index,
}) {
  const [editVisisble, setEditVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(item);

  function handleFormSubmit(event) {
    event.preventDefault();
    setNewTitle(newTitle);
    setEditVisible(false);
    onUpdateTask(column, index, newTitle);
  }
  return (
    <li className='item'>
      <div className='list-content'>
        <button
          onClick={onPrevClick}
          className={clsx({ 'move-btn': true, hidden: column === 0 })}
        >
          <img className='prev-icon' src={prev} alt='' />
        </button>
        {editVisisble ? (
          <form className='form-container input' onSubmit={handleFormSubmit}>
            <div className='column-container'>
              <input
                type='text'
                className='AddCardButton__btn input'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                maxLength='10'
              />
              <button
                type='button'
                className='edit-buttons cancel'
                onClick={() => setEditVisible(false)}
              >
                <img src={cancel} alt='' />
              </button>
              <button className='edit-buttons save' type='submit'>
                <img src={save} alt='' />
              </button>
            </div>
          </form>
        ) : (
          <div className='task-container'>
            <div className='tasks-buttons-container'>
              <button
                className='edit-buttons tasks'
                onClick={() => setEditVisible(true)}
              >
                <img src={edit} className='edit-icon' alt='' />
              </button>
              <h4>{item}</h4>
              <button
                className='edit-buttons tasks'
                onClick={() => onRemoveTask(item, column)}
              >
                <img src={trash} className='trash-icon' alt='' />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={onNextClick}
          className={clsx({ 'move-btn': true, hidden: last })}
        >
          <img className='prev-icon' src={next} alt='' />
        </button>
      </div>
    </li>
  );
}
