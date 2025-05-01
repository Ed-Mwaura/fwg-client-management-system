import React from 'react';
import { useParams } from 'react-router-dom';
import { useUsersData } from '../hooks/useUsers';

const UserDetailsPage = () => {
    const { users } = useUsersData();
    const params = useParams();

    const selectedUser = users.find(
        (user) => user.id === parseInt(params.userId)
    );

    return (
        <>
            {selectedUser ? (
                <div>
                    Details for user {params.userId}
                    <div>
                        {selectedUser.first_name} {selectedUser.last_name}
                    </div>
                </div>
            ) : (
                <div>User not found</div>
            )}
        </>
    );
};

export default UserDetailsPage;
