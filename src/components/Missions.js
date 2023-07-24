import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissions } from '../redux/missions/missionsThunk';
import Mission from './MyMission';

function Missions() {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th className="t-name">Mission</th>
            <th className="t-description">Description</th>
            <th className="t-status">Status</th>
            <th className="t-action"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <Mission key={item.mission_id} mission={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default Missions;
