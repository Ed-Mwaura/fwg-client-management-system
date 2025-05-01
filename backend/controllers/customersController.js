import { customers } from "../data/customersData.js";

export const getAllCustomers = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(customers));
}