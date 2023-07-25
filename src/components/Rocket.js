import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketHandler } from '../redux/rockets/rocketsSlice';

function Rocket({
  id, title, image, description, reserved,
}) {
  const dispatch = useDispatch();
  const handleBooking = (id) => {
    dispatch(rocketHandler(id));
  };

  const handleBookingCancel = (id) => {
    dispatch(rocketHandler(id));
  };

  return (
    <>
      <li id={id} className="rocket">
        <img src={image} alt="rocket" />
        <div className="detailsContainer">
          {
            !reserved ? (
              <>
                <h2 className="title">{title}</h2>
                <p>
                  {description}
                </p>
                <button onClick={() => handleBooking(id)} type="button" className="reserved">Reverse Rocket</button>
              </>
            ) : (
              <>
                <h2 className="title">{title}</h2>
                <p>
                  <span className="reservedBadge">Reserved</span>
                  {description}
                </p>
                <button onClick={() => handleBookingCancel(id)} type="button" className="reservedcancel">Cancel Reservation</button>
              </>
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
