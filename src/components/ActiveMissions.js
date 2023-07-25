import { useSelector } from 'react-redux';
import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import './ActiveMissions.css';

const ActiveMissions = () => {
  const missions = useSelector((store) => store.missions.missions);
  const reservedMissions = useMemo(() => missions.filter((item) => item.reserved), [missions]);

  return (
    <div className=" mission-table mx-5 px-4">
      <h2>My Missions</h2>
      {reservedMissions.length ? (
        <Table bordered>
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.missionId}>
                <td>{mission.missionName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : <p>No Active missions</p>}
    </div>
  );
};

export default ActiveMissions;
