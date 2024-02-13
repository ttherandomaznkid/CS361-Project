import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js" 

function StaffPage() {

    const [getResults, setResults] = useState([])
    const getProfileAtRandom = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {
            setResults(response.results);
        })
        .catch(() =>{
            alert("Unable to display profiles")
        });
    };
    return (
        <>
    <h2>Staff Page</h2>
    <article>

     
        <p>
          This is the staff page. When one of the buttons below is clicked, a random 
          generated profile will appear with their name, option to e-mail, telephone, and city.
        </p>


        <p>
          <button id="fromServer" onClick={getProfileAtRandom} value="Add">Add</button>
           <br></br>to get a set of 10 random profiles
        </p>

        
        <table>
        <caption>This is the table displaying the name, option to e-mail, phone, and location</caption>
            <thead>
                <tr class="tableHeading">
                <th>Portrait</th>
                <th>Name & Email</th>
                <th>Telephone</th>
                <th>City</th>
                </tr>
            </thead>
        
            <tbody id = "randomProfile">
            {getResults.map((profile, index) => <StaffRow profile = {profile} key = {index} />)}

            </tbody>
        
        </table>
    </article>
         </>
    );
}

export default StaffPage;