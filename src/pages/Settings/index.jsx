import React, { useEffect, useState } from 'react';
import { ROLES } from '../../constant/roles';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

export default function AdminPage() {
    const adminToken = localStorage.getItem("token");
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const [deletingUser, setDeletingUser] = useState(null); // New state for the user being deleted

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://react-tt-api.onrender.com/api/users", {
                    headers: { Authorization: `Bearer ${adminToken}` }
                });
                setUsers(response.data.users);
                setIsLoading(false); // Set loading state to false after data is fetched
            } catch (error) {
                console.log(error);
                setIsLoading(false); // Set loading state to false if an error occurs
            }
        };

        fetchData();
    }, [adminToken]);

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role === ROLES.GUEST || !role) {
            navigate('/login');
        } else if (role === ROLES.USER) {
            navigate('/home');
        }
    }, [navigate]);

    const deleteUser = async (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            setDeletingUser(userId); // Set the user being deleted
            try {
                await axios.delete(`https://react-tt-api.onrender.com/api/users/${userId}`, {
                    headers: { Authorization: `Bearer ${adminToken}` }
                });
                setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
            } catch (error) {
                console.log(error);
            } finally {
                setDeletingUser(null); // Reset the user being deleted
            }
        }
    };

    return (
        <div className="adminPage">
            <h1 className="welcomeMessage">Welcome to the Admin Page</h1>

            {isLoading ? (<h1 className="loader">Loading...</h1>) : (
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <React.Fragment key={user._id}>
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.updatedAt}</td>
                                    <td>
                                        {deletingUser === user._id ? (
                                            <div className="loader">Deleting...</div>
                                        ) : (
                                            <button className='deleteButton' onClick={() => deleteUser(user._id)}>Delete</button>
                                        )}
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            )}

            <Link to="/home" className="backButton">Back to Home</Link>
        </div>
    );
}
