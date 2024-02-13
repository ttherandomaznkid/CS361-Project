import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function LogTable({ dest, onEdit, onDelete }) {
    return (
        <tr>
            <td><MdDeleteForever onClick={() => onDelete(dest._id)} /></td>
            <td><MdEdit onClick={() => onEdit(dest)} /></td>
            <td>{dest.destination}</td>
            <td>{dest.year}</td>
            <td>{dest.status}</td>
            <td>{dest.review}</td>
            
        </tr>
    );
}

export default LogTable;