import React, { useState } from 'react';
import { useUsers } from '../contexts/UsersContext';
import { Link, useNavigate } from 'react-router-dom';

const CreateUserPage = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        image: '',
    });

    const { addUser } = useUsers();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((currFormData) => ({ ...currFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addUser(formData);

        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            image: '',
        });

        navigate('/', { state: { message: 'Customer added successfully' } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="header">
                    <div className="text">Create awesome user</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    <div className="input">
                        <i className="fa fa-user input-icons"></i>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            placeholder="First Name"
                        />
                    </div>
                    <div className="input">
                        <i className="fa fa-user-circle input-icons"></i>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="input">
                        <i className="fa fa-envelope input-icons"></i>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="input">
                        <i className="fa fa-user-o input-icons"></i>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            placeholder="Gender"
                        />
                    </div>
                    <div className="input">
                        <i className="fa fa-link input-icons"></i>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Image (URL)"
                        />
                    </div>
                </div>
                <div className="submit-container">
                    <Link to="/" className="submit submit-cancel">
                        Cancel
                    </Link>
                    <div className="submit submit-add" onClick={handleSubmit}>
                        Add
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateUserPage;
