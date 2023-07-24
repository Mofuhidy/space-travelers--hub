import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';
import './rockets.css';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ul className="rocketsContainer">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </ul>
  );
}
export default Rockets;
