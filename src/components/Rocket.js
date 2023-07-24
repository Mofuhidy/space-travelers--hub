import PropTypes from 'prop-types';

function Rocket({
  id, title, image, description,
}) {
  return (
    <>
      <li id={id} className="rocket">
        <img src={image} alt="rocket" />
        <div className="detailsContainer">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
          <button className="" type="button">Reverse Rocket</button>
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
