/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionHandler } from '../redux/missions/missonsSlice';
import './myMission.css';

const Mission = ({ mission }) => {
  const {
    mission_id, mission_name, description, reserved,
  } = mission;
  const dispatch = useDispatch();
  return (
    <tr className="mission-item">
      <td className="mission_name">{mission_name}</td>
      <td className="mission-decription">{description}</td>
      {reserved ? (
        <>
          <td className="join-status">
            <span className="mission-reserved">Active Member</span>
          </td>
          <td className="mission-action">
            <button
              className="leave-mission"
              type="button"
              onClick={() => dispatch(missionHandler(mission_id))}
            >
              Leave Mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="join-status">
            <span className="mission-unreserved">Not a Member</span>
          </td>
          <td className="mission-action">
            <button
              className="join-mission"
              type="button"
              onClick={() => dispatch(missionHandler(mission_id))}
            >
              Join mission
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
