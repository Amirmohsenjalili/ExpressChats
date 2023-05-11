import React from 'react';

const User = ({userData}) => {
    console.log(userData)
    return (
        <div>
            <img />
            <div>
                <h3>{userData.name}</h3>
                <p>Last Comment</p>
                <div>
                    <p>date</p>
                </div>
            </div>
        </div>
    );
};

export default User;