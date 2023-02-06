import { useState } from 'react';

import RatingForm from './components/RatingForm';
import SubmittedCard from './components/SubmittedCard';

const App = () => {
  const [submited, setSubmitted] = useState(0);

  const handleSubmit = (event, value) => {
    event.preventDefault();
    setSubmitted(value);
  };

  return submited == 0 ? (
    <RatingForm handleSubmit={handleSubmit} />
  ) : (
    <SubmittedCard value={submited} />
  );
};

export default App;
