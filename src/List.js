import clsx from 'clsx';
import next from './images/next.svg';
import prev from './images/prev.svg';

export default function List({
  item,
  onPrevClick,
  onNextClick,
  column,
  last,
  onRemoveSubmit,
  id,
  value,
}) {
  function handleFormSubmit(event) {
    event.preventDefault();
    onRemoveSubmit(item, id);
  }
  return (
    <li>
      <div className='list-content'>
        <button
          onClick={onPrevClick}
          className={clsx({ 'move-btn': true, hidden: column === 0 })}
        >
          <img className='prev-icon' src={prev} alt='' />
        </button>
        {item}
        <button
          onClick={onNextClick}
          className={clsx({ 'move-btn': true, hidden: last })}
        >
          <img className='prev-icon' src={next} alt='' />
        </button>
        <form onSubmit={handleFormSubmit} id={id} item={item}>
          <button>Remove</button>
        </form>
      </div>
    </li>
  );
}
