import React from 'react';
import { Link } from 'react-router-dom';

const UserDetailsCardRight = ({ user }) => {
    return (
        <>
            <div className="user-div-right">
                <div className="label-value">
                    <div className="label-icon">
                        <i className="fa fa-id-card"></i>
                        <span>Client name: </span>
                    </div>
                    <div className="label-description">
                        {user.first_name} {user.last_name}
                    </div>
                </div>

                <div className="label-value">
                    <div className="label-icon">
                        <i className="fa fa-envelope"></i>
                        <span>Client Email: </span>
                    </div>
                    <div className="label-description">{user.email}</div>
                </div>

                <div className="label-value">
                    <div className="label-icon">
                        <i className="fa fa-user"></i>
                        <span>Gender: </span>
                    </div>
                    <div className="label-description">{user.gender}</div>
                </div>

                <div className="btn-groups">
                    <Link to="/" className="back-btn">
                        Back
                    </Link>
                    <Link to="/" className="delete-btn">
                        Delete
                    </Link>
                </div>
            </div>
        </>
    );
};

export default UserDetailsCardRight;
