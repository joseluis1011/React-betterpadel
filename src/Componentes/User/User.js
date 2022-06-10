import React from 'react';

const User = (props) => {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.telefono}</td>
        </tr>
    )
}

export default User;