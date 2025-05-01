export const fetchUsers = async () => {
    try{
        const response = await fetch(`http://localhost:5000/customers`);
        if(!response.ok){
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.log('Error fetching users: '. error);
        return []
    }
}