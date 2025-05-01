import React from 'react';
import { Link } from 'react-router-dom';
import { useUsersData } from '../hooks/useUsers';
import UsersCard from '../components/ListUsers/UsersCard';

const ListUsersPage = () => {
    const { users, deleteUser, loading, error } = useUsersData();
    console.log('users:', users);

    return (
        <>
            <div className="users">
                <h1>Our awesome clients</h1>
                <div className="all-users">
                    <UsersCard users={users} />
                </div>
            </div>
        </>
    );
};

export default ListUsersPage;
