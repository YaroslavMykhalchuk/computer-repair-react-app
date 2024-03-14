import React from "react";

import './Table.scss';

const Table = ({ repairs, field }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                <th>Тип ремонту</th>
                <th>{field}</th>
                </tr>
            </thead>
            <tbody>
                {repairs.map((repair) => (
                <tr key={repair.id}>
                    <td>{repair.name}</td>
                    <td>{repair.price ? `${repair.price} грн` : 'Уточнюйте'}</td>
                </tr>
                ))}
            </tbody>
      </table>
    );
}

export default Table;