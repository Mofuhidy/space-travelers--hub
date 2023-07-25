import { useSelector } from 'react-redux';
import React from 'react';
import { Table } from 'react-bootstrap';
import './ActiveMissions.css';

const ActiveRockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className=" mission-table mx-5 px-4">
      <h2 className="titleTable">My Rockets</h2>
      {reservedRockets.length ? (
        <Table bordered>
          <tbody>
            {
        reservedRockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.title}</td>
          </tr>
        ))
}
          </tbody>

        </Table>
      ) : <p>No Active rockets</p>}
    </div>
  );
};

export default ActiveRockets;
