import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUsersData } from '../hooks/useUsers';
import UsersCard from '../components/ListUsers/UsersCard';

const ListUsersPage = () => {
    const { users } = useUsersData();

    const location = useLocation();
    const navigate = useNavigate();
    const [message, setMessage] = useState(location.state?.message || '');

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000);

            // prevent alert from showing up after refreshing page
            navigate(location.pathname, { replace: true });

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <>
            <div className="users">
                {message && <div className="alert success">{message}</div>}
                <h1>Our awesome clients</h1>
                <div className="all-users">
                    <UsersCard users={users} />
                </div>
            </div>
        </>
    );
};

export default ListUsersPage;
