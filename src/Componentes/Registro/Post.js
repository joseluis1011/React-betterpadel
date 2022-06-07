import React from 'react';

const Post = (props) => {
    return (
        <tr>
            <td>{props.post.pista}</td>
            <td>{props.post.dia}</td>
            <td>{props.post.mes}</td>
            <td>{props.post.hora}</td>
        </tr>
    )
}

export default Post;