import React from 'react';
import { Link } from 'react-router-dom';

const UsersCard = ({ users }) => {
    console.log('card: ', users);
    return (
        <>
            {users.map((user) => {
                return (
                    <div className="user">
                        <img
                            src={user.image}
                            alt={`${user.first_name}'s avatar`}
                        />
                        <div className="user-info">
                            <h4 className="username">
                                {user.first_name} {user.last_name}
                            </h4>
                            <Link
                                className="details-btn"
                                to={`/users/${user.id}`}
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default UsersCard;
