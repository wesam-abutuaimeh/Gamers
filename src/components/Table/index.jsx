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
            {data?.map((row, index) => (
                <tr key={row._id + index}>
                    {columns.map((column) => (
                        <td key={`${row._id + column.key}`}>
                            {column.render ? column.render(row) : Array.isArray(row[column.key]) ? row[column.key].join(' __ ') : row[column.key]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table >
}

export default Table; 
