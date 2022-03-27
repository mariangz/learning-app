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
  onRemoveSubmit,
  column,
  value,
}) {
  const [editVisisble, setEditVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(item);
  function handleFormSubmit(event) {
    event.preventDefault();
    onRemoveSubmit(item, column);
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
          <div className='task-container'>
            <h4>{item}</h4>
            <div className='btn-tasks-container'>
              <button className='trash-btn tasks'>
                <img src={edit} className='edit-icon' alt='' />
              </button>
              <button className='trash-btn tasks'>
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
