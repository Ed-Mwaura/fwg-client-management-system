import { createContext, useContext, useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch users from backend upon component mount. Runs only once upon component mount
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
    const deleteUser = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== parseInt(id)));
    };

    // add new users
    const addUser = (user) => {
        const newUserId =
            users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
        const newUser = {
            id: newUserId, // id is not part of user object. Compute based on existing object, then add to user object
            ...user,
        };

        setUsers((currUsers) => [...currUsers, newUser]);
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
