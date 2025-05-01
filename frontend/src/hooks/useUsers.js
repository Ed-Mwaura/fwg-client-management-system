import { useUsers } from "../contexts/UsersContext";

export const useUsersData = () => {
    const {users, deleteUser, addUser, loading, error} = useUsers();

    return {users, deleteUser, addUser, loading, error};
};