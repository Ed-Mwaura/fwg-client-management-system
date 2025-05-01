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
                <div className="customer-home">
                    <h1>Our awesome customers</h1>
                    <Link className="new-cust" to="/customers/create">
                        New Customer
                    </Link>
                </div>
                <div className="all-users">
                    <UsersCard users={users} />
                </div>
            </div>
        </>
    );
};

export default ListUsersPage;
