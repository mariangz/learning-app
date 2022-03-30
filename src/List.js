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
  const [showBtns, setShowBtns] = useState(true);

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
            className='task-container'
            onMouseEnter={() => setShowBtns(false)}
            onMouseLeave={() => setShowBtns(true)}
          >
            <h4>{item}</h4>

            <div
              className={clsx({
                'btn-tasks-container': true,
                hidden: showBtns,
              })}
            >
              <button
                className='edit-btn tasks'
                onClick={() => setEditVisible(true)}
              >
                <img src={edit} className='edit-icon' alt='' />
              </button>
              <button
                className='trash-btn tasks'
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
