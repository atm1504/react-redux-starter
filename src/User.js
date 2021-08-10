import React from 'react';

const User = (props) => {
    console.log(props.data.name)
    const { data } = props;
    return (
        <div>
            <h1>User commponent</h1>
            <h4>{data.age }</h4>
        </div>
    )
}

export default User;