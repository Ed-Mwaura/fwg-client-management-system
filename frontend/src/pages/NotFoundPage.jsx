import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h4>404 Not Found</h4>
            <Link className="to-home-btn" to="/">
                Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
