import next from './images/next.svg';

export default function List({ item }) {
  return (
    <li key={item}>
      <span className='line'></span>
      <div className='list-content'>
        {item}
        <button className='next-btn'>
          <img className='next-icon' src={next} alt='' />
        </button>
      </div>
    </li>
  );
}
