import React from 'react';

function StaffRow( {profile} ) {
    return (
        <tr>
        <td>
            <img src={profile.picture.thumbnail} alt="Random Person Generator Thumbnail"  /></td>
        <td>
            <a href="mailto:{profile.email}">
            {profile.name.first}
            {profile.name.last}</a>
        </td>
        <td>{profile.phone}</td>
        <td>{profile.location.city}</td>
    </tr>
    );
}

export default StaffRow;