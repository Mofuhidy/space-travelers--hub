import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookingRocket, cancelBookingRocket } from '../redux/rockets/rocketsSlice';

function Rocket({
  id, title, image, description, reserved,
}) {
  const dispatch = useDispatch();
  const handleBooking = (id) => {
    dispatch(bookingRocket(id));
  };

  const handleBookingCancel = (id) => {
    dispatch(cancelBookingRocket(id));
  };

  return (
    <>
      <li id={id} className="rocket">
        <img src={image} alt="rocket" />
        <div className="detailsContainer">
          <h2>{title}</h2>
          <p>
            {description}
          </p>

          {
            !reserved ? (
              <button onClick={() => handleBooking(id)} type="button" className="reserved">Reverse Rocket</button>
            ) : (
              <button onClick={() => handleBookingCancel(id)} type="button" className="reservedcancel">Cancel Reservation</button>
            )
          }

        </div>
      </li>
    </>
  );
}

Rocket.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default Rocket;
