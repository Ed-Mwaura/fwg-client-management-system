import React from 'react';
import UserDetailsCardLeft from './UserDetailsCardLeft';
import UserDetailsCardRight from './UserDetailsCardRight';

const UserDetailsCard = ({ user }) => {
    return (
        <div className="user-div">
            <UserDetailsCardLeft user={user} />
            <UserDetailsCardRight user={user} />
        </div>
    );
};

export default UserDetailsCard;
