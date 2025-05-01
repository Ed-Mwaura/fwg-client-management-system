import React from 'react';
import { Link } from 'react-router-dom';
import { useUsersData } from '../hooks/useUsers';

const ListUsersPage = () => {
    const { users, deleteUser, loading, error } = useUsersData();
    console.log('users:', users);

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link key={user.id} to={`/users/${user.id}`}>
                            {user.first_name} {user.last_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListUsersPage;
