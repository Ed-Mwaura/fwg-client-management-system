import { getAllCustomers } from "../controllers/customersController.js";

export const handleCustomerRoutes = (req, res) => {
    if(req.method === 'GET' && req.url === '/customers'){
        getAllCustomers(req, res);
    }
}