import { createCustomer, deleteCustomer, getAllCustomers, getCustomerDetails } from "../controllers/customersController.js";

export const handleCustomerRoutes = (req, res) => {
    if(req.method === 'GET' && (req.url === '/customers' || req.url ==='/')){
        getAllCustomers(req, res);
    } else if(req.method === 'GET' && req.url.startsWith('/customers/')){
        getCustomerDetails(req, res)
    } else if(req.method === 'POST' && req.url === '/customers/create'){
        createCustomer(req, res);
    } else if(req.method === 'DELETE' && req.url.startsWith('/customers/')){
        deleteCustomer(req, res);
    } else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Route not found'}));
    }
}