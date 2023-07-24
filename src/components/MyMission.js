
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const { missionName, description, reserved } = mission; 
  return (
    <tr className="mission-item">
      <td className="mission_name">{missionName}</td>
      <td className="mission-decription">{description}</td>
      {reserved ? (
        <>
          <td className="join-status">
            <span className="mission-reserved">Cancel Reservation</span>
          </td>
          <td className="mission-action">
            <button className="join-mission" type="button">
              Join Mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="join-status">
            <span className="mission-unreserved">Reserve Rocket</span>
          </td>
          <td className="mission-action">
            <button className="leave-mission" type="button">
              Leave Mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
