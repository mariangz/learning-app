import plus from './images/plus.svg';

export default function AddButton(props) {
  return (
    <button
      onClick={props.onShowInputClick}
      className='AddCardButton__btn addColumn'
      id={props.id}
    >
      <img src={plus} className='AddCardButton__icon' alt='' />
      New Column
    </button>
  );
}
