import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LogRow from '../components/LogRow.js';
import './CreatePage.css';

function LogPage({ }) {


    const redirect = useNavigate();

    const [destination, setDestination] = useState([]);

    const loadDestination = async () => {
        const response = await fetch('/log');
        const dest = await response.json();
        setDestination(dest);
    } 


    const onEditDest = async dest=> {
        setDestination(dest);
        redirect("/edit-destination");
    }
    

    const onDeleteDest = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const destination = await getResponse.json();
            setDestination(destination);
        } else {
            console.error(`Failed to delete destination with _id = ${_id}, status code = ${response.status}`)
        }
    }
   
    useEffect(() => {
        loadDestination();
    }, []);

    return (

        <div className='create' id='create'>
                <div className='container'></div>
    <h1>Itinerary</h1>

     
        <p>
          You are able to add the destination, year of travel, status of trip, and review.
        </p>
        <br></br>
        <p>
           <i> To add an entry, click the icon next to review </i>
        </p>

        <br></br>
    
         
        <LogRow
            destination ={destination}
            onEdit      ={onEditDest}
            onDelete    ={onDeleteDest}
    
         />
    </div>
    );
}

export default LogPage;