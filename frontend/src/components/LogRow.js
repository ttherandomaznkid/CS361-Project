import React from 'react';
import LogTable from './LogTable';
import { useNavigate } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";



function LogRow( { destination, onDelete, onEdit } ) {
    const redirect = useNavigate();

    const navigateToCreate = () => {
        redirect('/add-destination');
      };


    return (
        <table>
            <thead>
                <tr>
                    <td>Delete</td>
                    <th>Edit</th>
                    <th>Destination</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Review</th>
                    <th><BiCommentAdd onClick={navigateToCreate}/></th>
                </tr>
            </thead>
            <tbody>
                {destination.map((dest, i) => 
                    <LogTable
                        dest={dest} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default LogRow;