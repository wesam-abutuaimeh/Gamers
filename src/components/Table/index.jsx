import React from "react";
import "./style.css"

const Table = ({ columns, data }) => {
    return <table>
        <thead>
            <tr>
                {columns.map((col, index) => {
                    return <th key={col.key}>{col.title}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => {
                return <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={`${row.id + column.key}`}>
                            {column.render ? column.render(row) : row[column.key]}
                        </td>
                    ))
                    }
                </tr>
            })}
        </tbody>
    </table>
}

export default Table; 
