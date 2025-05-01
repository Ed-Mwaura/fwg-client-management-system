import { createContext, useContext, useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //TODO: fetch users from API
    useEffect(() => {
        const fetchedUsers = fetchUsers();
        setUsers(fetchedUsers);
    }, []);

    // simulate deleting users as filtering out selected user
    const deleteUser = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== parseInt(id)));
    };

    // add new users
    const addUser = (user) => {
        const newUser = {
            id: users.length + 1, // id is not part of user object. I compute it based on existing object, then add to user object
            ...user,
        };

        setUsers((currUsers) => [...currUsers, newUser]);
    };

    return (
        <UsersContext.Provider value={{ users, deleteUser, loading, error }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => useContext(UsersContext);
