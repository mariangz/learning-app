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
      <div className='content'>
        <button
          onClick={onPrevClick}
          className={clsx({ 'move-btn': true, hidden: column === 0 })}
        >
          <img className='icon' src={prev} alt='' />
        </button>
        {editVisisble ? (
          <form className='form' onSubmit={handleFormSubmit}>
            <div className='container'>
              <input
                type='text'
                className='input'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                maxLength='10'
              />
              <button
                type='button'
                className='edit-button cancel'
                onClick={() => setEditVisible(false)}
              >
                <img src={cancel} alt='' />
              </button>
              <button className='edit-button save' type='submit'>
                <img src={save} alt='' />
              </button>
            </div>
          </form>
        ) : (
          <div className='task-container'>
            <div className='buttons-container'>
              <button
                className='edit-button tasks'
                onClick={() => setEditVisible(true)}
              >
                <img src={edit} alt='' />
              </button>
              <h6>{item}</h6>
              <button
                className='edit-button'
                onClick={() => onRemoveTask(item, column)}
              >
                <img src={trash} alt='' />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={onNextClick}
          className={clsx({ 'edit-button': true, hidden: last })}
        >
          SDSD
          <img src={next} alt='' />
        </button>
      </div>
    </li>
  );
}
