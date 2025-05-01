import { customers as originalCustomers } from "../data/customersData.js";

let allCustomers = [...originalCustomers];

export const getAllCustomers = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(allCustomers));
};

export const getCustomerDetails = (req, res) => {
    const customerId = parseInt(req.url.split('/')[2]);
    const customer = allCustomers.find((cust) => cust.id === customerId);

    if (customer){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(customer));
    } else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'User not found'}));
    }
    
};

export const createCustomer = (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () =>{
        try{
            const newUser = JSON.parse(body);

            allCustomers.push(newUser);

            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(newUser));
        } catch(error){
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'Invalid data format'}));
        }
    });
};

export const deleteCustomer = (req, res) => {
    const userId = parseInt(req.url.split('/')[2]);

    // find index of user to delete 
    const userIndex = allCustomers.findIndex((user) => user.id === userId);

    // if user not found, return 404
    if(userIndex === -1){
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'User not found'}));
    } else{
        // remove user from allCustomers array
        allCustomers.splice(userIndex, 1);

        // send 204 for no content status: indicates deletion was successful
        res.writeHead(204);
        res.end();
    }
}