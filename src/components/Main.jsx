import StarIcon from '../assets/images/icon-star.svg'

const Main = ({ setSubmitted, rating, setRating }) => {
  return (
    <main className='card'>
      <div className='star-icon-container'>
        <img src={StarIcon} alt='Star Icon' />
      </div>
      <div className='card-main'>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className='ratings'>
          <div
            onClick={() => setRating(1)}
            className={`rating-container ${rating === 1 ? 'selected' : ''}`}
          >
            <div className='rating rating-1'>1</div>
          </div>
          <div
            onClick={() => setRating(2)}
            className={`rating-container ${rating === 2 ? 'selected' : ''}`}
          >
            <div className='rating rating-2'>2</div>
          </div>
          <div
            onClick={() => setRating(3)}
            className={`rating-container ${rating === 3 ? 'selected' : ''}`}
          >
            <div className='rating rating-3'>3</div>
          </div>
          <div
            onClick={() => setRating(4)}
            className={`rating-container ${rating === 4 ? 'selected' : ''}`}
          >
            <div className='rating rating-4'>4</div>
          </div>
          <div
            onClick={() => setRating(5)}
            className={`rating-container ${rating === 5 ? 'selected' : ''}`}
          >
            <div className='rating rating-5'>5</div>
          </div>
        </div>
      </div>
      <button type='button' onClick={() => setSubmitted(true)}>
        SUBMIT
      </button>
    </main>
  )
}

export default Main
