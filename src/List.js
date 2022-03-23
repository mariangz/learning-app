import next from './images/next.svg';
import prev from './images/prev.svg';

export default function List({ item, onPrevClick, onNextClick, column, last }) {
  console.log(column);
  return (
    <li>
      <span className='line'></span>
      <div className='list-content'>
        {column !== 0 && (
          <button onClick={onPrevClick} className='move-btn'>
            <img className='prev-icon' src={prev} alt='' />
          </button>
        )}
        {item}
        {!last && (
          <button onClick={onNextClick} className='move-btn'>
            <img className='prev-icon' src={next} alt='' />
          </button>
        )}
      </div>
    </li>
  );
}
