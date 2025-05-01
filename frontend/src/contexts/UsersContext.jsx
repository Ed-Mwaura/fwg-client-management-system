import { createContext, useContext, useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch users from backend upon component mount
    useEffect(() => {
        const getCustomers = async () => {
            try {
                const customerList = await fetchUsers();
                setUsers(customerList);
            } catch (error) {
                setError('Error fetching customers');
            } finally {
                setLoading(false);
            }
        };

        getCustomers();
    }, []);

    // simulate deleting users as filtering out selected user
    // const deleteUser = (id) => {
    //     setUsers((prev) => prev.filter((u) => u.id !== parseInt(id)));
    // };

    // delete users from backend and update the UI
    const deleteUser = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5000/customers/${id}`,
                {
                    method: 'DELETE',
                }
            );
            if (response.status === 204) {
                setUsers((prev) => prev.filter((u) => u.id !== parseInt(id)));
            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.log('Error deleting user: ', error);
        }
    };

    // add new users
    const addUser = async (user) => {
        const newUserId =
            users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
        const newUser = {
            id: newUserId, // id is not part of user object. Compute based on existing object, then add to user object
            ...user,
        };

        try {
            const response = await fetch(
                'http://localhost:5000/customers/create',
                {
                    method: 'POST',
                    body: JSON.stringify(newUser),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }

            const responseUser = await response.json();
            setUsers((currUsers) => [...currUsers, responseUser]);
        } catch (error) {
            console.log('Error adding user: ', error);
        }
    };

    return (
        <UsersContext.Provider
            value={{ users, deleteUser, addUser, loading, error }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => useContext(UsersContext);
