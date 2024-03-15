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
                    <td>
                        {repair.price !== undefined && repair.price !== null ? `${repair.price} грн` :
                            repair.warranty_duration !== undefined && repair.warranty_duration !== null ? `${repair.warranty_duration} міс` : 
                            'Уточнюйте'}
                    </td>
                </tr>
                ))}
            </tbody>
      </table>
    );
}

export default Table;