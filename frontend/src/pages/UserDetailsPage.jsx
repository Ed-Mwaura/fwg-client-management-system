import React from 'react';
import { useParams } from 'react-router-dom';
import { useUsersData } from '../hooks/useUsers';
import UserDetailsCard from '../components/UserDetails/UserDetailsCard';

const UserDetailsPage = () => {
    const { users } = useUsersData();
    const params = useParams();

    const selectedUser = users.find(
        (user) => user.id === parseInt(params.userId)
    );

    return (
        <>
            {selectedUser ? (
                <div className="container">
                    <h4>Details of {selectedUser.first_name} </h4>
                    <UserDetailsCard user={selectedUser} />
                </div>
            ) : (
                <div>User not found</div>
            )}
        </>
    );
};

export default UserDetailsPage;
