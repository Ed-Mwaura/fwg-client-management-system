import React from 'react';

const UserDetailsCardLeft = ({ user }) => {
    return (
        <>
            <div className="user-div-left">
                <div className="img-container">
                    <img src={user.image} alt={`${user.first_name}'s avatar`} />
                </div>
            </div>
        </>
    );
};

export default UserDetailsCardLeft;
