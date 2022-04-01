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
        {editVisisble ? (
          <form className='form task' onSubmit={handleFormSubmit}>
            <input
              type='text'
              className='input task'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              maxLength='10'
            />
            <div className='button-container task'>
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
          <>
            <button
              onClick={onPrevClick}
              className={clsx({ hidden: column === 0 })}
            >
              <img src={prev} alt='' />
            </button>
            <div className='task-container'>
              <div className='button-container'>
                <button
                  className='edit-button tasks'
                  onClick={() => setEditVisible(true)}
                >
                  <img src={edit} alt='' />
                </button>
                <h3>{item}</h3>
                <button
                  className='edit-button tasks'
                  onClick={() => onRemoveTask(item, column)}
                >
                  <img src={trash} alt='' />
                </button>
              </div>
            </div>
          </>
        )}
        {!editVisisble && (
          <button onClick={onNextClick} className={clsx({ hidden: last })}>
            <img src={next} alt='' />
          </button>
        )}
      </div>
    </li>
  );
}
