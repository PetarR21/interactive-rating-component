import icon from '../images/illustration-thank-you.svg';

const SubmittedCard = ({ value }) => {
  return (
    <main className='submitted-card'>
      <img alt='thank you illustration' src={icon} />
      <div className='submitted-card__selected'>You selected {value} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </p>
    </main>
  );
};

export default SubmittedCard;
