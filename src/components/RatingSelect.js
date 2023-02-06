import { useState } from 'react';

const RatingSelect = ({ setCurrentValue }) => {
  const [selected, setSelected] = useState(0);

  const handleChange = (event) => {
    setSelected(+event.target.value);
    setCurrentValue(+event.target.value);
  };

  return (
    <ul className='rating-form__select'>
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
