import React from 'react';

const Post = (props) => {
    return (
        <tr>
            <td>{props.post.pista}</td>
            <td>{props.post.dia + "/" + props.post.mes}</td>
            <td>{props.post.hora}</td>
        </tr>
    )
}

export default Post;