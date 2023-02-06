import { useState } from 'react';
import starIcon from '../images/icon-star.svg';
import RatingSelect from './RatingSelect';

const RatingForm = ({ handleSubmit }) => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <main>
      <form
        className='rating-form'
        onSubmit={(event) => {
          handleSubmit(event, currentValue);
        }}
      >
        <img alt='orange star icon' className='rating__star-icon' src={starIcon}></img>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </p>
        <RatingSelect setCurrentValue={setCurrentValue} />
        <button type='submit' disabled={currentValue === 0}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default RatingForm;
