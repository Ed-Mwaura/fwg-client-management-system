import {createServer} from 'http';
import { handleCustomerRoutes } from './routes/customers.js';

const PORT = 5000;

const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    handleCustomerRoutes(req, res);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})