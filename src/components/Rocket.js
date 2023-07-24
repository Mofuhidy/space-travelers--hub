import PropTypes from 'prop-types';

function Rocket({
  id, title, image, description,
}) {
  return (
    <>
      <li id={id}>
        <div>
          <img src={image} alt="rocket" />
        </div>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <button className="" type="button">Launch</button>
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
