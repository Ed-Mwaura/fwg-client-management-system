import { useUsers } from "../contexts/UsersContext";

export const useUsersData = () => {
    const {users, deleteUser, loading, error} = useUsers();

    return {users, deleteUser, loading, error};
};