import ThankYouIcon from '../assets/images/illustration-thank-you.svg'

const ThankYou = ({ rating }) => {
  return (
    <div className='card card-thank-you'>
      <img src={ThankYouIcon} alt='Thank You' />
      <div className='feedback-text-container'>
        <div className='feedback-text'>You selected {rating} out of 5</div>
      </div>
      <div className='card-main'>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default ThankYou
