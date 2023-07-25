import ActiveMissions from '../components/ActiveMissions';
import ActiveRockets from '../components/ActiveRockets';
import './myProfile.css';

function Myprofile() {
  return (
    <div className="myProfileContainer">
      <ActiveMissions />
      <ActiveRockets />
    </div>
  );
}
export default Myprofile;
