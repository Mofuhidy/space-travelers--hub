import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookingRocket } from '../redux/rockets/rocketsSlice';

function Rocket({
  id, title, image, description, reserved,
}) {
  const dispatch = useDispatch();
  const handleBooking = (id) => {
    dispatch(bookingRocket(id));
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
          <button onClick={() => handleBooking(id)} type="button">Reverse Rocket</button>
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
