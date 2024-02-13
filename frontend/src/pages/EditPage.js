import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import './CreatePage.css';

export const EditPage = ({ destination }) => {
 
    const [setDestination, setDest]    = useState(destination.destination);
    const [year,        setYear]    = useState(destination.year);
    const [status,      setStatus]  = useState(destination.status);
    const [review,      setReview]  = useState(destination.language);
    
    const redirect = useNavigate();

    const navigateBackToLog = () => {
        redirect('/');
      };

    const editDest = async () => {
        const response = await fetch(`/log/${destination._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                destination: destination,
                year: year,
                status: status,
                review: review,
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`travel document edited`);
        } else {
            const errMessage = await response.json();
            alert(`travel document not edited; status ${response.status}. ${errMessage.Error}`);
        }
        redirect("./log");
    }

    return (
        <>
                <div className='create' id='create'>
                <div className='container'></div>
        <article>
            <h2>Edit a travel log in the collection</h2>
            
            <button onClick={navigateBackToLog}>Back</button>

            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which travel log are you editing</legend>
                    <label for="Destination">Destination </label>
                    <input
                        type="text"
                        value={destination}
                        onChange={e => setDest(e.target.value)} 
                        id="destination" />
                    
                    <label for="year"> Year of travel </label>
                    <input
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)} 
                        id="year" />
                    
                    <label for="status"> Status of travel </label>
                    <input
                        type="text"
                        value={status}
                        onChange={e => setStatus(e.target.value)} 
                        id="status" />

                    <label for="review"> Review of travel </label>
                    <input
                        type="text"
                        value={review}
                        onChange={e => setReview(e.target.value)} 
                        id="review" />

                    <label for="submit">
                    <button
                        onClick={editDest}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
            </div>
        </>
    );
}
export default EditPage;