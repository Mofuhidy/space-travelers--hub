import { useSelector } from 'react-redux';
import React from 'react';
import { Table } from 'react-bootstrap';
import './ActiveMissions.css';

const ActiveMissions = () => {
  const missions = useSelector((store) => store.missions.missions.filter((item) => item.reserved));

  return (
    <div className=" mission-table mx-5 px-4">
      <h2 className="titleTable">My Missions</h2>
      {missions.length ? (
        <Table bordered>
          <tbody>
            {
        missions.map((mission) => (
          <tr key={mission.missionId}>
            <td>{mission.missionName}</td>
          </tr>
        ))
}
          </tbody>

        </Table>
      ) : <p>No Active missions</p>}
    </div>
  );
};

export default ActiveMissions;
