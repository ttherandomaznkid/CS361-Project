import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './CreatePage.css';


export const CreatePage = () => {
    const [destination, setDest]    = useState(' ');
    const [year,        setYear]    = useState(' ');
    const [status,      setStatus]  = useState(' ');
    const [review,      setReview]  = useState(' ');

    const navigateBackToLog = () => {
        redirect('/');
      };

    const redirect = useNavigate();

    const addDestination = async () => {
        const newDestination = { destination, year, status, review };
        const response = await fetch('/log', {
            method: 'POST',
            body: JSON.stringify(newDestination),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/log");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/log");
        }
    };
    

    return (
        <>
        <div className='create' id='create'>
                <div className='container'></div>

            
            <h2>Create Itinerary</h2>

            <button onClick={navigateBackToLog}>Back</button>

            <p>Please Submit an inquiry with your name, contact number, e-mail and description.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    
                    <label for="destination">Destination: </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={destination}
                        onChange={e => setDest(e.target.value)} 
                        id="destination" />
                    
                    <label for="year"> Year: </label>
                    <input
                        type="number"
                        value={year}
                        placeholder="XXX-XXX-XXXX"
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="status">Status: </label>
                    <input
                        type="text"
                        placeholder="Status of trip"
                        value={status}
                        onChange={e => setStatus(e.target.value)} 
                        id="status" />

                    <label for="review">Review: </label>
                    <input
                        type="text"
                        placeholder="Review of trip"
                        value={review}
                        onChange={e => setReview(e.target.value)} 
                        id="review" />


                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addDestination}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>

            </div>
        </>
    );
}

export default CreatePage;