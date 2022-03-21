import next from './images/next.svg';

export default function List({ item, onNextClick }) {
  return (
    <li>
      <span className='line'></span>
      <div className='list-content'>
        {item}
        <button onClick={onNextClick} className='next-btn'>
          <img className='next-icon' src={next} alt='' />
        </button>
      </div>
    </li>
  );
}
